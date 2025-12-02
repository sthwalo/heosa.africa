# Development Setup

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

| Software | Version | Download |
|----------|---------|----------|
| Node.js | 16.x or higher | [nodejs.org](https://nodejs.org/) |
| npm | 8.x or higher | Included with Node.js |
| PHP | 7.4 or higher | [php.net](https://www.php.net/) |
| Composer | 2.x | [getcomposer.org](https://getcomposer.org/) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

### Optional Tools

- **VS Code** - Recommended IDE
- **Postman** - API testing
- **Docker** - Containerized development (future)

## Initial Setup

### 1. Clone the Repository

```bash
# Clone via HTTPS
git clone https://github.com/sthwalo/heosa.africa.git

# Or via SSH
git clone git@github.com:sthwalo/heosa.africa.git

# Navigate to project directory
cd heosa.africa
```

### 2. Install Dependencies

#### Frontend Dependencies

```bash
# Install npm packages
npm install

# This installs:
# - React, React-DOM, React Router
# - TypeScript
# - Tailwind CSS
# - Vite
# - And all other dependencies
```

#### Backend Dependencies

```bash
# Install PHP dependencies
composer install

# This installs:
# - PHPMailer
# - And other PHP packages
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Copy example file
cp .env.example .env

# Edit with your editor
nano .env
# or
code .env
```

Add the following configuration:

```bash
# SMTP Configuration
SMTP_HOST=mail.yourserver.com
SMTP_USERNAME=noreply@heosa.africa
SMTP_PASSWORD=your_secure_password_here
SMTP_PORT=465
SMTP_SECURE=ssl
SMTP_FROM_EMAIL=noreply@heosa.africa
SMTP_FROM_NAME=HEOSA Awards
SMTP_DEBUG=2

# Environment
ENVIRONMENT=development
```

⚠️ **Important:** Never commit `.env` file to version control

### 4. Verify Installation

```bash
# Check Node version
node --version
# Should output: v16.x.x or higher

# Check npm version
npm --version
# Should output: 8.x.x or higher

# Check PHP version
php --version
# Should output: PHP 7.4.x or higher

# Check Composer
composer --version
# Should output: Composer version 2.x
```

## Development Server

### Start Frontend Development Server

```bash
npm run dev
```

This will:
- Start Vite development server on `http://localhost:4173`
- Enable Hot Module Replacement (HMR)
- Proxy API requests to production API
- Open browser automatically

Output:
```
  VITE v5.4.2  ready in 523 ms

  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Access the Application

Open your browser and navigate to:
```
http://localhost:4173
```

### API Development

The development server proxies API requests to the production server. To test API endpoints:

```bash
# Test email endpoint
curl -X POST http://localhost:4173/api/test-email.php \
  -H "Content-Type: application/json" \
  -d '{"to":"test@example.com","subject":"Test","message":"Hello"}'
```

## IDE Setup

### Visual Studio Code

Recommended extensions:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "streetsidesoftware.code-spell-checker",
    "bmewburn.vscode-intelephense-client"
  ]
}
```

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Development Workflow

### 1. Create Feature Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Development Cycle

```bash
# Make changes to files

# Check for errors
npm run lint

# Test in browser
# Navigate to http://localhost:4173

# Check for TypeScript errors
npx tsc --noEmit
```

### 3. Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/your-feature-name
```

### Commit Message Convention

Follow conventional commits:

```
feat: Add new feature
fix: Fix bug in component
docs: Update documentation
style: Format code
refactor: Refactor component
test: Add tests
chore: Update dependencies
```

## Testing

### Manual Testing

1. **Frontend**
   - Navigate through all pages
   - Test responsive design (mobile, tablet, desktop)
   - Check form submissions
   - Test voting modal

2. **Backend**
   - Test nomination submission
   - Verify email delivery
   - Check CORS headers
   - Test error handling

### Browser Testing

Test in multiple browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

Test at different viewport sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## Debugging

### Frontend Debugging

#### React DevTools

Install React DevTools browser extension:
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

#### Console Debugging

```typescript
// Add console logs
console.log('Component rendered', data);

// Use debugger statement
debugger;

// Check state
console.log('State:', state);
```

#### Vite Debug Mode

```bash
# Start with debug output
DEBUG=vite:* npm run dev
```

### Backend Debugging

#### PHP Error Logging

```php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log to file
error_log("Debug message: " . print_r($data, true));
```

#### Check PHP Logs

```bash
# View PHP error log
tail -f /var/log/php/error.log

# Or system log
tail -f /var/log/syslog | grep php
```

#### SMTP Debugging

Enable SMTP debug in `.env`:

```bash
SMTP_DEBUG=2  # Full debug output
```

## Common Issues

### Port Already in Use

```bash
# Kill process using port 4173
lsof -ti:4173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Issues

Ensure your `.env` has correct origins:

```php
$allowedOrigins = [
    'http://localhost:4173',
    'http://localhost:5173',
];
```

### Email Not Sending

1. Check SMTP credentials in `.env`
2. Verify SMTP_DEBUG is enabled
3. Check firewall allows port 465
4. Verify email server is accessible

```bash
# Test SMTP connection
telnet mail.yourserver.com 465
```

## Build for Production

### Create Production Build

```bash
# Build frontend
npm run build

# Output will be in dist/ directory
ls -la dist/
```

### Preview Production Build

```bash
# Preview built files
npm run preview

# Access at http://localhost:4173
```

### Verify Build

Check:
- [ ] All assets loaded correctly
- [ ] No console errors
- [ ] Images display properly
- [ ] API calls work
- [ ] Responsive design intact

## Environment Differences

### Development vs Production

| Feature | Development | Production |
|---------|-------------|------------|
| API URL | Proxied to prod | Direct to prod |
| Source Maps | Enabled | Disabled |
| Hot Reload | Enabled | N/A |
| Minification | Disabled | Enabled |
| Debug Output | Verbose | Minimal |

## Next Steps

After setup is complete:

1. Review [Architecture Overview](../architecture/OVERVIEW.md)
2. Explore [Component Library](../design/COMPONENT_LIBRARY.md)
3. Read [API Documentation](./API_DOCUMENTATION.md)
4. Check [Routing Guide](./ROUTING.md)

## Getting Help

If you encounter issues:

1. Check [Troubleshooting Guide](../../TROUBLESHOOT.md)
2. Search [existing issues](https://github.com/sthwalo/heosa.africa/issues)
3. Ask in team chat
4. Create new issue with details

---

**Last Updated:** December 2025  
**Maintained By:** HEOSA Development Team
