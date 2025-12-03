/**
 * Custom hook for automatic event status detection
 * Updates in real-time as events transition between states
 */

import { useState, useEffect } from 'react';
import { EventStatus } from '../types/event.types';

interface UseEventStatusProps {
  startDate: Date;
  endDate?: Date;
}

/**
 * Determines the current status of an event based on its dates
 * Automatically updates when the status changes
 * 
 * @param startDate - Event start date
 * @param endDate - Event end date (optional, for multi-day events)
 * @returns Current event status
 * 
 * @example
 * const status = useEventStatus({ 
 *   startDate: new Date('2025-11-15'), 
 *   endDate: new Date('2025-11-16') 
 * });
 */
export function useEventStatus({ startDate, endDate }: UseEventStatusProps): EventStatus {
  const [status, setStatus] = useState<EventStatus>(() => {
    return getEventStatus(startDate, endDate);
  });

  useEffect(() => {
    // Check status immediately
    const checkStatus = () => {
      const newStatus = getEventStatus(startDate, endDate);
      setStatus(newStatus);
    };

    checkStatus();

    // Update every minute to catch status transitions
    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, [startDate, endDate]);

  return status;
}

/**
 * Helper function to determine event status
 */
function getEventStatus(startDate: Date, endDate?: Date): EventStatus {
  const now = new Date();
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : start;

  // Add 24 hours to end date for single-day events
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

/**
 * Check if voting is currently open
 */
export function useVotingStatus(openDate: Date, closeDate: Date): {
  isOpen: boolean;
  status: 'not-started' | 'open' | 'closed';
} {
  const status = useEventStatus({ startDate: openDate, endDate: closeDate });

  return {
    isOpen: status === 'ongoing',
    status: status === 'upcoming' ? 'not-started' : status === 'ongoing' ? 'open' : 'closed',
  };
}

/**
 * Check if nominations are currently open
 */
export function useNominationsStatus(openDate: Date, closeDate: Date): {
  isOpen: boolean;
  status: 'not-started' | 'open' | 'closed';
} {
  const status = useEventStatus({ startDate: openDate, endDate: closeDate });

  return {
    isOpen: status === 'ongoing',
    status: status === 'upcoming' ? 'not-started' : status === 'ongoing' ? 'open' : 'closed',
  };
}
