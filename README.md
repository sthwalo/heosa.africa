# African Health Excellence Organisation (HEOSA) Website

<div align="center">

![HEOSA Logo](public/logo.png)

**Celebrating Healthcare Excellence Across Africa**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)

[Website](https://heosa.africa) • [Documentation](./docs/README.md) • [Report Issue](https://github.com/sthwalo/heosa.africa/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The African Health Excellence Organisation (HEOSA) platform is a comprehensive web application designed to celebrate and recognize outstanding healthcare professionals across Africa. The platform provides:

- **Awards Management** - Complete nomination, voting, and winner showcase system
- **Medical Events** - CPD-accredited event listings and registrations
- **Community Engagement** - Gallery, news, and partner showcases
- **Interactive Voting** - Multi-channel voting (SMS, WhatsApp, Email)

### Project Status

- **Version:** 0.0.0 (Pre-release)
- **Status:** Active Development
- **Current Branch:** feature/cors-and-email-updates
- **Last Updated:** December 2025

## ✨ Features

### 🏆 Awards System
- 14+ award categories
- Nomination submission portal
- Multi-channel voting system
- Finalist and winner showcases
- Historical award archives (2017-2025)

### 📅 Medical Events
- CPD-accredited event listings
- Event countdown timers
- Registration information
- Venue and accommodation details

### 🖼️ Gallery System
- Multi-year photo galleries (2017-2025)
- Video content library
- Category-based filtering
- Lightbox image viewer

### 🗳️ Voting Platform
- **SMS Voting** (SA & Africa)
- **WhatsApp Integration**
- **Email Voting**
- **Social Sharing**

### 📧 Email Notifications
- Automated nomination confirmations
- SMTP-based email delivery
- HTML email templates
- SSL/TLS encryption

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18.3.1
- **Language:** TypeScript 5.7.2
- **Styling:** Tailwind CSS 3.4.1
- **Routing:** React Router 6.22.3
- **Build Tool:** Vite 5.4.2
- **Animations:** Framer Motion 11.16.0
- **Icons:** Lucide React 0.344.0

### Backend
- **Language:** PHP 7.4+
- **Email:** PHPMailer 6.8
- **Package Manager:** Composer
- **API:** RESTful architecture

### Development Tools
- **Code Quality:** ESLint, TypeScript
- **Spell Check:** CSpell
- **Version Control:** Git

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- PHP 7.4+
- Composer
- Web server (Apache/Nginx)

### Installation

```bash
# Clone the repository
git clone https://github.com/sthwalo/heosa.africa.git
cd heosa.africa

# Install frontend dependencies
npm install

# Install backend dependencies
composer install

# Create environment file
cp .env.example .env
# Edit .env with your SMTP credentials

# Start development server
npm run dev
```

The application will be available at `http://localhost:4173`

### Build for Production

```bash
# Build frontend
npm run build

# Output will be in dist/ directory
npm run preview  # Preview production build locally
```

## 📁 Project Structure

```
heosa.africa/
├── src/                    # Frontend source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Route-level pages
│   ├── data/              # Static data & types
│   ├── App.tsx            # Root component
│   └── main.tsx           # Entry point
│
├── api/                   # Backend PHP API
│   ├── config/           # Configuration files
│   └── nominations/      # API endpoints
│
├── public/               # Static assets
│   ├── images/          # Image galleries
│   └── videos/          # Video content
│
├── docs/                 # Documentation
│   ├── architecture/    # System architecture
│   ├── design/         # Design system
│   ├── development/    # Dev guides
│   └── deployment/     # Deployment guides
│
└── dist/                # Production build (generated)
```

## 📚 Documentation

Comprehensive documentation is available in the [docs/](./docs/README.md) directory:

### Architecture & Design
- [Architecture Overview](./docs/architecture/OVERVIEW.md) - System design and patterns
- [System Architecture](./docs/architecture/SYSTEM_ARCHITECTURE.md) - Technical diagrams
- [Frontend Architecture](./docs/architecture/FRONTEND_ARCHITECTURE.md) - React structure
- [Backend Architecture](./docs/architecture/BACKEND_ARCHITECTURE.md) - PHP API design
- [Design System](./docs/design/DESIGN_SYSTEM.md) - UI patterns and guidelines

### Development Guides
- [Development Setup](./docs/development/SETUP.md) - Local environment setup
- [API Documentation](./docs/development/API_DOCUMENTATION.md) - REST API reference
- [Component Guide](./docs/design/COMPONENT_LIBRARY.md) - Component usage
- [Troubleshooting](./TROUBLESHOOT.md) - Common issues and solutions

### Deployment
- [Deployment Guide](./docs/deployment/DEPLOYMENT.md) - Production deployment
- [Configuration](./docs/deployment/CONFIGURATION.md) - Environment setup
- [Security Guide](./docs/security/SECURITY.md) - Security best practices

## 💻 Development

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the [Design System](./docs/design/DESIGN_SYSTEM.md)
   - Write clean, documented code
   - Test thoroughly

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

- **TypeScript:** Strict mode enabled
- **React:** Functional components with hooks
- **Styling:** Tailwind utility classes
- **Naming:** PascalCase for components, camelCase for functions

### Environment Variables

Create a `.env` file in the root directory:

```bash
# SMTP Configuration
SMTP_HOST=mail.yourserver.com
SMTP_USERNAME=noreply@heosa.africa
SMTP_PASSWORD=your_secure_password
SMTP_PORT=465
SMTP_SECURE=ssl
SMTP_FROM_EMAIL=noreply@heosa.africa
SMTP_FROM_NAME=HEOSA Awards

# Environment
ENVIRONMENT=production
```

## 🌐 Deployment

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Upload to server**
   - Copy `dist/` contents to web root
   - Copy `api/` directory
   - Copy `public/` assets
   - Upload `.env` file (secure location)

3. **Configure web server**
   - Point document root to `dist/`
   - Enable PHP for `/api` routes
   - Configure HTTPS

4. **Verify deployment**
   - Test frontend loading
   - Test API endpoints
   - Verify email functionality

See [Deployment Guide](./docs/deployment/DEPLOYMENT.md) for details.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Read the [Contributing Guide](./docs/project/CONTRIBUTING.md)
2. Fork the repository
3. Create your feature branch
4. Commit your changes
5. Push to the branch
6. Open a Pull Request

### Development Phases

See our [Roadmap](./docs/project/ROADMAP.md) for planned features.

## Story Points & Development Phases

### Phase 1: Project Setup and Core Infrastructure (8 points)
- [x] Initialize React + TypeScript project with Vite
- [x] Configure Tailwind CSS and theme colors
- [x] Set up ESLint and TypeScript configurations
- [x] Implement basic routing structure
- [x] Create reusable component architecture

### Phase 2: Navigation and Layout (13 points)
- [x] Design and implement responsive navbar
- [x] Create dropdown menu system
- [x] Build footer component with social links
- [x] Implement mobile menu functionality
- [x] Add smooth scrolling to sections

### Phase 3: Home Page and Hero (8 points)
- [x] Design hero section with dynamic background
- [x] Create events slider component
- [x] Implement features section
- [x] Add partners showcase
- [x] Optimize responsive layouts

### Phase 4: Awards System (21 points)
- [x] Build awards categories page
- [x] Create nomination form system
- [x] Implement voting interface
- [x] Design winners showcase
- [x] Add SMS and email voting integration
- [x] Create category descriptions
- [x] Implement voting modal

### Phase 5: Medical Events (13 points)
- [x] Design events listing page
- [x] Create event registration system
- [x] Implement countdown timer
- [x] Add CPD information section
- [x] Build event details components

### Phase 6: About and Contact (8 points)
- [x] Design about page with organization info
- [x] Create board members showcase
- [x] Implement contact form
- [x] Add location and contact details
- [x] Create WhatsApp integration

### Phase 7: Gallery and Media (8 points)
- [x] Build responsive gallery grid
- [x] Implement image modal viewer
- [x] Add category filtering
- [x] Create image lazy loading
- [x] Optimize image delivery

### Phase 8: Testing and Optimization (13 points)
- [ ] Implement unit tests
- [ ] Add integration tests
- [ ] Perform accessibility audit
- [ ] Optimize performance
- [ ] Add error boundaries
- [ ] Implement loading states
- [ ] Add form validation

## Features

### 1. Awards System
- Complete awards categories showcase
- Nomination system
- Voting platform for finalists
- Past winners gallery
- Honorary and voted categories

### 2. Medical Events
- Event registration system
- CPD-accredited events listing
- Upcoming events showcase
- Event countdown timer

### 3. Interactive Components
- Dynamic navigation with dropdown menus
- Responsive image galleries
- Modal dialogs for voting
- Contact forms with validation

### 4. Key Pages
- Home
- Awards/Summit
- Our Partners
- Medical Events
- About
- Finalists
- Gallery
- Contact

## Technology Stack

- **Frontend Framework:** React 18.3
- **Type System:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Linting:** ESLint

## Project Structure

```
/heosa.africa-main
│
├── .gitignore                  # Specifies files and directories that should be ignored by Git
├── README.md                   # Documentation file for the project
├── cspell.json                 # Configuration for spell checking in code
├── eslint.config.js            # Configuration for ESLint, a tool for identifying and fixing problems in JavaScript code
├── index.html                  # Main HTML file for the project
├── package-lock.json           # Automatically generated file that locks the versions of dependencies
├── package.json                # Contains metadata about the project and lists dependencies
├── postcss.config.js           # Configuration for PostCSS, a tool for transforming CSS with JavaScript
├── public                      # Directory for public assets (usually static files)
│   └── logo.png                # Logo image for the project
│
├── src                         # Source code directory
│   ├── App.tsx                 # Main application component
│   ├── components              # Reusable UI components
│   │   ├── Contact.tsx
│   │   ├── EventCountdown.tsx
│   │   ├── EventsSlider.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Navbar.tsx
│   ├── index.css               # Main CSS file for styling
│   ├── main.tsx                # Entry point for the application
│   ├── pages                   # Page components
│   │   ├── About.tsx
│   │   ├── Awards.tsx
│   │   ├── AwardsCategories.tsx
│   │   ├── AwardsNominate.tsx
│   │   ├── AwardsWinners.tsx
│   │   ├── Contact.tsx
│   │   ├── Finalists.tsx
│   │   ├── Gallery.tsx
│   │   ├── Home.tsx
│   │   ├── MedicalEvents.tsx
│   │   ├── MedicalEventsRegister.tsx
│   │   ├── Overview.tsx
│   │   ├── Partners.tsx
│   │   ├── PastWinners.tsx
│   │   ├── T&Cs.tsx
│   │   └── Winners.tsx
│   └── vite-env.d.ts           # Type definitions for Vite
│
├── tailwind.config.js          # Configuration for Tailwind CSS, a utility-first CSS framework
├── tsconfig.app.json           # TypeScript configuration specific to the application
├── tsconfig.json               # General TypeScript configuration
├── tsconfig.node.json          # TypeScript configuration for Node.js
├── vite.config.ts              # Configuration for Vite, a build tool that serves and bundles your application
└── webpack.config.js           # Configuration for Webpack, a module bundler
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/aheo-website.git
```

2. Install dependencies:
```bash
cd aheo-website
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Color Scheme

- Primary: #962326 (Burgundy)
- Secondary: #F2C849 (Gold)
- Accent: #A7864B (Bronze)
- Dark: #2B2A29 (Charcoal)

## Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow React best practices and hooks
- Implement proper error handling
- Write meaningful component documentation
- Use proper TypeScript types and interfaces

### Component Structure
- Create reusable components
- Implement proper prop typing
- Use proper file and folder organization
- Follow single responsibility principle

### Performance
- Implement code splitting
- Use proper image optimization
- Implement lazy loading
- Minimize bundle size
- Use proper caching strategies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Considerations

- Form validation
- Protected routes
- Secure contact forms
- Data encryption
- Input sanitization

## 📊 Project Metrics

- **Lines of Code:** ~15,000
- **Components:** 26 (10 reusable + 16 pages)
- **Data Files:** 5 TypeScript files
- **API Endpoints:** 5 PHP endpoints
- **Static Assets:** ~5GB (images + videos)
- **Supported Years:** 2017-2025

## 🔒 Security

Security is a top priority. We implement:

- HTTPS enforcement
- CORS protection
- Input validation and sanitization
- XSS prevention
- SSL/TLS email encryption
- Environment variable protection

Report security issues to: security@heosa.africa

See [Security Guide](./docs/security/SECURITY.md) for details.

## 🐛 Known Issues & Roadmap

See [Technical Debt](./docs/project/TECHNICAL_DEBT.md) for known issues and [Roadmap](./docs/project/ROADMAP.md) for planned features.

### High Priority
- Database integration for nominations
- Admin authentication system
- Image optimization (WebP conversion)
- CDN implementation

## 📞 Contact & Support

- **Email:** info@heosa.africa
- **Phone:** +27 82 435 5370
- **Website:** [https://heosa.africa](https://heosa.africa)
- **Address:** Suite 1018, 6 Waxbill Street, Mbombela, 1200, South Africa

### Social Media
- Facebook: [@AHEO](https://facebook.com/AHEO)
- Twitter: [@AHEO](https://twitter.com/AHEO)
- LinkedIn: [African Health Excellence Organisation](https://linkedin.com/company/AHEO)
- Instagram: [@AHEO](https://instagram.com/AHEO)

## 🙏 Acknowledgments

- Healthcare professionals across Africa
- Partners and sponsors
- Open-source community
- Contributors and maintainers

## 📄 License

Copyright © 2025 Global Hope Consortium. All rights reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

<div align="center">

**Built with ❤️ for Healthcare Excellence in Africa**

[Documentation](./docs/README.md) • [Architecture](./docs/architecture/OVERVIEW.md) • [Contributing](./docs/project/CONTRIBUTING.md)

</div>
