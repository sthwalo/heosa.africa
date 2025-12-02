# Event System Quick Reference

## 🚀 Quick Start

### Update Event Dates (One Place Only!)
```typescript
// src/constants/events.constants.ts
export const EVENT_DATES = {
  votingOpen: new Date('2025-09-01T00:00:00'),
  votingClose: new Date('2025-10-31T23:59:59'),
  summit2025: new Date('2025-11-14T09:00:00'),
  awards2025: new Date('2025-11-15T15:00:00'),
};
```
✅ Everything updates automatically across entire app!

## 📦 Components

### Show Event Card with Auto-Updates
```tsx
import { EventCard } from '../components/features/events';

<EventCard 
  event={event}
  showCountdown={true}  // Shows countdown timer
  showStatus={true}     // Shows status badge
/>
```

### Show Just a Countdown
```tsx
import { EventCountdownDisplay } from '../components/features/events';

<EventCountdownDisplay 
  targetDate={new Date('2025-11-15')}
  compact={true}  // Small inline version
/>
```

### Show Status Badge
```tsx
import { EventStatusBadge } from '../components/features/events';

<EventStatusBadge 
  startDate={event.startDate}
  endDate={event.endDate}
/>
```

## 🎣 Hooks

### Check Voting Status
```tsx
import { useVotingStatus } from '../hooks';
import { VOTING_CONFIG } from '../constants';

const { isOpen, status } = useVotingStatus(
  VOTING_CONFIG.openDate,
  VOTING_CONFIG.deadline
);

// isOpen: true only during voting period
// status: 'not-started' | 'open' | 'closed'
```

### Get Event Status
```tsx
import { useEventStatus } from '../hooks';

const status = useEventStatus({ 
  startDate: event.startDate,
  endDate: event.endDate
});

// Returns: 'upcoming' | 'ongoing' | 'past'
```

### Get Countdown
```tsx
import { useCountdown } from '../hooks';

const countdown = useCountdown(targetDate);

console.log(countdown.days);       // Number
console.log(countdown.hours);      // Number
console.log(countdown.isExpired);  // Boolean
```

## 🔧 Services

### Get Events
```typescript
import { 
  getAllEvents, 
  getUpcomingEvents, 
  getOngoingEvents,
  isVotingOpen 
} from '../services/api/events.service';

// All events with computed status
const events = await getAllEvents();

// Only upcoming events
const upcoming = await getUpcomingEvents();

// Check if voting is currently open
const votingOpen = await isVotingOpen();
```

## 🎯 Common Use Cases

### Disable Button When Voting Closed
```tsx
const { isOpen } = useVotingStatus(openDate, closeDate);

<button disabled={!isOpen}>
  {isOpen ? 'Vote Now' : 'Voting Closed'}
</button>
```

### Show Different Message Based on Status
```tsx
const { status } = useVotingStatus(openDate, closeDate);

{status === 'not-started' && <p>Voting opens soon!</p>}
{status === 'open' && <p>Vote now!</p>}
{status === 'closed' && <p>Voting has closed</p>}
```

### Display Events List
```tsx
const [events, setEvents] = useState<Event[]>([]);

useEffect(() => {
  getUpcomingEvents().then(setEvents);
}, []);

{events.map(event => (
  <EventCard key={event.id} event={event} />
))}
```

## ⚡ Key Features

✅ **Auto-updating** - Status and countdowns update automatically
✅ **Real-time** - Changes reflect immediately without page refresh
✅ **Centralized** - All dates in one place
✅ **Optimized** - Stops updating when expired
✅ **Reusable** - Works with any event type
✅ **Type-safe** - Full TypeScript support

## 📂 File Locations

```
src/
├── types/event.types.ts              → Type definitions
├── constants/events.constants.ts     → EVENT_DATES (update here!)
├── hooks/
│   ├── useEventStatus.ts             → Status tracking
│   ├── useCountdown.ts               → Countdown timer
│   └── useVotingStatus.ts            → Voting status
├── services/api/events.service.ts    → Data fetching
└── components/features/events/
    ├── EventCard.tsx                 → Complete event card
    ├── EventStatusBadge.tsx          → Status badge
    └── EventCountdownDisplay.tsx     → Countdown display
```

## 🐛 Troubleshooting

**Dates showing as expired?**
→ Update `EVENT_DATES` in `src/constants/events.constants.ts`

**Status not updating?**
→ Check browser console for errors, ensure hooks are called inside components

**Countdown not stopping?**
→ Ensure component unmounts properly (cleanup is automatic)

**Need past events?**
→ Use `getPastEvents()` from events service
