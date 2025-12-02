# Frontend Architecture

## Overview

The HEOSA frontend is a **Single Page Application (SPA)** built with React 18, TypeScript, and Tailwind CSS. It follows a component-based architecture with clear separation between presentation and data layers.

## Technology Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type safety
- **React Router 6.22.3** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first styling
- **Vite 5.4.2** - Build tool and dev server

### Supporting Libraries
- **Framer Motion 11.16.0** - Animations
- **Lucide React 0.344.0** - Icon components
- **QRCode.react 4.2.0** - QR code generation

## Directory Structure

```
src/
├── main.tsx                    # Application entry point
├── App.tsx                     # Root component with routing
├── index.css                   # Global styles & Tailwind
├── config.ts                   # Environment configuration
├── vite-env.d.ts              # Vite type declarations
│
├── components/                 # Reusable components (10 files)
│   ├── Navbar.tsx             # Navigation with dropdowns
│   ├── Footer.tsx             # Site footer
│   ├── Hero.tsx               # Hero section
│   ├── Features.tsx           # Features grid
│   ├── EventsSlider.tsx       # Event carousel
│   ├── EventCountdown.tsx     # Countdown timer
│   ├── Contact.tsx            # Contact form
│   ├── Timeline.tsx           # Desktop timeline
│   ├── TimelineMobile.tsx     # Mobile timeline
│   └── QRCodeGenerator.tsx    # QR code utility
│
├── pages/                      # Route-level pages (16 files)
│   ├── Home.tsx               # Landing page
│   ├── About.tsx              # Organization info
│   ├── Awards.tsx             # Awards overview
│   ├── AwardsCategories.tsx   # Category details
│   ├── AwardsNominate.tsx     # Nomination form
│   ├── Overview.tsx           # Program overview
│   ├── Partners.tsx           # Sponsors
│   ├── MedicalEvents.tsx      # Events listing
│   ├── Finalists.tsx          # 2025 finalists + voting
│   ├── PastFinalists.tsx      # Historical finalists
│   ├── Winners.tsx            # Current winners
│   ├── PastWinners.tsx        # Historical winners
│   ├── Gallery.tsx            # Photo/video gallery
│   ├── Contact.tsx            # Contact page
│   ├── QRCodes.tsx            # QR management
│   └── T&Cs.tsx               # Terms & conditions
│
└── data/                       # Static data (5 files)
    ├── finalists25.ts         # 2025 finalists (53 entries)
    ├── finalistsData.ts       # Historical + types
    ├── winnersData.ts         # Winners data
    ├── galleryData.ts         # Gallery metadata
    └── timelineData.ts        # Timeline configs
```

## Component Architecture

### Component Hierarchy

```
App.tsx
├─ Navbar
│  ├─ MenuItem (Left Menu)
│  ├─ Logo
│  └─ MenuItem (Right Menu)
│
├─ Routes
│  ├─ Home
│  │  ├─ Hero
│  │  ├─ Timeline
│  │  ├─ EventsSlider
│  │  └─ Features
│  │
│  ├─ Awards
│  │  └─ Overview Content
│  │
│  ├─ Finalists
│  │  ├─ Timeline
│  │  ├─ CategorySection[]
│  │  │  └─ FinalistCard[]
│  │  └─ VoteModal
│  │
│  ├─ Gallery
│  │  ├─ YearFilter
│  │  ├─ CategoryFilter
│  │  ├─ GalleryGrid
│  │  └─ ImageModal
│  │
│  └─ ... (other pages)
│
└─ Footer
   ├─ About Section
   ├─ Quick Links
   ├─ Contact Info
   └─ Newsletter Form
```

### Component Classification

#### 1. Layout Components
**Purpose:** Structural and navigational

- `Navbar.tsx` - Primary navigation
- `Footer.tsx` - Site footer with links
- `App.tsx` - Root layout wrapper

**Responsibilities:**
- Consistent page structure
- Navigation state management
- Responsive menu handling

#### 2. Feature Components
**Purpose:** Complex, self-contained functionality

- `EventsSlider.tsx` - Carousel with navigation
- `Timeline.tsx` - Event timeline visualization
- `QRCodeGenerator.tsx` - QR code creation
- `EventCountdown.tsx` - Time calculation

**Responsibilities:**
- Internal state management
- User interactions
- Data transformation

#### 3. UI Components
**Purpose:** Simple, reusable elements

- `Hero.tsx` - Hero section
- `Features.tsx` - Feature grid
- `Contact.tsx` - Contact form

**Responsibilities:**
- Pure rendering
- Props-based customization
- Minimal state

#### 4. Page Components
**Purpose:** Route-level composition

All files in `pages/` directory

**Responsibilities:**
- Data fetching/import
- Component composition
- Route-specific logic

## State Management

### Strategy: Local Component State

**No global state library** (Redux, Zustand, etc.)

### State Locations

#### 1. Component-Level State (useState)

```typescript
// Example: Navbar.tsx
const [isOpen, setIsOpen] = useState(false);
const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

// Example: Finalists.tsx
const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);
const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

// Example: Gallery.tsx
const [selectedYear, setSelectedYear] = useState('2025');
const [selectedCategory, setSelectedCategory] = useState('All');
```

#### 2. URL State (React Router)

```typescript
// Route parameters
<Route path="/past-winners/:year" element={<PastWinners />} />

// Hash fragments for sections
<Link to="/gallery#events">Events</Link>
```

#### 3. Static Data (Imports)

```typescript
// Direct imports from data files
import { finalists25Data } from '../data/finalists25';
import { GALLERY_IMAGES } from '../data/galleryData';
```

### State Flow Diagram

```
┌─────────────────────┐
│   User Action       │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│   Event Handler     │
│   (onClick, etc.)   │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│   setState()        │
│   Update Local      │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│   Re-render         │
│   Component         │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│   UI Updates        │
└─────────────────────┘
```

## Routing Architecture

### Route Configuration

```typescript
// App.tsx
<Routes>
  {/* Primary Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  
  {/* Awards Routes */}
  <Route path="/awards" element={<Awards />} />
  <Route path="/awards/overview" element={<Overview />} />
  <Route path="/awards/categories" element={<AwardsCategories />} />
  <Route path="/awards/winners" element={<Winners />} />
  <Route path="/awards/vote" element={<Finalists />} />
  <Route path="/awards/qrcodes" element={<QRCodes />} />
  
  {/* Dynamic Routes */}
  <Route path="/past-winners/:year" element={<PastWinners />} />
  
  {/* Other Routes */}
  <Route path="/partners" element={<Partners />} />
  <Route path="/medical-events" element={<MedicalEvents />} />
  <Route path="/finalists" element={<Finalists />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/t&cs" element={<TermsAndConditions />} />
</Routes>
```

### Navigation Patterns

#### 1. Programmatic Navigation

```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/finalists');
```

#### 2. Link-Based Navigation

```typescript
import { Link } from 'react-router-dom';

<Link to="/awards/categories">Categories</Link>
```

#### 3. Hash-Based Scrolling

```typescript
const handleMenuClick = (path: string) => {
  const [, hash] = path.split('#');
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
};
```

## Data Layer

### Data Structure

```typescript
// Type Definitions
interface Finalist {
  id: string;          // "AHEA 025"
  name: string;
  category: string;
  image: string;
  voteCode?: string;
  year?: string;
}

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  year: string;
  description?: string;
  images?: string[];
}

interface TimelineEvent {
  date: string;
  phase: string;
  status: "completed" | "active" | "upcoming" | "closed";
  description?: string;
  cta?: {
    text: string;
    link: string;
  };
}
```

### Data Access Pattern

```
Page Component
      ↓
Import Statement
      ↓
Static Data File (TypeScript)
      ↓
Filtered/Transformed
      ↓
Rendered in UI
```

### Data Files

| File | Purpose | Entries | Size |
|------|---------|---------|------|
| `finalists25.ts` | 2025 finalists | 53 | ~5KB |
| `finalistsData.ts` | Historical data | ~200 | ~15KB |
| `winnersData.ts` | Winners by year | ~100 | ~8KB |
| `galleryData.ts` | Image metadata | ~10 | ~3KB |
| `timelineData.ts` | Timeline configs | ~15 | ~2KB |

## Component Patterns

### 1. Container-Presenter Pattern

```typescript
// Container: Manages state and logic
const Finalists = () => {
  const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);
  const currentFinalists = finalists25Data.filter(f => f.year === '2025');
  
  return (
    <div>
      {currentFinalists.map(finalist => (
        <FinalistCard 
          key={finalist.id}
          finalist={finalist}
          onVote={setSelectedFinalist}
        />
      ))}
    </div>
  );
};

// Presenter: Pure rendering
const FinalistCard = ({ finalist, onVote }) => (
  <div className="card">
    <img src={finalist.image} alt={finalist.name} />
    <h3>{finalist.name}</h3>
    <button onClick={() => onVote(finalist)}>Vote Now</button>
  </div>
);
```

### 2. Composition Pattern

```typescript
// Home.tsx - Composing multiple components
const Home = () => (
  <main>
    <Hero />
    <Timeline data={homeTimelineData} title="Key Dates" />
    <EventsSlider />
    <Features />
  </main>
);
```

### 3. Render Props Pattern

```typescript
// Modal with render props
<Modal isOpen={isOpen} onClose={handleClose}>
  {() => (
    <div>
      <h2>Modal Content</h2>
      <button onClick={handleClose}>Close</button>
    </div>
  )}
</Modal>
```

### 4. Custom Hooks (Future)

```typescript
// Example custom hook for voting
const useVoting = (finalist: Finalist) => {
  const [isVoting, setIsVoting] = useState(false);
  
  const vote = async (method: VoteMethod) => {
    setIsVoting(true);
    // Voting logic
    setIsVoting(false);
  };
  
  return { vote, isVoting };
};
```

## Styling Architecture

### Tailwind CSS Approach

**Utility-First:** Direct className usage

```typescript
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
    Title
  </h1>
</div>
```

### Theme Configuration

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom extensions here
    },
  },
  plugins: [],
};
```

### Color System

```css
/* Primary colors used via Tailwind classes */
.text-[#962326]    /* Burgundy - Primary */
.bg-[#F2C849]      /* Gold - Secondary */
.text-[#A7864B]    /* Bronze - Tertiary */
.bg-[#2B2A29]      /* Charcoal - Dark */
```

### Responsive Design

```typescript
// Mobile-first approach
<div className="
  grid 
  grid-cols-1       // Mobile: 1 column
  md:grid-cols-2    // Tablet: 2 columns
  lg:grid-cols-4    // Desktop: 4 columns
  gap-6
">
```

## Performance Optimization

### Code Splitting

```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
      },
    },
  },
}
```

### Image Optimization

**Current:** Native browser loading
**Planned:** 
- WebP format conversion
- Responsive images with srcset
- Lazy loading library

### Bundle Size

```
Main bundle:     ~150KB (gzipped)
Vendor chunk:    ~140KB (gzipped)
Assets:          ~5GB (images/videos)
```

## Error Handling

### Current Approach

```typescript
// Basic try-catch
try {
  const response = await fetch('/api/nominations/create.php');
  if (!response.ok) throw new Error('API error');
} catch (error) {
  console.error('Error:', error);
  alert('An error occurred');
}
```

### Planned: Error Boundaries

```typescript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log error to service
  }
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

## Testing Strategy (Planned)

### Unit Tests
- Component rendering
- User interactions
- Data transformations

### Integration Tests
- Page composition
- Routing
- API calls

### E2E Tests
- Critical user flows
- Voting process
- Form submissions

## Build Configuration

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react(), ignoreDSStore()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 4173,
    proxy: {
      '/api': {
        target: 'https://heosa.africa',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
```

## Related Documentation

- [System Architecture](./SYSTEM_ARCHITECTURE.md)
- [Component Library](../design/COMPONENT_LIBRARY.md)
- [State Management](../development/STATE_MANAGEMENT.md)
- [Routing Guide](../development/ROUTING.md)

---

**Last Updated:** December 2025  
**Maintained By:** HEOSA Development Team
