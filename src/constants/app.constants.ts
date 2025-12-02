/**
 * Application-wide Constants
 */

import { EVENT_DATES } from './events.constants';
import { formatDateLong } from '../utils/date.utils';

export const APP_CONFIG = {
  name: 'HEOSA',
  fullName: 'African Health Excellence Organisation',
  tagline: 'Advancing Healthcare Excellence & Operations',
  logo: '/logo.png',
  currentYear: 2025,
} as const;

export const SOCIAL_MEDIA = {
  facebook: '',
  twitter: '',
  linkedin: '',
  instagram: '',
  youtube: '',
} as const;

/**
 * Event configuration
 * Dates auto-format from EVENT_DATES
 */
export const EVENT_CONFIG = {
  currentYear: 2025,
  
  // Auto-formatted dates (dynamically generated)
  get awardsCeremonyDate(): string {
    return formatDateLong(EVENT_DATES.awards2025);
  },
  
  get votingDeadline(): string {
    return formatDateLong(EVENT_DATES.votingClose);
  },
};

/**
 * Brand colors (from Tailwind config)
 */
export const BRAND_COLORS = {
  primary: '#962326', // Burgundy
  secondary: '#F2C849', // Gold
  tertiary: '#A7864B', // Muted gold
  dark: '#2B2A29',
} as const;
