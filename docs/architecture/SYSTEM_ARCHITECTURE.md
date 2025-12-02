# System Architecture

## System Overview

The HEOSA platform follows a **client-server architecture** with clear separation between the frontend Single Page Application (SPA) and backend REST API services.

## High-Level System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         End Users                                │
│              (Web Browsers - Desktop & Mobile)                   │
└────────────────────────┬────────────────────────────────────────┘
                         │ HTTPS
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│                      CDN / Static Hosting                        │
│                  (heosa.africa - Frontend)                       │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  React SPA (index.html + bundled JS/CSS)                 │  │
│  │  - Client-side routing                                    │  │
│  │  - Component rendering                                    │  │
│  │  - State management                                       │  │
│  └──────────────────────┬───────────────────────────────────┘  │
└─────────────────────────┼───────────────────────────────────────┘
                          │
                          │ REST API Calls (JSON)
                          │ HTTPS + CORS
                          ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Application Server                            │
│                (heosa.africa/api - Backend)                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  PHP REST API                                             │  │
│  │  ├─ /api/nominations/create.php                          │  │
│  │  ├─ /api/nominations/read.php                            │  │
│  │  ├─ /api/nominations/update.php                          │  │
│  │  └─ /api/test-email.php                                  │  │
│  └──────────────────────┬───────────────────────────────────┘  │
└─────────────────────────┼───────────────────────────────────────┘
                          │
            ┌─────────────┴─────────────┐
            │                           │
            ↓                           ↓
┌─────────────────────┐    ┌─────────────────────┐
│   File System       │    │   SMTP Server       │
│   (Static Assets)   │    │   (Email Service)   │
│  ┌───────────────┐  │    │  ┌───────────────┐  │
│  │ Images        │  │    │  │ PHPMailer     │  │
│  │ Videos        │  │    │  │ SSL/TLS       │  │
│  │ Data Files    │  │    │  │ Port 465      │  │
│  └───────────────┘  │    │  └───────────────┘  │
└─────────────────────┘    └─────────────────────┘
```

## Component Architecture

### Frontend Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser Runtime                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │              React Application                     │  │
│  │                                                    │  │
│  │  ┌──────────────┐  ┌──────────────┐             │  │
│  │  │   Router     │  │  State Mgmt  │             │  │
│  │  │ (React Router)  │  (useState)   │             │  │
│  │  └──────┬───────┘  └──────┬───────┘             │  │
│  │         │                  │                     │  │
│  │         ↓                  ↓                     │  │
│  │  ┌────────────────────────────────────────┐     │  │
│  │  │         Page Components                 │     │  │
│  │  │  Home, Awards, Finalists, Gallery...   │     │  │
│  │  └────────────────┬───────────────────────┘     │  │
│  │                   │                             │  │
│  │                   ↓                             │  │
│  │  ┌────────────────────────────────────────┐     │  │
│  │  │      Reusable Components               │     │  │
│  │  │  Navbar, Footer, Timeline, Modal...    │     │  │
│  │  └────────────────┬───────────────────────┘     │  │
│  │                   │                             │  │
│  │                   ↓                             │  │
│  │  ┌────────────────────────────────────────┐     │  │
│  │  │         Data Layer                      │     │  │
│  │  │  finalists25, galleryData, winners...  │     │  │
│  │  └─────────────────────────────────────────┘     │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Backend API Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   PHP Application                        │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Request Handler                       │  │
│  │  ┌──────────────────────────────────────────┐     │  │
│  │  │  1. CORS Validation                       │     │  │
│  │  │     - Check origin                        │     │  │
│  │  │     - Set headers                         │     │  │
│  │  │     - Handle OPTIONS                      │     │  │
│  │  └────────────────┬─────────────────────────┘     │  │
│  │                   ↓                               │  │
│  │  ┌──────────────────────────────────────────┐     │  │
│  │  │  2. Input Validation                      │     │  │
│  │  │     - Parse JSON                          │     │  │
│  │  │     - Validate required fields            │     │  │
│  │  │     - Sanitize input                      │     │  │
│  │  └────────────────┬─────────────────────────┘     │  │
│  │                   ↓                               │  │
│  │  ┌──────────────────────────────────────────┐     │  │
│  │  │  3. Business Logic                        │     │  │
│  │  │     - Process nomination                  │     │  │
│  │  │     - Format email                        │     │  │
│  │  │     - Prepare data                        │     │  │
│  │  └────────────────┬─────────────────────────┘     │  │
│  │                   ↓                               │  │
│  │  ┌──────────────────────────────────────────┐     │  │
│  │  │  4. External Services                     │     │  │
│  │  │     ├─ PHPMailer (SMTP)                  │     │  │
│  │  │     ├─ File System                       │     │  │
│  │  │     └─ Logging                           │     │  │
│  │  └────────────────┬─────────────────────────┘     │  │
│  │                   ↓                               │  │
│  │  ┌──────────────────────────────────────────┐     │  │
│  │  │  5. Response Handler                      │     │  │
│  │  │     - Format JSON response                │     │  │
│  │  │     - Set HTTP status                     │     │  │
│  │  │     - Send to client                      │     │  │
│  │  └──────────────────────────────────────────┘     │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Data Flow Diagrams

### Nomination Submission Flow

```
┌──────────┐
│  User    │
└────┬─────┘
     │ 1. Fill form
     ↓
┌─────────────────┐
│  Finalists Page │
│  Component      │
└────┬────────────┘
     │ 2. Submit form data
     ↓
┌─────────────────┐
│  Frontend       │
│  Validation     │
└────┬────────────┘
     │ 3. POST /api/nominations/create.php
     ↓
┌─────────────────┐
│  PHP API        │
│  Endpoint       │
└────┬────────────┘
     │ 4. Validate & sanitize
     ↓
┌─────────────────┐
│  PHPMailer      │
│  Service        │
└────┬────────────┘
     │ 5. Send email via SMTP
     ↓
┌─────────────────┐
│  SMTP Server    │
└────┬────────────┘
     │ 6. Deliver email
     ↓
┌─────────────────┐
│  nominations@   │
│  heosa.africa   │
└────┬────────────┘
     │ 7. Success response
     ↓
┌─────────────────┐
│  User sees      │
│  confirmation   │
└─────────────────┘
```

### Voting Flow

```
┌──────────┐
│  User    │
└────┬─────┘
     │ 1. Click "Vote Now"
     ↓
┌─────────────────┐
│  Finalists Page │
│  + Modal        │
└────┬────────────┘
     │ 2. Display voting options
     │    - SMS (SA): 33351
     │    - SMS (Africa): 34433
     │    - WhatsApp: +27 79 950 1565
     │    - Email: vote@heosa.africa
     ↓
┌─────────────────┐
│  User selects   │
│  method         │
└────┬────────────┘
     │ 3. Open native app
     │    with vote code (e.g., AHEA 025)
     ↓
┌─────────────────┐
│  Native App     │
│  (SMS/WhatsApp) │
└────┬────────────┘
     │ 4. User confirms send
     ↓
┌─────────────────┐
│  External       │
│  Voting System  │
│  (SMS Gateway)  │
└─────────────────┘
```

### Gallery Loading Flow

```
┌──────────┐
│  User    │
└────┬─────┘
     │ 1. Navigate to /gallery
     ↓
┌─────────────────┐
│  Gallery Page   │
└────┬────────────┘
     │ 2. Import galleryData.ts
     ↓
┌─────────────────┐
│  Data Layer     │
│  (Static)       │
└────┬────────────┘
     │ 3. Return image metadata
     ↓
┌─────────────────┐
│  Filter by      │
│  Year/Category  │
└────┬────────────┘
     │ 4. Render grid
     ↓
┌─────────────────┐
│  User clicks    │
│  image          │
└────┬────────────┘
     │ 5. Open modal
     ↓
┌─────────────────┐
│  Lightbox View  │
│  Load full image│
└─────────────────┘
```

## Network Architecture

### Development Environment

```
┌────────────────────────────────────────┐
│       Developer Machine                 │
│  ┌──────────────────────────────────┐  │
│  │  Vite Dev Server                 │  │
│  │  localhost:4173                  │  │
│  │  ┌────────────────────────────┐  │  │
│  │  │  React App with HMR        │  │  │
│  │  │  Fast Refresh              │  │  │
│  │  └────────────┬───────────────┘  │  │
│  └───────────────┼──────────────────┘  │
└──────────────────┼─────────────────────┘
                   │
                   │ Proxy /api requests
                   ↓
┌────────────────────────────────────────┐
│  Production API Server                 │
│  https://heosa.africa/api              │
│  ┌──────────────────────────────────┐  │
│  │  PHP Backend                     │  │
│  │  - CORS enabled                  │  │
│  │  - Accepts localhost origins     │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

### Production Environment

```
┌────────────────────────────────────────┐
│         Internet Users                  │
└───────────────┬────────────────────────┘
                │ HTTPS (443)
                ↓
┌────────────────────────────────────────┐
│      heosa.africa                      │
│  ┌──────────────────────────────────┐  │
│  │  Web Server (Apache/Nginx)       │  │
│  │  ┌─────────────┐  ┌────────────┐ │  │
│  │  │  Static     │  │  PHP API   │ │  │
│  │  │  Files      │  │  /api/*    │ │  │
│  │  │  (React)    │  │            │ │  │
│  │  └─────────────┘  └────────────┘ │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
                │
                ├─ File System (/public_html)
                └─ SMTP Server (Port 465)
```

## Security Architecture

### Authentication & Authorization

**Current State:** No authentication system

**Planned:** 
```
┌─────────────────────────────────────────┐
│  User Roles                             │
├─────────────────────────────────────────┤
│  Public (Default)                       │
│  - View content                         │
│  - Submit nominations                   │
│  - Vote for finalists                   │
├─────────────────────────────────────────┤
│  Admin (Future)                         │
│  - Manage nominations                   │
│  - View analytics                       │
│  - Moderate content                     │
├─────────────────────────────────────────┤
│  Super Admin (Future)                   │
│  - User management                      │
│  - System configuration                 │
│  - Full access                          │
└─────────────────────────────────────────┘
```

### Data Protection Layers

```
┌─────────────────────────────────────────┐
│  Layer 1: Transport Security            │
│  - HTTPS/TLS 1.3                        │
│  - Certificate validation               │
└───────────────┬─────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│  Layer 2: Application Security          │
│  - CORS validation                      │
│  - Input sanitization                   │
│  - XSS prevention                       │
└───────────────┬─────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│  Layer 3: Data Security                 │
│  - Environment variables                │
│  - No sensitive data in code            │
│  - Secure email transmission            │
└─────────────────────────────────────────┘
```

## Deployment Architecture

### Build Pipeline

```
┌──────────────┐
│  Developer   │
│  Commits     │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│  Git Push    │
│  to Branch   │
└──────┬───────┘
       │
       ↓
┌──────────────┐    ┌──────────────┐
│  Run Tests   │ →  │  Build Vite  │
│  (Planned)   │    │  Bundle      │
└──────────────┘    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │  Deploy to   │
                    │  Production  │
                    └──────────────┘
```

## Performance Architecture

### Caching Strategy

```
┌─────────────────────────────────────────┐
│  Browser Cache                          │
│  - Static assets (1 year)               │
│  - Hashed filenames                     │
└───────────────┬─────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│  CDN Cache (Planned)                    │
│  - Images, videos                       │
│  - Geographic distribution              │
└───────────────┬─────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│  Server Cache (Future)                  │
│  - API responses (Redis)                │
│  - Database queries                     │
└─────────────────────────────────────────┘
```

## Monitoring & Observability

### Logging Architecture (Planned)

```
┌─────────────────────────────────────────┐
│  Application Logs                       │
│  - Frontend errors (Console)            │
│  - API errors (PHP error_log)           │
│  - SMTP logs                            │
└───────────────┬─────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│  Aggregation (Future)                   │
│  - Centralized logging                  │
│  - Error tracking (Sentry)              │
│  - Performance monitoring               │
└─────────────────────────────────────────┘
```

## Related Documentation

- [Architecture Overview](./OVERVIEW.md)
- [Frontend Architecture](./FRONTEND_ARCHITECTURE.md)
- [Backend Architecture](./BACKEND_ARCHITECTURE.md)
- [Security Guide](../security/SECURITY.md)
- [Deployment Guide](../deployment/DEPLOYMENT.md)

---

**Last Updated:** December 2025  
**Maintained By:** HEOSA Development Team
