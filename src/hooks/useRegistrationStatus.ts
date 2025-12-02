/**
 * Hook: useRegistrationStatus
 * 
 * Provides real-time registration status for summit and awards events.
 * Automatically updates every minute to ensure accurate status.
 * 
 * @returns Registration status for both summit and awards events
 * 
 * @example
 * ```tsx
 * const { summit, awards } = useRegistrationStatus();
 * 
 * return (
 *   <button disabled={!summit.isOpen}>
 *     {summit.isOpen ? 'Register for Summit' : 'Summit Registration Closed'}
 *   </button>
 * );
 * ```
 */

import { useState, useEffect } from 'react';
import { EVENT_DATES } from '../constants/events.constants';
import { formatDateLong } from '../utils/date.utils';

export interface RegistrationStatus {
  isOpen: boolean;
  status: 'not-open' | 'open' | 'closed' | 'event-passed';
  openDate: Date;
  closeDate: Date;
  eventDate: Date;
  openDateFormatted: string;
  closeDateFormatted: string;
  eventDateFormatted: string;
  daysUntilOpen: number;
  daysUntilClose: number;
  daysUntilEvent: number;
}

export interface RegistrationStatusResult {
  summit: RegistrationStatus;
  awards: RegistrationStatus;
}

const calculateStatus = (
  openDate: Date,
  closeDate: Date,
  eventDate: Date
): RegistrationStatus => {
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  
  const daysUntilOpen = Math.ceil((openDate.getTime() - now.getTime()) / msPerDay);
  const daysUntilClose = Math.ceil((closeDate.getTime() - now.getTime()) / msPerDay);
  const daysUntilEvent = Math.ceil((eventDate.getTime() - now.getTime()) / msPerDay);
  
  let status: RegistrationStatus['status'];
  let isOpen: boolean;
  
  if (now >= eventDate) {
    status = 'event-passed';
    isOpen = false;
  } else if (now < openDate) {
    status = 'not-open';
    isOpen = false;
  } else if (now >= openDate && now <= closeDate) {
    status = 'open';
    isOpen = true;
  } else {
    status = 'closed';
    isOpen = false;
  }
  
  return {
    isOpen,
    status,
    openDate,
    closeDate,
    eventDate,
    openDateFormatted: formatDateLong(openDate),
    closeDateFormatted: formatDateLong(closeDate),
    eventDateFormatted: formatDateLong(eventDate),
    daysUntilOpen,
    daysUntilClose,
    daysUntilEvent,
  };
};

export const useRegistrationStatus = (): RegistrationStatusResult => {
  const [summit, setSummit] = useState<RegistrationStatus>(() =>
    calculateStatus(
      EVENT_DATES.registrationOpenSummit,
      EVENT_DATES.registrationCloseSummit,
      EVENT_DATES.summit2025
    )
  );
  
  const [awards, setAwards] = useState<RegistrationStatus>(() =>
    calculateStatus(
      EVENT_DATES.registrationOpenAwards,
      EVENT_DATES.registrationCloseAwards,
      EVENT_DATES.awards2025
    )
  );
  
  useEffect(() => {
    const updateStatus = () => {
      setSummit(
        calculateStatus(
          EVENT_DATES.registrationOpenSummit,
          EVENT_DATES.registrationCloseSummit,
          EVENT_DATES.summit2025
        )
      );
      setAwards(
        calculateStatus(
          EVENT_DATES.registrationOpenAwards,
          EVENT_DATES.registrationCloseAwards,
          EVENT_DATES.awards2025
        )
      );
    };
    
    // Update every minute
    const interval = setInterval(updateStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  return { summit, awards };
};
