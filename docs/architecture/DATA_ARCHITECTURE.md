# Data Architecture

## Overview

The HEOSA platform uses a **hybrid data storage approach** combining static TypeScript data files for read-heavy operations and PostgreSQL database for dynamic, transactional data. This architecture balances performance, simplicity, and scalability.

## Data Storage Strategy

### Current Architecture (v1.0)

```
┌─────────────────────────────────────────┐
│  TypeScript Data Files                  │
│  - Finalists profiles                   │
│  - Winners data                         │
│  - Gallery metadata                     │
│  - Timeline configurations              │
│  ✓ Fast read access                     │
│  ✓ Version controlled                   │
│  ✓ Type-safe                            │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  File System Storage                    │
│  - Images (5GB+)                        │
│  - Videos                               │
│  - Documents                            │
│  ✓ Direct access                        │
│  ✓ CDN-ready                            │
└─────────────────────────────────────────┘
```

### Planned Architecture (v2.0)

```
┌──────────────────┬──────────────────────┐
│  Static Data     │   Dynamic Data       │
│  (TypeScript)    │   (PostgreSQL)       │
├──────────────────┼──────────────────────┤
│  Finalists       │   Nominations        │
│  Winners         │   Votes              │
│  Categories      │   Users              │
│  Timeline        │   Sessions           │
│  Gallery Index   │   Analytics          │
└──────────────────┴──────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  File System / Object Storage           │
│  - Images (S3/CloudFlare R2)            │
│  - Videos (CDN)                         │
│  - Backups                              │
└─────────────────────────────────────────┘
```

## PostgreSQL Database Design

### Why PostgreSQL?

1. **Robust ACID Compliance** - Ensures data integrity for votes and nominations
2. **JSON Support** - Native JSONB for flexible data structures
3. **Full-Text Search** - Built-in search capabilities for nominations
4. **Scalability** - Handles millions of votes efficiently
5. **Open Source** - No licensing costs
6. **Rich Ecosystem** - Excellent PHP/Node.js support

### Database Schema

#### Nominations Table

```sql
CREATE TABLE nominations (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    nominee_name VARCHAR(255) NOT NULL,
    nominee_email VARCHAR(255) NOT NULL,
    nominee_phone VARCHAR(50),
    nominee_institution VARCHAR(255),
    nominee_location VARCHAR(255),
    nominator_name VARCHAR(255) NOT NULL,
    nominator_email VARCHAR(255) NOT NULL,
    nominator_phone VARCHAR(50),
    nominator_location VARCHAR(255),
    achievements TEXT,
    impact TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT valid_email_nominee CHECK (nominee_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),
    CONSTRAINT valid_email_nominator CHECK (nominator_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

-- Indexes for performance
CREATE INDEX idx_nominations_category ON nominations(category);
CREATE INDEX idx_nominations_status ON nominations(status);
CREATE INDEX idx_nominations_created ON nominations(created_at DESC);
CREATE INDEX idx_nominations_nominee_email ON nominations(nominee_email);

-- Full-text search index
CREATE INDEX idx_nominations_search ON nominations USING GIN (
    to_tsvector('english', 
        coalesce(nominee_name, '') || ' ' || 
        coalesce(achievements, '') || ' ' || 
        coalesce(impact, '')
    )
);

-- Trigger for automatic updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_nominations_updated_at 
    BEFORE UPDATE ON nominations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE nominations IS 'Stores award nominations submitted through the website';
COMMENT ON COLUMN nominations.status IS 'pending: awaiting review, approved: finalist, rejected: not selected';
```

#### Votes Table

```sql
CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    finalist_id VARCHAR(50) NOT NULL,
    vote_method VARCHAR(20) NOT NULL CHECK (vote_method IN ('sms', 'whatsapp', 'email', 'web')),
    vote_code VARCHAR(20) NOT NULL,
    voter_identifier VARCHAR(255), -- Phone number or email (hashed)
    ip_address INET,
    user_agent TEXT,
    country_code VARCHAR(2),
    is_verified BOOLEAN DEFAULT false,
    verification_code VARCHAR(6),
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT valid_vote_code CHECK (vote_code ~ '^AHEA\s\d{3}$')
);

-- Indexes
CREATE INDEX idx_votes_finalist ON votes(finalist_id);
CREATE INDEX idx_votes_created ON votes(created_at DESC);
CREATE INDEX idx_votes_method ON votes(vote_method);
CREATE INDEX idx_votes_verified ON votes(is_verified) WHERE is_verified = true;

-- Prevent duplicate votes (same identifier per finalist)
CREATE UNIQUE INDEX idx_votes_unique ON votes(finalist_id, voter_identifier) 
    WHERE voter_identifier IS NOT NULL;

-- Materialized view for vote counts
CREATE MATERIALIZED VIEW vote_counts AS
SELECT 
    finalist_id,
    vote_code,
    COUNT(*) as total_votes,
    COUNT(*) FILTER (WHERE is_verified = true) as verified_votes,
    COUNT(*) FILTER (WHERE vote_method = 'sms') as sms_votes,
    COUNT(*) FILTER (WHERE vote_method = 'whatsapp') as whatsapp_votes,
    COUNT(*) FILTER (WHERE vote_method = 'email') as email_votes,
    COUNT(*) FILTER (WHERE vote_method = 'web') as web_votes,
    MAX(created_at) as last_vote_at
FROM votes
GROUP BY finalist_id, vote_code;

CREATE UNIQUE INDEX idx_vote_counts_finalist ON vote_counts(finalist_id);

-- Refresh vote counts (run periodically)
-- REFRESH MATERIALIZED VIEW CONCURRENTLY vote_counts;
```

#### Users Table (Admin System)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin', 'viewer')),
    is_active BOOLEAN DEFAULT true,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
```

#### Sessions Table

```sql
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL,
    ip_address INET,
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sessions_user ON sessions(user_id);
CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_expires ON sessions(expires_at);

-- Automatically delete expired sessions
CREATE OR REPLACE FUNCTION delete_expired_sessions()
RETURNS void AS $$
BEGIN
    DELETE FROM sessions WHERE expires_at < CURRENT_TIMESTAMP;
END;
$$ LANGUAGE plpgsql;
```

#### Analytics Table

```sql
CREATE TABLE analytics_events (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    session_id UUID REFERENCES sessions(id) ON DELETE SET NULL,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_analytics_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_created ON analytics_events(created_at DESC);
CREATE INDEX idx_analytics_data ON analytics_events USING GIN (event_data);

COMMENT ON TABLE analytics_events IS 'Stores user activity and analytics data';
```

### Database Connection

#### PHP PDO Connection

```php
<?php
// config/database.php

class Database {
    private $host;
    private $port;
    private $db_name;
    private $username;
    private $password;
    public $conn;

    public function __construct() {
        $this->host = getenv('DB_HOST') ?: 'localhost';
        $this->port = getenv('DB_PORT') ?: '5432';
        $this->db_name = getenv('DB_NAME') ?: 'heosa_db';
        $this->username = getenv('DB_USERNAME') ?: 'heosa_user';
        $this->password = getenv('DB_PASSWORD');
    }

    public function getConnection() {
        $this->conn = null;
        
        try {
            $dsn = "pgsql:host={$this->host};port={$this->port};dbname={$this->db_name}";
            $this->conn = new PDO($dsn, $this->username, $this->password);
            
            // Set error mode
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Return arrays as associative arrays
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            
        } catch(PDOException $exception) {
            error_log("Database connection error: " . $exception->getMessage());
            throw new Exception("Database connection failed");
        }
        
        return $this->conn;
    }
}
```

#### Environment Variables

Add to `.env`:

```bash
# PostgreSQL Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=heosa_db
DB_USERNAME=heosa_user
DB_PASSWORD=your_secure_password

# Connection Pool (optional)
DB_POOL_MIN=2
DB_POOL_MAX=10
```

### Data Access Layer

#### Nomination Model

```php
<?php
// models/Nomination.php

class Nomination {
    private $conn;
    private $table_name = "nominations";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function create($data) {
        $query = "INSERT INTO " . $this->table_name . "
                 (category, nominee_name, nominee_email, nominee_phone, 
                  nominee_institution, nominee_location, nominator_name, 
                  nominator_email, nominator_phone, nominator_location, 
                  achievements, impact)
                 VALUES 
                 (:category, :nominee_name, :nominee_email, :nominee_phone,
                  :nominee_institution, :nominee_location, :nominator_name,
                  :nominator_email, :nominator_phone, :nominator_location,
                  :achievements, :impact)
                 RETURNING id";

        $stmt = $this->conn->prepare($query);
        
        // Bind parameters
        foreach ($data as $key => $value) {
            $stmt->bindValue(":{$key}", $value);
        }
        
        $stmt->execute();
        return $stmt->fetch()['id'];
    }

    public function read($filters = []) {
        $query = "SELECT * FROM " . $this->table_name . " WHERE 1=1";
        
        if (isset($filters['status'])) {
            $query .= " AND status = :status";
        }
        
        if (isset($filters['category'])) {
            $query .= " AND category = :category";
        }
        
        $query .= " ORDER BY created_at DESC";
        
        $stmt = $this->conn->prepare($query);
        
        foreach ($filters as $key => $value) {
            $stmt->bindValue(":{$key}", $value);
        }
        
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function searchFullText($search_term) {
        $query = "SELECT *, 
                         ts_rank(to_tsvector('english', 
                             coalesce(nominee_name, '') || ' ' || 
                             coalesce(achievements, '') || ' ' || 
                             coalesce(impact, '')
                         ), plainto_tsquery('english', :search)) as rank
                  FROM " . $this->table_name . "
                  WHERE to_tsvector('english', 
                            coalesce(nominee_name, '') || ' ' || 
                            coalesce(achievements, '') || ' ' || 
                            coalesce(impact, '')
                        ) @@ plainto_tsquery('english', :search)
                  ORDER BY rank DESC";
        
        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(':search', $search_term);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
```

#### Vote Model

```php
<?php
// models/Vote.php

class Vote {
    private $conn;
    private $table_name = "votes";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function recordVote($data) {
        $query = "INSERT INTO " . $this->table_name . "
                 (finalist_id, vote_method, vote_code, voter_identifier, 
                  ip_address, user_agent, country_code)
                 VALUES 
                 (:finalist_id, :vote_method, :vote_code, :voter_identifier,
                  :ip_address, :user_agent, :country_code)
                 ON CONFLICT (finalist_id, voter_identifier) 
                 DO NOTHING
                 RETURNING id";

        $stmt = $this->conn->prepare($query);
        
        foreach ($data as $key => $value) {
            $stmt->bindValue(":{$key}", $value);
        }
        
        try {
            $stmt->execute();
            $result = $stmt->fetch();
            return $result ? $result['id'] : null; // null if duplicate
        } catch (PDOException $e) {
            error_log("Vote error: " . $e->getMessage());
            return false;
        }
    }

    public function getVoteCount($finalist_id) {
        $query = "SELECT * FROM vote_counts WHERE finalist_id = :finalist_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(':finalist_id', $finalist_id);
        $stmt->execute();
        return $stmt->fetch();
    }

    public function getLeaderboard($limit = 10) {
        $query = "SELECT * FROM vote_counts 
                  ORDER BY verified_votes DESC, total_votes DESC 
                  LIMIT :limit";
        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
```

## Migration Strategy

### Phase 1: Setup PostgreSQL

```bash
# Install PostgreSQL
# Ubuntu/Debian
sudo apt-get install postgresql postgresql-contrib

# macOS
brew install postgresql@14

# Start PostgreSQL
sudo systemctl start postgresql

# Create database and user
sudo -u postgres psql
CREATE DATABASE heosa_db;
CREATE USER heosa_user WITH ENCRYPTED PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE heosa_db TO heosa_user;
```

### Phase 2: Run Migrations

```bash
# Create migrations directory
mkdir -p database/migrations

# Run migration scripts
psql -U heosa_user -d heosa_db -f database/migrations/001_create_nominations.sql
psql -U heosa_user -d heosa_db -f database/migrations/002_create_votes.sql
psql -U heosa_user -d heosa_db -f database/migrations/003_create_users.sql
```

### Phase 3: Data Migration

```bash
# Export existing data (if any)
# Import TypeScript data to PostgreSQL
php scripts/import_finalists.php
php scripts/import_winners.php
```

## Backup Strategy

### Automated Backups

```bash
#!/bin/bash
# backup_db.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/postgresql"
DB_NAME="heosa_db"

# Create backup
pg_dump -U heosa_user -d $DB_NAME | gzip > $BACKUP_DIR/heosa_${DATE}.sql.gz

# Keep only last 30 days
find $BACKUP_DIR -name "heosa_*.sql.gz" -mtime +30 -delete

# Upload to cloud storage (optional)
aws s3 cp $BACKUP_DIR/heosa_${DATE}.sql.gz s3://heosa-backups/
```

### Restore Process

```bash
# Restore from backup
gunzip < heosa_20251202.sql.gz | psql -U heosa_user -d heosa_db
```

## Performance Optimization

### Query Optimization

```sql
-- Analyze query performance
EXPLAIN ANALYZE 
SELECT * FROM nominations 
WHERE category = 'Health Care Leader of the Year';

-- Update table statistics
ANALYZE nominations;

-- Vacuum to reclaim space
VACUUM FULL nominations;
```

### Connection Pooling

Consider using PgBouncer for connection pooling:

```ini
# pgbouncer.ini
[databases]
heosa_db = host=localhost port=5432 dbname=heosa_db

[pgbouncer]
listen_port = 6432
listen_addr = 127.0.0.1
auth_type = md5
pool_mode = transaction
max_client_conn = 100
default_pool_size = 20
```

## Monitoring

### Key Metrics

- Connection count
- Query performance
- Table sizes
- Index usage
- Lock contention
- Replication lag (if applicable)

### Monitoring Tools

- **pgAdmin** - GUI management
- **pg_stat_statements** - Query statistics
- **pgBadger** - Log analyzer
- **Datadog/New Relic** - APM integration

## Related Documentation

- [Backend Architecture](./BACKEND_ARCHITECTURE.md)
- [System Architecture](./SYSTEM_ARCHITECTURE.md)
- [API Documentation](../development/API_DOCUMENTATION.md)
- [Deployment Guide](../deployment/DEPLOYMENT.md)

---

**Last Updated:** December 2025  
**Maintained By:** HEOSA Development Team
