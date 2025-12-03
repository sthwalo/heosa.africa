/**
 * Events Configuration Constants
 * 
 * ⚠️ FALLBACK DATA - Currently using hardcoded values
 * TODO: Replace with API configuration when backend is implemented
 */

import { Event } from '../types/event.types';

/**
 * Critical event dates for automatic status updates
 */
export const EVENT_DATES = {
  // 2026 Events
  nominationsOpen: new Date('2025-12-01T00:00:00'),
  nominationsClose: new Date('2026-04-30T23:59:59'),
  finalistsAnnouncement: new Date('2026-08-29T09:00:00'),
  votingOpen: new Date('2026-09-01T00:00:00'),
  votingClose: new Date('2026-10-15T23:59:59'), // Day before summit starts
  
  // Summit Registration (National Obesity Conference)
  registrationOpenSummit: new Date('2025-12-01T00:00:00'),
  registrationCloseSummit: new Date('2026-10-15T23:59:59'), // Day before summit
  summit2025: new Date('2026-10-16T09:00:00'),
  summitEnd: new Date('2026-10-18T17:00:00'),
  
  // Awards Registration
  registrationOpenAwards: new Date('2025-12-01T00:00:00'),
  registrationCloseAwards: new Date('2026-11-13T23:59:59'), // Day before awards
  awards2025: new Date('2026-11-14T15:00:00'),
} as const;

/**
 * Event configuration with all event details
 * These will be used to generate event cards and countdowns
 */
export const EVENTS_CONFIG: Event[] = [
  {
    id: 'summit-2026',
    name: 'National Obesity Conference 2026',
    type: 'summit',
    description: 'Join industry leaders for insights on healthcare management and innovation at the National Obesity Conference.',
    date: '2026-10-16 to 2026-10-18',
    startDate: EVENT_DATES.summit2025,
    location: 'Venue to be announced',
    time: '09:00 - 17:00',
    image: '/images/summit/27.png',
    registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-summit-1',
  },
  {
    id: 'awards-2026',
    name: 'African Health Excellence Awards 2026',
    type: 'awards',
    description: '"Night of the Health Stars" - Celebrating and honoring Africa\'s healthcare heroes at a night of excellence, elegance, and recognition.',
    date: '2026-11-14',
    startDate: EVENT_DATES.awards2025,
    location: 'The Capital Zimbali Resort',
    time: '15:00 - 22:00',
    image: '/images/2026/Posters/awards-poster.jpg',
    registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-awards-1',
  },
  {
    id: 'voting-2026',
    name: 'Public Voting Period',
    type: 'voting',
    description: 'Vote for your favorite finalists across all categories. Multiple voting methods available.',
    date: 'September 1 - October 15, 2026',
    startDate: EVENT_DATES.votingOpen,
    endDate: EVENT_DATES.votingClose,
  },
  {
    id: 'nominations-2026',
    name: 'Nominations Period',
    type: 'nominations',
    description: 'Nominations open for all award categories. Submit your nominations online.',
    date: 'December 1, 2025 - April 30, 2026',
    startDate: EVENT_DATES.nominationsOpen,
    endDate: EVENT_DATES.nominationsClose,
  },
  {
    id: 'finalists-2026',
    name: 'Finalists Announcement',
    type: 'announcement',
    description: 'Official announcement of finalists across all award categories.',
    date: '2026-08-29',
    startDate: EVENT_DATES.finalistsAnnouncement,
  },
] as const;

/**
 * Get human-readable event status text
 */
export const EVENT_STATUS_TEXT = {
  upcoming: 'Upcoming',
  ongoing: 'Happening Now',
  past: 'Past Event',
  closed: 'Closed',
} as const;

/**
 * Event status colors for UI
 */
export const EVENT_STATUS_COLORS = {
  upcoming: 'bg-blue-100 text-blue-800',
  ongoing: 'bg-green-100 text-green-800',
  past: 'bg-gray-100 text-gray-800',
  closed: 'bg-red-100 text-red-800',
} as const;
