# Design System

## Overview

The HEOSA design system provides a cohesive visual language and component library that ensures consistency across the platform. It's built on top of Tailwind CSS with custom brand colors and patterns.

## Brand Identity

### Color Palette

#### Primary Colors

```css
/* Burgundy - Primary Brand Color */
--primary: #962326
RGB: 150, 35, 38
Usage: CTAs, headings, important UI elements
```

```css
/* Gold - Secondary Brand Color */
--secondary: #F2C849
RGB: 242, 200, 73
Usage: Accents, highlights, secondary CTAs
```

```css
/* Bronze - Tertiary Accent */
--tertiary: #A7864B
RGB: 167, 134, 75
Usage: Hover states, tertiary elements
```

```css
/* Charcoal - Dark Base */
--dark: #2B2A29
RGB: 43, 42, 41
Usage: Text, dark backgrounds, footer
```

#### Neutral Colors

```css
/* White */
--white: #FFFFFF
RGB: 255, 255, 255
Usage: Backgrounds, light text

/* Gray Scale */
--gray-50: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-300: #D1D5DB
--gray-400: #9CA3AF
--gray-500: #6B7280
--gray-600: #4B5563
--gray-700: #374151
--gray-800: #1F2937
--gray-900: #111827
```

### Color Usage Guidelines

#### Do's ✅
- Use burgundy (#962326) for primary actions
- Use gold (#F2C849) for highlights and awards
- Maintain sufficient contrast ratios (WCAG AA minimum)
- Use charcoal (#2B2A29) for body text

#### Don'ts ❌
- Don't use brand colors for error states
- Don't mix burgundy and gold in equal proportions
- Don't use low contrast combinations
- Don't create new shades without documentation

### Color Applications

```typescript
// Tailwind CSS classes
<button className="bg-[#962326] hover:bg-[#A7864B] text-white">
  Primary Action
</button>

<h1 className="text-[#2B2A29]">Heading</h1>

<div className="bg-[#F2C849] bg-opacity-20 border border-[#F2C849]">
  Highlighted Content
</div>
```

## Typography

### Font Family

```css
/* System Font Stack (via Tailwind) */
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

### Type Scale

```css
/* Tailwind Typography Scale */
text-xs     0.75rem    12px
text-sm     0.875rem   14px
text-base   1rem       16px   ← Body text default
text-lg     1.125rem   18px
text-xl     1.25rem    20px
text-2xl    1.5rem     24px
text-3xl    1.875rem   30px
text-4xl    2.25rem    36px   ← Mobile H1
text-5xl    3rem       48px
text-6xl    3.75rem    60px   ← Desktop H1
```

### Heading Hierarchy

```typescript
// H1 - Page Titles
<h1 className="text-4xl md:text-6xl font-bold text-[#2B2A29] mb-6">
  Page Title
</h1>

// H2 - Section Titles
<h2 className="text-2xl md:text-4xl font-semibold text-[#2B2A29] mb-4">
  Section Title
</h2>

// H3 - Subsection Titles
<h3 className="text-xl md:text-2xl font-semibold text-[#2B2A29] mb-3">
  Subsection Title
</h3>

// H4 - Card/Component Titles
<h4 className="text-lg font-semibold text-[#2B2A29] mb-2">
  Component Title
</h4>
```

### Body Text

```typescript
// Standard paragraph
<p className="text-base text-gray-700 leading-relaxed">
  Body text content
</p>

// Large lead text
<p className="text-xl text-gray-600 mb-8">
  Lead paragraph
</p>

// Small helper text
<p className="text-sm text-gray-500">
  Helper text or captions
</p>
```

### Font Weights

```css
font-normal    400  Regular text
font-medium    500  Emphasized text
font-semibold  600  Subheadings
font-bold      700  Headings, CTAs
```

## Spacing System

### Tailwind Spacing Scale

```css
/* Spacing units (1 unit = 0.25rem = 4px) */
0     0px
1     4px
2     8px
3     12px
4     16px    ← Small spacing
6     24px    ← Medium spacing
8     32px    ← Large spacing
12    48px    ← Section spacing
16    64px    ← Page sections
20    80px
24    96px    ← Hero spacing
```

### Common Spacing Patterns

```typescript
// Component padding
<div className="p-4">              // 16px all sides
<div className="px-4 py-2">        // 16px horizontal, 8px vertical
<div className="p-4 sm:p-6 lg:p-8"> // Responsive padding

// Component margins
<div className="mb-6">             // 24px bottom
<div className="mt-12 mb-8">       // 48px top, 32px bottom

// Gap in grids
<div className="gap-6">            // 24px between grid items
<div className="space-y-4">        // 16px vertical spacing
```

## Layout System

### Container Widths

```typescript
// Max width container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Sizes:
max-w-7xl  1280px  Main content container
max-w-6xl  1152px  
max-w-5xl  1024px
max-w-4xl  896px   Article content
max-w-3xl  768px   
max-w-2xl  672px
max-w-xl   576px
```

### Grid System

```typescript
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Grid items */}
</div>

// Common patterns:
grid-cols-1           Mobile: 1 column
md:grid-cols-2        Tablet: 2 columns
lg:grid-cols-3        Desktop: 3 columns
lg:grid-cols-4        Desktop: 4 columns
```

### Flexbox Patterns

```typescript
// Horizontal center
<div className="flex justify-center items-center">

// Space between
<div className="flex justify-between items-center">

// Vertical stack
<div className="flex flex-col space-y-4">

// Responsive flex
<div className="flex flex-col sm:flex-row gap-4">
```

## Responsive Design

### Breakpoints

```css
/* Tailwind breakpoints */
sm    640px   Small tablets
md    768px   Tablets
lg    1024px  Laptops
xl    1280px  Desktops
2xl   1536px  Large screens
```

### Mobile-First Approach

```typescript
// Start with mobile, add larger breakpoints
<div className="
  text-2xl        // Mobile: 24px
  md:text-4xl     // Tablet: 36px
  lg:text-6xl     // Desktop: 60px
">
```

### Responsive Utilities

```typescript
// Show/hide at breakpoints
<div className="hidden lg:block">Desktop only</div>
<div className="block lg:hidden">Mobile only</div>

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">

// Responsive text
<p className="text-sm md:text-base lg:text-lg">
```

## Component Patterns

### Buttons

#### Primary Button
```typescript
<button className="
  inline-flex items-center
  px-6 py-3
  bg-[#962326]
  text-white
  font-medium
  rounded-md
  hover:bg-[#A7864B]
  transition-colors
  duration-200
">
  Primary Action
</button>
```

#### Secondary Button
```typescript
<button className="
  inline-flex items-center
  px-6 py-3
  border-2 border-[#F2C849]
  text-[#2B2A29]
  font-medium
  rounded-md
  hover:bg-[#F2C849]
  hover:text-white
  transition-colors
  duration-200
">
  Secondary Action
</button>
```

### Cards

```typescript
<div className="
  bg-white
  rounded-lg
  shadow-lg
  overflow-hidden
  hover:shadow-xl
  transition-shadow
  duration-300
">
  <div className="aspect-square">
    <img src="..." className="w-full h-full object-cover" />
  </div>
  <div className="p-4">
    <h3 className="font-semibold text-[#2B2A29] mb-2">Card Title</h3>
    <p className="text-gray-600 text-sm mb-4">Description</p>
    <button className="w-full py-2 bg-[#962326] text-white rounded-md">
      Action
    </button>
  </div>
</div>
```

### Modals

```typescript
<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
  <div className="bg-white rounded-xl max-w-md w-full p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-[#2B2A29]">Modal Title</h3>
      <button onClick={onClose}>
        <X className="h-6 w-6" />
      </button>
    </div>
    <div className="space-y-4">
      {/* Modal content */}
    </div>
  </div>
</div>
```

### Forms

```typescript
// Input field
<input
  type="text"
  className="
    w-full
    px-4 py-2
    border border-gray-300
    rounded-md
    focus:outline-none
    focus:ring-2
    focus:ring-[#962326]
    focus:border-transparent
  "
  placeholder="Enter text..."
/>

// Textarea
<textarea
  className="
    w-full
    px-4 py-2
    border border-gray-300
    rounded-md
    focus:outline-none
    focus:ring-2
    focus:ring-[#962326]
    min-h-[120px]
  "
  placeholder="Enter description..."
/>

// Select dropdown
<select
  className="
    w-full
    px-4 py-2
    border border-gray-300
    rounded-md
    focus:outline-none
    focus:ring-2
    focus:ring-[#962326]
  "
>
  <option>Select option</option>
</select>
```

## Icons

### Lucide React

```typescript
import { ArrowRight, Calendar, Users, Award } from 'lucide-react';

// Icon with text
<button className="flex items-center gap-2">
  <span>Learn More</span>
  <ArrowRight className="h-5 w-5" />
</button>

// Standalone icon
<Calendar className="h-6 w-6 text-[#962326]" />

// Icon sizes
className="h-4 w-4"   // Small (16px)
className="h-5 w-5"   // Medium (20px)
className="h-6 w-6"   // Large (24px)
className="h-8 w-8"   // Extra large (32px)
```

## Shadows

```css
shadow-sm     0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow        0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md     0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg     0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl     0 20px 25px -5px rgb(0 0 0 / 0.1)
```

## Border Radius

```css
rounded-sm    2px
rounded       4px
rounded-md    6px
rounded-lg    8px
rounded-xl    12px
rounded-2xl   16px
rounded-full  9999px (circular)
```

## Transitions

```css
transition-colors    Color changes
transition-shadow    Shadow changes
transition-transform Transform changes
transition-all       All properties

duration-150   150ms
duration-200   200ms  ← Default
duration-300   300ms
duration-500   500ms
```

## Accessibility

### Color Contrast

- **Text on White:** Use charcoal (#2B2A29) or gray-700+
- **White Text:** Use on burgundy (#962326) or dark (#2B2A29)
- **Minimum Ratio:** 4.5:1 for normal text, 3:1 for large text

### Focus States

```typescript
<button className="
  focus:outline-none
  focus:ring-2
  focus:ring-[#962326]
  focus:ring-offset-2
">
```

### Screen Reader Support

```typescript
<button aria-label="Close modal">
  <X className="h-6 w-6" />
</button>
```

## Animation Guidelines

### Hover Effects

```typescript
// Button hover
hover:bg-[#A7864B]
hover:shadow-xl
transition-all duration-200

// Card hover
hover:scale-105
transition-transform duration-300
```

### Loading States

```typescript
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
</div>
```

## Dark Mode (Future)

Planned support for dark mode using Tailwind's dark: prefix:

```typescript
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
```

## Related Documentation

- [Component Library](./COMPONENT_LIBRARY.md)
- [Responsive Design](./RESPONSIVE_DESIGN.md)
- [Frontend Architecture](../architecture/FRONTEND_ARCHITECTURE.md)

---

**Last Updated:** December 2025  
**Maintained By:** HEOSA Design Team
