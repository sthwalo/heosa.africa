# HEOSA Copilot Instructions

## Architecture Overview

HEOSA is a three-tier healthcare awards platform:
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: PHP REST API with PHPMailer for email notifications
- **Data**: File-based TypeScript data files (planning PostgreSQL migration)

## Key Patterns & Conventions

### 1. Dynamic Date Formatting
Use computed getters in constants for auto-updating dates. Never hardcode date strings.

```typescript
// ✅ Correct: Dynamic formatting
export const EVENT_CONFIG = {
  get awardsCeremonyDate(): string {
    return formatDateLong(EVENT_DATES.awards2025);
  }
};

// ❌ Wrong: Hardcoded strings
awardsCeremonyDate: 'November 15, 2025'
```

Reference: `src/constants/app.constants.ts`, `src/utils/date.utils.ts`

### 2. Event Status Management
Use `useEventStatus` hook for real-time status detection. Updates automatically every minute.

```typescript
const status = useEventStatus({ 
  startDate: EVENT_DATES.votingOpen, 
  endDate: EVENT_DATES.votingClose 
});
```

Reference: `src/hooks/useEventStatus.ts`, `src/types/event.types.ts`

### 3. Centralized Constants
All configuration lives in `src/constants/`. Use computed getters for dynamic values.

- `app.constants.ts`: App config, brand colors
- `events.constants.ts`: Event dates and configurations  
- `voting.constants.ts`: Voting deadlines and methods
- `navigation.constants.ts`: Menu structure

### 4. Type Safety First
Strong TypeScript usage throughout. Define interfaces in `src/types/` and export via `index.ts`.

```typescript
// src/types/finalist.types.ts
export interface Finalist {
  id: string | number;
  name: string;
  category: string;
  image: string;
  // ...
}
```

### 5. Component Structure
- Pages in `src/pages/`: Route-level components
- Reusable components in `src/components/`
- UI components in `src/components/ui/` (future)
- Features in `src/components/features/` (future)

### 6. Data Management
Currently file-based in `src/data/`. Planning PostgreSQL migration.

- `finalists25.ts`: Current year finalists (53 entries)
- `finalistsData.ts`: Historical data + types
- `winnersData.ts`: Winners archive
- `galleryData.ts`: Photo/video metadata

### 7. API Integration
RESTful PHP API in `/api/`. CORS-enabled for frontend communication.

```php
// api/nominations/create.php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
```

Reference: `docs/development/API_DOCUMENTATION.md`

## Development Workflow

### Build & Run
```bash
npm run dev      # Start Vite dev server (port 4173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

### Backend Setup
```bash
composer install  # Install PHP dependencies
# Configure .env for SMTP settings
```

### Key Directories
- `src/constants/`: All app configuration
- `src/types/`: TypeScript interfaces
- `src/hooks/`: Custom React hooks
- `src/utils/`: Utility functions
- `api/`: PHP backend endpoints
- `docs/`: Comprehensive documentation

## Common Tasks

### Adding New Event Dates
1. Update `EVENT_DATES` in `src/constants/events.constants.ts`
2. Add computed getter in `EVENT_CONFIG` if needed
3. Dates auto-format throughout the app

### Adding New Components
1. Place in appropriate directory (`components/`, `pages/`)
2. Export from `index.ts` if reusable
3. Use TypeScript interfaces from `src/types/`

### Modifying Data
1. Update TypeScript files in `src/data/`
2. Ensure type safety with interfaces
3. Test with `npm run dev`

## Gotchas

- **No database yet**: All data is static TypeScript files
- **CORS required**: API calls need proper headers
- **Date comparisons**: Use `Date` objects, not strings
- **Email testing**: Use `api/test-email.php` for SMTP verification
- **File paths**: All assets in `public/` directory

## Reference Files
- [Architecture Overview](../docs/architecture/OVERVIEW.md)
- [Frontend Architecture](../docs/architecture/FRONTEND_ARCHITECTURE.md)  
- [API Documentation](../docs/development/API_DOCUMENTATION.md)
- [Setup Guide](../docs/development/SETUP.md)