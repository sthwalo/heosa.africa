# HEOSA Frontend Architecture

## 📁 Modular Architecture Overview

This document explains the new modular architecture implemented in the HEOSA frontend application, following **Single Responsibility Principle (SRP)**, **Separation of Concerns (SOC)**, and **modular design patterns**.

## 🏗️ Directory Structure

```
src/
├── types/                    # TypeScript type definitions
│   ├── finalist.types.ts    # Finalist and Winner types
│   ├── gallery.types.ts     # Gallery image types
│   ├── navigation.types.ts  # Navigation menu types
│   ├── contact.types.ts     # Contact information types
│   ├── voting.types.ts      # Voting-related types
│   └── index.ts             # Central export
│
├── constants/               # Application constants (⚠️ FALLBACK DATA)
│   ├── voting.constants.ts  # Voting configuration
│   ├── contact.constants.ts # Contact information
│   ├── navigation.constants.ts # Menu navigation
│   ├── app.constants.ts     # App-wide constants
│   └── index.ts             # Central export
│
├── hooks/                   # Custom React hooks
│   ├── useModal.ts          # Modal state management
│   ├── useClickOutside.ts   # Click outside detection
│   ├── useMediaQuery.ts     # Responsive breakpoints
│   ├── useVoting.ts         # Voting logic
│   └── index.ts             # Central export
│
├── utils/                   # Utility functions
│   ├── url.utils.ts         # URL building (SMS, WhatsApp, email, maps)
│   ├── share.utils.ts       # Web Share API helpers
│   ├── date.utils.ts        # Date formatting and calculations
│   ├── validation.utils.ts  # Form validation
│   ├── string.utils.ts      # String manipulation
│   └── index.ts             # Central export
│
├── services/                # Service layer (⚠️ FALLBACK IMPLEMENTATION)
│   └── api/
│       ├── config.ts        # API configuration
│       ├── finalists.service.ts  # Finalists data service
│       ├── gallery.service.ts    # Gallery data service
│       ├── voting.service.ts     # Voting service
│       └── index.ts         # Central export
│
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Modal.tsx        # Generic modal component
│   │   ├── Button.tsx       # Button with variants
│   │   ├── Card.tsx         # Card components
│   │   ├── ImageCarousel.tsx # Image carousel
│   │   └── index.ts
│   │
│   ├── features/            # Feature-specific components
│   │   ├── voting/
│   │   │   ├── VoteModal.tsx      # Voting modal
│   │   │   ├── VotingMethods.tsx  # Voting methods list
│   │   │   ├── FinalistCard.tsx   # Finalist card
│   │   │   └── index.ts
│   │   └── gallery/
│   │       ├── GalleryFilters.tsx # Year/category filters
│   │       ├── GalleryGrid.tsx    # Image grid
│   │       ├── ImageModal.tsx     # Image viewer modal
│   │       └── index.ts
│   │
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   └── index.ts
│   │
│   └── [existing components] # Timeline, EventsSlider, etc.
│
├── pages/                   # Page components (simplified)
├── data/                    # Static fallback data files
└── config.ts                # Environment configuration

```

## 🎯 Architecture Principles

### 1. Single Responsibility Principle (SRP)
Each component, hook, and utility has one clear responsibility:

- **`VoteModal.tsx`**: Only handles displaying the vote modal
- **`VotingMethods.tsx`**: Only renders voting method buttons
- **`useModal.ts`**: Only manages modal open/close state
- **`url.utils.ts`**: Only builds URLs

### 2. Separation of Concerns (SOC)

#### **Business Logic** (Services & Hooks)
```typescript
// services/api/voting.service.ts
export async function submitVote(payload: VotePayload): Promise<VoteResponse> {
  // Business logic for voting
}

// hooks/useVoting.ts
export function useVoting() {
  // State management for voting
}
```

#### **Presentation Logic** (Components)
```typescript
// components/features/voting/VoteModal.tsx
export function VoteModal({ isOpen, onClose, finalist }) {
  // Only renders UI
}
```

#### **Configuration** (Constants)
```typescript
// constants/voting.constants.ts
export const VOTING_CONFIG = {
  deadline: new Date('2025-10-31'),
  // ...
};
```

### 3. Modular Architecture

Components can be easily:
- **Imported** from centralized exports
- **Tested** independently
- **Reused** across the application
- **Replaced** without affecting other code

```typescript
// Import from centralized locations
import { Modal, Button } from '@/components/ui';
import { useModal, useClickOutside } from '@/hooks';
import { VOTING_CONFIG, CONTACT_INFO } from '@/constants';
import { finalistsService } from '@/services';
```

## ⚠️ Fallback Data Strategy

Since the backend is not yet implemented, all data uses **hardcoded fallback values** clearly marked with comments:

```typescript
/**
 * ⚠️ FALLBACK DATA - Currently using hardcoded values
 * TODO: Replace with API configuration when backend is implemented
 */
export const VOTING_CONFIG = {
  deadline: new Date('2025-10-31T23:59:59'),
  // ...
};
```

### Fallback Locations:
- **`constants/`**: All configuration constants
- **`services/api/`**: Service methods use hardcoded data from `/data` files
- **`data/`**: Original static data files (preserved as fallback)

## 🔄 Migration Path to Backend

When backend is ready, update only service files:

```typescript
// Before (Fallback)
export async function getFinalistsByYear(year: string): Promise<Finalist[]> {
  // FALLBACK: Use hardcoded data
  return finalists25Data.filter(f => f.year === year);
}

// After (With API)
export async function getFinalistsByYear(year: string): Promise<Finalist[]> {
  const response = await fetch(API_ENDPOINTS.finalists.getAll());
  const data = await response.json();
  return data.filter(f => f.year === year);
}
```

**No changes needed in**:
- Components
- Pages
- Hooks
- Utils

## 📦 Key Features

### Custom Hooks

#### `useModal<T>()`
```typescript
const modal = useModal<Finalist>();
modal.open(finalistData);  // Open with data
modal.close();             // Close modal
modal.isOpen;              // Boolean state
modal.data;                // Current data
```

#### `useClickOutside(ref, handler)`
```typescript
const ref = useRef<HTMLDivElement>(null);
useClickOutside(ref, () => setIsOpen(false));
```

#### `useMediaQuery(query)`
```typescript
const isMobile = useMediaQuery('(max-width: 767px)');
const isDesktop = useIsDesktop(); // Predefined hook
```

### Reusable UI Components

#### `<Modal>`
```typescript
<Modal isOpen={isOpen} onClose={onClose} title="Vote Now">
  {children}
</Modal>
```

#### `<Button>`
```typescript
<Button variant="primary" size="lg" fullWidth onClick={handleClick}>
  Vote Now
</Button>
```

#### `<Card>`
```typescript
<Card padding="lg" hover>
  <CardTitle>Title</CardTitle>
  <CardContent>Content</CardContent>
</Card>
```

### Utility Functions

```typescript
// URL building
buildSmsUrl('33351', 'VOTE01');
buildWhatsAppUrl('+27799501565', 'Hello');
buildEmailUrl('vote@heosa.africa', 'Subject', 'Body');

// Sharing
share({ title: 'Title', text: 'Text', url: 'URL' });
shareFinalist('Dr. Name', 'VOTE01');

// Date formatting
formatDate(new Date(), { month: 'short', day: 'numeric' });
daysUntil(new Date('2025-10-31'));
formatCountdown(votingDeadline);

// Validation
isValidEmail('test@example.com');
isValidPhone('+27799501565');
validateForm(data, rules);
```

## 🚀 Benefits

### Before Refactoring
- ❌ 200+ line page components with mixed concerns
- ❌ Hardcoded configuration scattered everywhere
- ❌ Duplicate logic across components
- ❌ Difficult to test and maintain
- ❌ No type safety for shared data structures

### After Refactoring
- ✅ Small, focused components (20-50 lines)
- ✅ Centralized configuration in `/constants`
- ✅ Reusable hooks and utilities
- ✅ Easy to test each module independently
- ✅ Strong type safety with `/types`
- ✅ Clear separation of concerns
- ✅ Prepared for backend integration

## 📝 Development Guidelines

### When Adding New Features

1. **Define types** in `/types`
2. **Add constants** in `/constants` (with fallback data markers)
3. **Create service** in `/services/api` (with fallback implementation)
4. **Build UI components** in `/components/ui` or `/components/features`
5. **Create custom hooks** if needed in `/hooks`
6. **Add utilities** in `/utils`
7. **Use in pages** - pages should be thin wrappers

### Import Conventions

```typescript
// Types
import { Finalist, GalleryImage } from '../types';

// Constants
import { VOTING_CONFIG, CONTACT_INFO } from '../constants';

// Hooks
import { useModal, useClickOutside } from '../hooks';

// Services
import { finalistsService, votingService } from '../services';

// Utils
import { formatDate, buildSmsUrl } from '../utils';

// UI Components
import { Modal, Button, Card } from '../components/ui';

// Feature Components
import { VoteModal, FinalistCard } from '../components/features/voting';
```

## 🔧 Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=HEOSA
VITE_ENV=development
VITE_ENABLE_VOTING=true
```

Access in code:
```typescript
import.meta.env.VITE_API_BASE_URL
```

## 📚 Next Steps

1. **Backend Integration**: Replace fallback implementations in `/services/api`
2. **Testing**: Add unit tests for hooks, utils, and services
3. **Documentation**: Add JSDoc comments to all public functions
4. **Performance**: Implement code splitting and lazy loading
5. **Accessibility**: Add ARIA labels and keyboard navigation

## 🤝 Contributing

When making changes:
1. Follow the established directory structure
2. Keep components focused and small
3. Add fallback data markers for temporary implementations
4. Update this documentation when adding new modules
5. Ensure type safety with TypeScript

---

**Questions?** Check the inline code comments - all files have detailed documentation about their purpose and usage.
