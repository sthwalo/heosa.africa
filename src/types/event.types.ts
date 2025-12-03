/**
 * Event Type Definitions
 */

export type EventStatus = 'upcoming' | 'ongoing' | 'past' | 'closed';

export type EventType = 'summit' | 'awards' | 'voting' | 'nominations' | 'general';

export interface Event {
  id: string | number;
  name: string;
  type: EventType;
  description: string;
  date: string; // ISO date string or date range
  startDate: Date;
  endDate?: Date; // Optional for single-day events
  location?: string;
  time?: string;
  image?: string;
  registerLink?: string;
  status?: EventStatus; // Will be computed dynamically
}

export interface EventCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export interface EventFilters {
  type?: EventType;
  status?: EventStatus;
  year?: number;
}
