/**
 * Events Service
 * Handles event data retrieval and filtering with automatic status updates
 * 
 * ⚠️ FALLBACK DATA - Currently using constants from events.constants.ts
 * TODO: Replace with API calls when backend is implemented
 */

import { Event, EventStatus, EventFilters } from '../../types/event.types';
import { EVENTS_CONFIG } from '../../constants/events.constants';

/**
 * Get all events with computed status
 */
export async function getAllEvents(): Promise<Event[]> {
  // TODO: Replace with API call
  // const response = await fetch(`${API_BASE_URL}/events`);
  // return response.json();
  
  return EVENTS_CONFIG.map(event => ({
    ...event,
    status: getEventStatus(event.startDate, event.endDate),
  }));
}

/**
 * Get events filtered by criteria
 */
export async function getFilteredEvents(filters: EventFilters = {}): Promise<Event[]> {
  const events = await getAllEvents();
  
  return events.filter(event => {
    if (filters.type && event.type !== filters.type) {
      return false;
    }
    
    if (filters.status && event.status !== filters.status) {
      return false;
    }
    
    if (filters.year) {
      const eventYear = event.startDate.getFullYear();
      if (eventYear !== filters.year) {
        return false;
      }
    }
    
    return true;
  });
}

/**
 * Get upcoming events (status: upcoming)
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  return getFilteredEvents({ status: 'upcoming' });
}

/**
 * Get currently ongoing events (status: ongoing)
 */
export async function getOngoingEvents(): Promise<Event[]> {
  return getFilteredEvents({ status: 'ongoing' });
}

/**
 * Get past events (status: past)
 */
export async function getPastEvents(): Promise<Event[]> {
  return getFilteredEvents({ status: 'past' });
}

/**
 * Get event by ID
 */
export async function getEventById(id: string | number): Promise<Event | null> {
  const events = await getAllEvents();
  return events.find(e => String(e.id) === String(id)) || null;
}

/**
 * Get events by type
 */
export async function getEventsByType(type: Event['type']): Promise<Event[]> {
  return getFilteredEvents({ type });
}

/**
 * Check if voting is currently open
 */
export async function isVotingOpen(): Promise<boolean> {
  const votingEvents = await getEventsByType('voting');
  return votingEvents.some(event => event.status === 'ongoing');
}

/**
 * Check if nominations are currently open
 */
export async function isNominationsOpen(): Promise<boolean> {
  const nominationEvents = await getEventsByType('nominations');
  return nominationEvents.some(event => event.status === 'ongoing');
}

/**
 * Helper: Calculate event status based on dates
 */
function getEventStatus(startDate: Date, endDate?: Date): EventStatus {
  const now = new Date();
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(start);

  // Add 24 hours for single-day events
  if (!endDate) {
    end.setHours(23, 59, 59, 999);
  }

  if (now < start) {
    return 'upcoming';
  }

  if (now >= start && now <= end) {
    return 'ongoing';
  }

  return 'past';
}
