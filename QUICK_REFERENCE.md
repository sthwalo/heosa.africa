# Quick Reference Guide - HEOSA Frontend

## 📦 Import Cheat Sheet

```typescript
// Types
import { Finalist, GalleryImage, MenuItem, ContactInfo } from '../types';

// Constants
import { VOTING_CONFIG, CONTACT_INFO, NAVIGATION } from '../constants';

// Hooks
import { useModal, useClickOutside, useMediaQuery, useVoting } from '../hooks';

// Services
import { finalistsService, galleryService, votingService } from '../services';

// Utils
import { formatDate, buildSmsUrl, share, isValidEmail } from '../utils';

// UI Components
import { Modal, Button, Card, ImageCarousel } from '../components/ui';

// Feature Components
import { VoteModal, FinalistCard } from '../components/features/voting';
import { GalleryFilters, ImageModal } from '../components/features/gallery';

// Layout
import { Navbar, Footer } from '../components/layout';
```

## 🎣 Hook Examples

### useModal
```typescript
const modal = useModal<Finalist>();

// Open modal with data
modal.open(finalistData);

// Check state
if (modal.isOpen) { /* modal is open */ }

// Get data
const finalist = modal.data;

// Close
modal.close();
```

### useMediaQuery
```typescript
// Custom query
const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

// Predefined hooks
const isMobile = useIsMobile();
const isDesktop = useIsDesktop();
```

### useClickOutside
```typescript
const menuRef = useRef<HTMLDivElement>(null);
useClickOutside(menuRef, () => setIsOpen(false));
```

## 🧩 Component Examples

### Modal
```typescript
<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="My Modal"
  maxWidth="lg"
>
  <p>Modal content here</p>
</Modal>
```

### Button
```typescript
<Button 
  variant="primary"    // primary | secondary | outline | ghost | danger
  size="lg"           // sm | md | lg
  fullWidth
  isLoading={isSubmitting}
  onClick={handleClick}
>
  Submit
</Button>
```

### Card
```typescript
<Card padding="lg" hover>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## 🛠️ Utility Examples

### URL Building
```typescript
// SMS
const smsUrl = buildSmsUrl('33351', 'VOTE01');
// Result: "sms:33351?body=VOTE01"

// WhatsApp
const waUrl = buildWhatsAppUrl('+27799501565', 'Hello');
// Result: "https://wa.me/27799501565?text=Hello"

// Email
const emailUrl = buildEmailUrl('vote@heosa.africa', 'Subject', 'Body');
// Result: "mailto:vote@heosa.africa?subject=Subject&body=Body"

// Phone
const phoneUrl = buildPhoneUrl('+27824355370');
// Result: "tel:+27824355370"

// Maps
const mapsUrl = buildMapsUrl('123 Main St, City');
```

### Date Formatting
```typescript
// Format date
formatDate(new Date(), { month: 'short', day: 'numeric' });
// Result: "Dec 2"

// Days until
daysUntil(new Date('2025-10-31'));
// Result: 333

// Countdown
formatCountdown(new Date('2025-10-31'));
// Result: "11 months"
```

### Sharing
```typescript
// Native share
await share({
  title: 'Vote for Dr. Smith',
  text: 'Check out this nominee!',
  url: window.location.href
});

// Share finalist
await shareFinalist('Dr. Smith', 'VOTE01');

// Copy to clipboard
await copyToClipboard('Text to copy');
```

### Validation
```typescript
// Email
isValidEmail('test@example.com'); // true

// Phone
isValidPhone('+27799501565'); // true

// Form validation
const { isValid, errors } = validateForm(
  { email: 'test@example.com', name: 'John' },
  {
    email: [
      (v) => isRequired(v) ? null : 'Email required',
      (v) => isValidEmail(v) ? null : 'Invalid email'
    ],
    name: [
      (v) => isRequired(v) ? null : 'Name required'
    ]
  }
);
```

## 🔧 Service Examples

### Finalists Service
```typescript
// Get finalists by year
const finalists = await getFinalistsByYear('2025');

// Get single finalist
const finalist = await getFinalistById('hi1');

// Get grouped by category
const categories = await getFinalistsByCategory('2025');

// Get available years
const years = await getAvailableYears();
```

### Gallery Service
```typescript
// Get all images
const images = await getAllImages();

// Get filtered images
const filtered = await getFilteredImages('2024', 'Awards');

// Get years
const years = await getGalleryYears();

// Get categories
const categories = await getGalleryCategories('2024');
```

### Voting Service
```typescript
// Submit vote
const result = await submitVote({
  finalistId: 'hi1',
  voteCode: 'HI01',
  method: 'sms',
  timestamp: new Date()
});

if (result.success) {
  console.log('Vote submitted!');
}
```

## 📝 Constants Available

### VOTING_CONFIG
```typescript
VOTING_CONFIG.deadline        // Date object
VOTING_CONFIG.deadlineText    // "October 31, 2025"
VOTING_CONFIG.sms.southAfrica // "34855"
VOTING_CONFIG.whatsapp        // "+27799501565"
VOTING_CONFIG.email          // "vote@heosa.africa"
VOTING_CONFIG.isOpen         // boolean
```

### CONTACT_INFO
```typescript
CONTACT_INFO.phoneNumbers     // Array of {number, label}
CONTACT_INFO.whatsapp        // "+27824355370"
CONTACT_INFO.email           // "info@heosa.africa"
CONTACT_INFO.address         // {street, city, province, country, postal}
```

### NAVIGATION
```typescript
NAVIGATION.leftMenu          // Array of MenuItem
NAVIGATION.rightMenu         // Array of MenuItem
```

### APP_CONFIG
```typescript
APP_CONFIG.name              // "HEOSA"
APP_CONFIG.fullName          // "African Health Excellence Organisation"
APP_CONFIG.currentYear       // 2025
```

### BRAND_COLORS
```typescript
BRAND_COLORS.primary         // "#962326"
BRAND_COLORS.secondary       // "#F2C849"
BRAND_COLORS.tertiary        // "#A7864B"
BRAND_COLORS.dark           // "#2B2A29"
```

## 🎨 Tailwind Classes

### Brand Colors
```tsx
// Background
className="bg-[#962326]"      // Primary burgundy
className="bg-[#F2C849]"      // Secondary gold
className="bg-[#A7864B]"      // Tertiary muted gold
className="bg-[#2B2A29]"      // Dark

// Text
className="text-[#962326]"
className="text-[#F2C849]"
className="text-[#A7864B]"
className="text-[#2B2A29]"

// Border
className="border-[#962326]"
```

## 🔍 Finding Components

```bash
# UI Components
src/components/ui/
├── Modal.tsx           # Generic modal
├── Button.tsx          # Button variants
├── Card.tsx            # Card components
└── ImageCarousel.tsx   # Image/video carousel

# Feature Components
src/components/features/
├── voting/
│   ├── VoteModal.tsx        # Voting modal
│   ├── VotingMethods.tsx    # Voting methods
│   └── FinalistCard.tsx     # Finalist card
└── gallery/
    ├── GalleryFilters.tsx   # Year/category filters
    ├── GalleryGrid.tsx      # Image grid
    └── ImageModal.tsx       # Image viewer

# Layout Components
src/components/layout/
├── Navbar.tsx          # Navigation bar
└── Footer.tsx          # Footer
```

## 🐛 Debugging Tips

### Check Fallback Data
All hardcoded data is in:
- `/src/constants/` - Configuration
- `/src/data/` - Static data files

Look for comments:
```typescript
/**
 * ⚠️ FALLBACK DATA - Currently using hardcoded values
 * TODO: Replace with API configuration when backend is implemented
 */
```

### TypeScript Errors
- Types are in `/src/types/`
- Import from centralized: `import { Type } from '../types'`

### Component Not Found
- Check `/src/components/ui/` for reusable components
- Check `/src/components/features/` for feature components
- Check `/src/components/layout/` for layout components

## 📚 Full Documentation

See `docs/architecture/FRONTEND_REFACTORING.md` for complete architecture documentation.

---

**Need help?** All files have detailed JSDoc comments explaining their purpose and usage!
