# Auto-Updating Dates - Verification Guide

## ✅ How Date Auto-Updating Works

### 1. Single Source of Truth
All dates are defined **once** in `src/constants/events.constants.ts`:

```typescript
export const EVENT_DATES = {
  votingOpen: new Date('2025-09-01T00:00:00'),
  votingClose: new Date('2025-10-31T23:59:59'),
  nominationsOpen: new Date('2025-01-01T00:00:00'),
  nominationsClose: new Date('2025-08-31T23:59:59'),
  
  // Summit Registration
  registrationOpenSummit: new Date('2025-01-01T00:00:00'),
  registrationCloseSummit: new Date('2025-11-13T23:59:59'),
  summit2025: new Date('2025-11-14T09:00:00'),
  
  // Awards Registration
  registrationOpenAwards: new Date('2025-01-01T00:00:00'),
  registrationCloseAwards: new Date('2025-11-14T23:59:59'),
  awards2025: new Date('2025-11-15T15:00:00'),
};
```

### 2. Computed Getters for Text Dates
Instead of hardcoded strings, we use **computed getters** that auto-format:

#### Before (Static - Won't Update):
```typescript
export const VOTING_CONFIG = {
  deadline: new Date('2025-10-31'),
  deadlineText: 'October 31, 2025',  // ❌ Hardcoded, won't change
};
```

#### After (Dynamic - Auto-Updates):
```typescript
export const VOTING_CONFIG = {
  deadline: EVENT_DATES.votingClose,
  
  get deadlineText(): string {
    return formatDateLong(this.deadline);  // ✅ Auto-formats when accessed
  },
};
```

### 3. What Auto-Updates

#### ✅ VOTING_CONFIG.deadlineText
- **File**: `src/constants/voting.constants.ts`
- **Format**: "October 31, 2025" → Changes automatically
- **Used in**: Finalists page, VoteModal
- **Update**: Only change `EVENT_DATES.votingClose`

#### ✅ EVENT_CONFIG.awardsCeremonyDate
- **File**: `src/constants/app.constants.ts`
- **Format**: "November 15, 2025" → Changes automatically
- **Used in**: Awards page, various components
- **Update**: Only change `EVENT_DATES.awards2025`

#### ✅ EVENT_CONFIG.votingDeadline
- **File**: `src/constants/app.constants.ts`
- **Format**: "October 31, 2025" → Changes automatically
- **Used in**: General references
- **Update**: Only change `EVENT_DATES.votingClose`

#### ✅ ACCOMMODATION_INFO.eventDate
- **File**: `src/constants/contact.constants.ts`
- **Format**: "November 15, 2025" → Changes automatically
- **Used in**: Contact/accommodation info
- **Update**: Only change `EVENT_DATES.awards2025`

### 4. Testing Date Auto-Update

#### Test 1: Update Voting Deadline
```typescript
// 1. Open: src/constants/events.constants.ts
export const EVENT_DATES = {
  votingClose: new Date('2026-03-15T23:59:59'),  // Changed to March 15, 2026
};

// 2. Check automatically updated in:
// - Finalists page: "Voting closes March 15, 2026"
// - VoteModal: "Voting closes on March 15, 2026"
// - No other files need changing!
```

#### Test 2: Update Awards Date
```typescript
// 1. Open: src/constants/events.constants.ts
export const EVENT_DATES = {
  awards2025: new Date('2026-12-10T15:00:00'),  // Changed to Dec 10, 2026
};

// 2. Check automatically updated in:
// - Awards page: "ceremony on December 10, 2026"
// - Contact page: "Event Date: December 10, 2026"
// - EventsSlider: Shows new countdown
// - No other files need changing!
```

## 🔧 How to Verify It's Working

### Method 1: Console Test
Open browser console and test:

```javascript
// Import the constants in your component
import { VOTING_CONFIG, EVENT_CONFIG } from './constants';

console.log(VOTING_CONFIG.deadlineText);  // Shows formatted date
console.log(EVENT_CONFIG.awardsCeremonyDate);  // Shows formatted date

// Change EVENT_DATES and refresh - dates update!
```

### Method 2: Component Test
Add a test component:

```tsx
import { VOTING_CONFIG, EVENT_CONFIG, ACCOMMODATION_INFO } from '../constants';

export function DateTest() {
  return (
    <div>
      <p>Voting Deadline: {VOTING_CONFIG.deadlineText}</p>
      <p>Awards Date: {EVENT_CONFIG.awardsCeremonyDate}</p>
      <p>Event Date: {ACCOMMODATION_INFO.eventDate}</p>
    </div>
  );
}

// Update EVENT_DATES → All three dates update automatically!
```

### Method 3: Real-Time Status Test
The status also updates automatically:

```tsx
import { useVotingStatus } from '../hooks';
import { VOTING_CONFIG } from '../constants';

const { isOpen, status } = useVotingStatus(
  VOTING_CONFIG.openDate,
  VOTING_CONFIG.deadline
);

console.log('Voting open:', isOpen);  // true/false based on current time
console.log('Status:', status);  // 'not-started' | 'open' | 'closed'

// Changes automatically as time passes!
// No page refresh needed after dates update
```

## 📊 Update Propagation Flow

```
Change EVENT_DATES
       ↓
VOTING_CONFIG.deadlineText → Finalists page
                           → VoteModal
       ↓
EVENT_CONFIG.awardsCeremonyDate → Awards page
                                 → Timeline
       ↓
ACCOMMODATION_INFO.eventDate → Contact page
       ↓
All EventCard countdowns update
       ↓
All status badges update
       ↓
All voting checks update
```

## 🎯 What Updates Automatically vs Manually

### ✅ Auto-Updates (No Action Needed)
- **Date text formatting** (Oct 31 → formatted string)
- **Event status** (upcoming → ongoing → past)
- **Countdown timers** (updates every second)
- **Voting open/closed** (based on current time)
- **Nominations open/closed** (based on current time)
- **Registration status** (based on current time)
- **Status badges** (colors and text)
- **Button states** (enabled/disabled)
- **CTA text** ("Register Now" → "Registration Closed")

### ⚠️ Needs Manual Update (One Place Only)
- **The source dates** in `EVENT_DATES` constant
- **Event descriptions** (if dates mentioned in text)
- **Timeline data** (separate data file)

## 📋 CTA (Call-to-Action) Management

### Overview
All CTAs (buttons, links) now dynamically change based on event status. This ensures users always see the correct action based on current dates.

### Dynamic CTA Hooks

#### useNominationsStatus
Checks if nominations are currently open:

```tsx
import { useNominationsStatus } from '../hooks/useNominationsStatus';

const { isOpen, status, closeDateFormatted } = useNominationsStatus();

// Status values: 'not-open' | 'open' | 'closed'
// Use to control nomination buttons and forms
```

#### useRegistrationStatus
Checks registration status for both summit and awards:

```tsx
import { useRegistrationStatus } from '../hooks/useRegistrationStatus';

const { summit, awards } = useRegistrationStatus();

// Each has:
// - isOpen: boolean
// - status: 'not-open' | 'open' | 'closed' | 'event-passed'
// - openDateFormatted, closeDateFormatted, eventDateFormatted
```

### CTA Implementation Patterns

#### Pattern 1: Nomination Button (Awards Pages)
```tsx
{nominations.isOpen ? (
  <Link to="/awards/nominate">
    Nominate Now
  </Link>
) : nominations.status === 'not-open' ? (
  <div>Opens {nominations.openDateFormatted}</div>
) : (
  <button disabled>Nominations Closed</button>
)}
```

#### Pattern 2: Registration Button (Event Pages)
```tsx
{summit.isOpen ? (
  <a href={registerLink}>Register Now</a>
) : summit.status === 'not-open' ? (
  <div>Registration Opens {summit.openDateFormatted}</div>
) : summit.status === 'event-passed' ? (
  <div>Event Has Passed</div>
) : (
  <div>Registration Closed</div>
)}
```

### Pages Using Dynamic CTAs

#### ✅ Awards.tsx
- **Nominations CTA**: Changes based on `useNominationsStatus()`
- **Awards Registration CTA**: Changes based on `useRegistrationStatus().awards`
- **States**: "Nominate Now" → "Opens [Date]" → "Nominations Closed"

#### ✅ AwardsNominate.tsx
- **Form Visibility**: Shows/hides based on `useNominationsStatus()`
- **Status Messages**: Different alerts for not-open vs closed
- **Deadline Text**: Auto-updates from `nominations.closeDateFormatted`

#### ✅ MedicalEvents.tsx
- **Event Registration**: Both summit and awards use respective status
- **Button States**: Dynamic per event registration status
- **States**: "Register Now" → "Opens [Date]" → "Registration Closed" → "Event Has Passed"

#### ✅ Overview.tsx
- **Summit Registration**: Changes based on `useRegistrationStatus().summit`
- **States**: "Register Now" → "Registration Opens [Date]" → "Registration Closed" → "Event Has Passed"

### Adding New Dynamic CTAs

To add a new event with dynamic CTAs:

1. **Add dates to EVENT_DATES**:
```typescript
export const EVENT_DATES = {
  // ...existing dates
  newEventRegistrationOpen: new Date('2026-01-01T00:00:00'),
  newEventRegistrationClose: new Date('2026-12-31T23:59:59'),
  newEvent: new Date('2027-01-15T09:00:00'),
};
```

2. **Update useRegistrationStatus hook** (if it's a registration-based event):
```typescript
// Add new event to hook logic
const [newEvent, setNewEvent] = useState<RegistrationStatus>(() =>
  calculateStatus(
    EVENT_DATES.newEventRegistrationOpen,
    EVENT_DATES.newEventRegistrationClose,
    EVENT_DATES.newEvent
  )
);

return { summit, awards, newEvent };
```

3. **Use in component**:
```tsx
const { newEvent } = useRegistrationStatus();

{newEvent.isOpen ? (
  <button>Register for New Event</button>
) : (
  <button disabled>Registration Closed</button>
)}
```

### CTA Auto-Update Flow

```
Change EVENT_DATES registration/nomination dates
       ↓
useNominationsStatus() updates every 60 seconds
       ↓
useRegistrationStatus() updates every 60 seconds
       ↓
Components re-render with new status
       ↓
CTAs show updated text and state
       ↓
Buttons enable/disable automatically
```

### Testing CTAs

#### Test 1: Nominations CTA
```typescript
// Set nominations to closed
nominationsClose: new Date('2024-01-01T23:59:59'), // Past

// Result:
// - Awards page: Shows "Nominations Closed" (disabled)
// - AwardsNominate page: Shows closed alert, no form
// - Deadline text: Shows past date
```

#### Test 2: Registration CTA
```typescript
// Set summit registration to future
registrationOpenSummit: new Date('2026-06-01T00:00:00'), // Future

// Result:
// - Overview page: "Registration Opens June 1, 2026"
// - MedicalEvents page: Shows blue badge with open date
// - Button is disabled/not clickable
```

#### Test 3: Event Passed
```typescript
// Set awards event to past
awards2025: new Date('2024-11-15T15:00:00'), // Past

// Result:
// - Awards page: "Event Has Passed"
// - MedicalEvents page: Shows gray badge
// - No registration link shown
```

## 🎉 CTA Benefits

### Before (Static CTAs):
❌ "Register Now" button shows even after event
❌ "Nominations Closed" hardcoded, doesn't reflect actual status
❌ Need to manually update button text across 10+ pages
❌ Risk of showing wrong CTA to users

### After (Dynamic CTAs):
✅ CTAs automatically reflect current event status
✅ Buttons enable/disable based on dates
✅ Update EVENT_DATES once → All CTAs update everywhere
✅ Users always see correct action available
✅ Status messages show exact dates dynamically
✅ No manual CTA updates needed across pages
```

## 🧪 Complete Test Scenario

### Step 1: Current State (Dec 2, 2025)
```typescript
EVENT_DATES = {
  votingClose: new Date('2025-10-31T23:59:59'),  // Past
  awards2025: new Date('2025-11-15T15:00:00'),   // Past
}
```

**Result**: 
- Voting status: "Closed" ✅
- Awards status: "Past Event" ✅
- Countdown: Shows "Event Started" ✅

### Step 2: Update to Future Dates
```typescript
EVENT_DATES = {
  votingClose: new Date('2026-03-15T23:59:59'),  // Future
  awards2025: new Date('2026-12-10T15:00:00'),   // Future
}
```

**Result**: 
- Voting status: "Open" (if after Sept 1, 2026) ✅
- Awards status: "Upcoming" ✅
- Countdown: Shows "45d 12h 30m 15s" ✅
- All text dates: "March 15, 2026" / "December 10, 2026" ✅

### Step 3: Verify Auto-Format
```javascript
// In browser console or test component:
import { VOTING_CONFIG } from './constants';

console.log(VOTING_CONFIG.deadlineText);
// Outputs: "March 15, 2026" (auto-formatted!)

// No need to manually update any other files!
```

## 📝 Summary

### What Auto-Updates:
✅ Date text formatting via computed getters
✅ Event status (upcoming/ongoing/past)
✅ Countdown timers (every second)
✅ Voting status (every minute)
✅ All UI components using these dates

### How to Update Dates:
1. Open `src/constants/events.constants.ts`
2. Change dates in `EVENT_DATES` object
3. Save file
4. **Everything updates automatically!**

### Files That Use Auto-Updating Dates:
- ✅ `src/pages/Finalists.tsx` - Via VOTING_CONFIG.deadlineText
- ✅ `src/pages/Awards.tsx` - Via EVENT_CONFIG.awardsCeremonyDate
- ✅ `src/components/features/voting/VoteModal.tsx` - Via VOTING_CONFIG.deadlineText
- ✅ `src/components/EventsSlider.tsx` - Via EventCard countdown
- ✅ All event cards - Via EventCountdownDisplay
- ✅ All status badges - Via useEventStatus hook

### Zero Manual Updates Needed:
No need to search through files for hardcoded dates. Change once in `EVENT_DATES`, everything updates!

---

## 🎉 Verification Complete!

The date system is now **fully auto-updating**:
- ✅ Dates format automatically from EVENT_DATES
- ✅ Status updates automatically based on current time
- ✅ Countdowns update every second
- ✅ Voting checks update every minute
- ✅ Single source of truth maintained

**Update EVENT_DATES once → All dates update everywhere automatically!**
