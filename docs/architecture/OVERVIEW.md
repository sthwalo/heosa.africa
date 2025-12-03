# Architecture Overview

## Introduction

The HEOSA (African Health Excellence Organisation) platform is built using a modern **three-tier architecture** pattern, separating presentation, application logic, and data concerns. This document provides a high-level overview of the system architecture and key design decisions.

## Architecture Pattern

### Three-Tier Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                        │
│         React 18 SPA + TypeScript + Tailwind CSS            │
│              Client-Side Rendering (CSR)                     │
│                     Port: 4173                               │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTP/REST API (JSON)
                       │ CORS-enabled
                       │
┌──────────────────────┴──────────────────────────────────────┐
│                   APPLICATION LAYER                          │
│          PHP 7.4+ REST API + PHPMailer                      │
│               https://heosa.africa/api                       │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ File System + SMTP
                       │
┌──────────────────────┴──────────────────────────────────────┐
│                     DATA LAYER                               │
│    TypeScript Data + File Storage + Email Services          │
│         Static Assets (Images, Videos, JSON)                 │
└─────────────────────────────────────────────────────────────┘
```

## Design Principles

### 1. Separation of Concerns (SoC)
- **Frontend:** Pure presentation and user interaction logic
- **Backend:** Business logic, email services, and data processing
- **Data:** Static content storage and configuration

### 2. Single Responsibility Principle (SRP)
Each component, module, and service has a single, well-defined responsibility:
- Components handle UI rendering only
- Pages handle routing and composition
- API endpoints handle specific operations
- Data files contain structured information

### 3. Don't Repeat Yourself (DRY)
- Reusable components (`Navbar`, `Footer`, `Timeline`)
- Shared TypeScript interfaces
- Centralized configuration
- Common utility functions

### 4. KISS (Keep It Simple, Stupid)
- No complex state management libraries
- File-based data storage (no database overhead)
- Simple REST API endpoints
- Minimal dependencies

## Technology Decisions

### Frontend: React + TypeScript + Vite

**Why React?**
- Component-based architecture
- Large ecosystem
- Virtual DOM performance
- Excellent TypeScript support

**Why TypeScript?**
- Type safety
- Better IDE support
- Reduced runtime errors
- Self-documenting code

**Why Vite?**
- Fast development server
- Instant HMR (Hot Module Replacement)
- Optimized production builds
- Modern ES modules support

### Backend: PHP + PHPMailer

**Why PHP?**
- Wide hosting compatibility
- Low barrier to deployment
- Mature email handling libraries
- Simple REST API implementation

**Why PHPMailer?**
- Robust SMTP support
- Easy HTML email composition
- SSL/TLS security
- Extensive documentation

### Styling: Tailwind CSS

**Why Tailwind?**
- Utility-first approach
- Rapid prototyping
- Consistent design system
- Small production bundle
- No CSS naming conflicts

## System Components

### 1. Presentation Layer
**Responsibility:** User interface and interaction

**Components:**
- React application (`src/`)
- Component library (`src/components/`)
- Page routing (`src/pages/`)
- Static assets (`public/`)

**Key Features:**
- Client-side routing
- Responsive design
- Interactive voting system
- Gallery with modal viewer

### 2. Application Layer
**Responsibility:** Business logic and external services

**Components:**
- REST API endpoints (`api/`)
- Email service (PHPMailer)
- Request validation
- CORS handling

**Key Features:**
- Nomination submission
- Email notifications
- Input sanitization
- Error handling

### 3. Data Layer
**Responsibility:** Data storage and management

**Components:**
- TypeScript data files (`src/data/`)
- Image storage (`public/images/`)
- Video storage (`public/videos/`)
- Configuration files

**Key Features:**
- Type-safe data models
- Hierarchical file organization
- Version-controlled content
- Fast read access

## Communication Flow

### Nomination Submission Flow

```
User fills form
      ↓
Frontend validation
      ↓
POST /api/nominations/create.php
      ↓
Backend validation
      ↓
Email composition (HTML)
      ↓
PHPMailer → SMTP Server
      ↓
Email sent to nominations@heosa.africa
      ↓
Success response to frontend
      ↓
User confirmation message
```

### Voting Flow

```
User clicks "Vote Now"
      ↓
Modal opens with vote code
      ↓
User selects method (SMS/WhatsApp/Email)
      ↓
Native app opens with pre-filled message
      ↓
User confirms send
      ↓
Vote recorded (external system)
```

## Security Architecture

### Frontend Security
- Input validation
- XSS prevention (React auto-escaping)
- HTTPS enforcement
- No sensitive data in code

### Backend Security
- CORS whitelist
- Input sanitization
- Email validation
- Environment variables for secrets
- SSL/TLS for SMTP

### Network Security
- HTTPS only in production
- CORS preflight handling
- Origin verification
- Secure headers

## Scalability Considerations

### Current Scale
- **Expected Traffic:** 10,000-50,000 users/month
- **Peak Load:** Awards ceremony voting (1,000 concurrent users)
- **Data Volume:** ~5GB static assets

### Scaling Strategy

**Phase 1 (Current):**
- Static hosting
- File-based data
- Simple caching

**Phase 2 (Future):**
- Add database layer
- Implement caching (Redis)
- CDN for static assets

**Phase 3 (Growth):**
- Load balancing
- Microservices architecture
- Real-time voting analytics

## Performance Architecture

### Frontend Optimization
- Code splitting (vendor chunks)
- Lazy loading routes
- Image optimization (planned)
- Minification and compression

### Backend Optimization
- Output buffering
- Efficient email queuing
- Error logging (not display)
- Connection pooling (planned)

### Asset Optimization
- Hashed filenames
- Browser caching
- Gzip compression
- CDN delivery (planned)

## Development Environment

### Local Development
```
Frontend: http://localhost:4173
Backend:  https://heosa.africa/api (via proxy)
Assets:   http://localhost:4173/images/*
```

### Production Environment
```
Frontend: https://heosa.africa
Backend:  https://heosa.africa/api
Assets:   https://heosa.africa/images/*
```

## Architecture Evolution

### Version 1.0 (Current)
- React SPA
- PHP REST API
- File-based storage
- Email notifications

### Version 2.0 (Planned)
- Database integration (PostgreSQL)
- Admin panel
- Real-time voting dashboard
- Payment integration

### Version 3.0 (Future)
- Mobile app (React Native)
- Advanced analytics
- AI-powered recommendations
- Multi-language support

## Related Documentation

- [System Architecture](./SYSTEM_ARCHITECTURE.md) - Detailed technical diagrams
- [Frontend Architecture](./FRONTEND_ARCHITECTURE.md) - React application structure
- [Backend Architecture](./BACKEND_ARCHITECTURE.md) - API design patterns
- [Data Architecture](./DATA_ARCHITECTURE.md) - Data models and storage

## References

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PHPMailer](https://github.com/PHPMailer/PHPMailer)

---

**Last Updated:** December 2025  
**Author:** HEOSA Development Team
