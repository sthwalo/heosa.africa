/**
 * Hook: useNominationsStatus
 * 
 * Provides real-time nominations status checking.
 * Automatically updates every minute to ensure accurate status.
 * 
 * @returns Nominations status with formatted dates and countdown info
 * 
 * @example
 * ```tsx
 * const { isOpen, status, openDateFormatted, closeDateFormatted } = useNominationsStatus();
 * 
 * return (
 *   <button disabled={!isOpen}>
 *     {isOpen ? 'Submit Nomination' : 'Nominations Closed'}
 *   </button>
 * );
 * ```
 */

import { useState, useEffect } from 'react';
import { EVENT_DATES } from '../constants/events.constants';
import { formatDateLong } from '../utils/date.utils';

export interface NominationsStatus {
  isOpen: boolean;
  status: 'not-open' | 'open' | 'closed';
  openDate: Date;
  closeDate: Date;
  openDateFormatted: string;
  closeDateFormatted: string;
  daysUntilOpen: number;
  daysUntilClose: number;
}

const calculateNominationsStatus = (): NominationsStatus => {
  const now = new Date();
  const openDate = EVENT_DATES.nominationsOpen;
  const closeDate = EVENT_DATES.nominationsClose;
  
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysUntilOpen = Math.ceil((openDate.getTime() - now.getTime()) / msPerDay);
  const daysUntilClose = Math.ceil((closeDate.getTime() - now.getTime()) / msPerDay);
  
  let status: NominationsStatus['status'];
  let isOpen: boolean;
  
  if (now < openDate) {
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
    openDateFormatted: formatDateLong(openDate),
    closeDateFormatted: formatDateLong(closeDate),
    daysUntilOpen,
    daysUntilClose,
  };
};

export const useNominationsStatus = (): NominationsStatus => {
  const [nominationsStatus, setNominationsStatus] = useState<NominationsStatus>(
    calculateNominationsStatus
  );
  
  useEffect(() => {
    const updateStatus = () => {
      setNominationsStatus(calculateNominationsStatus());
    };
    
    // Update every minute
    const interval = setInterval(updateStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  return nominationsStatus;
};
