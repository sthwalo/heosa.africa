/**
 * Custom hook for countdown timer with automatic updates
 * Optimized to prevent unnecessary re-renders
 */

import { useState, useEffect } from 'react';
import { EventCountdown } from '../types/event.types';

/**
 * Creates a countdown timer that updates every second
 * Returns time remaining and expiration status
 * 
 * @param targetDate - Target date to countdown to
 * @returns Countdown object with days, hours, minutes, seconds, and isExpired flag
 * 
 * @example
 * const countdown = useCountdown(new Date('2025-11-15'));
 * console.log(`${countdown.days} days remaining`);
 */
export function useCountdown(targetDate: Date | string): EventCountdown {
  const [countdown, setCountdown] = useState<EventCountdown>(() => {
    return calculateTimeLeft(targetDate);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft(targetDate);
      setCountdown(timeLeft);

      // Stop updating once expired to save resources
      if (timeLeft.isExpired) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return countdown;
}

/**
 * Calculate time remaining until target date
 */
function calculateTimeLeft(targetDate: Date | string): EventCountdown {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isExpired: false,
  };
}

/**
 * Hook that returns whether a date has passed
 * Useful for simple checks without full countdown
 * 
 * @example
 * const hasExpired = useDatePassed(votingDeadline);
 */
export function useDatePassed(date: Date | string): boolean {
  const [isPassed, setIsPassed] = useState(() => {
    return new Date() > new Date(date);
  });

  useEffect(() => {
    // Check if already passed
    if (isPassed) {
      return;
    }

    // Set up timer to check when date passes
    const checkDate = () => {
      if (new Date() > new Date(date)) {
        setIsPassed(true);
      }
    };

    // Check every minute
    const interval = setInterval(checkDate, 60000);
    
    return () => clearInterval(interval);
  }, [date, isPassed]);

  return isPassed;
}
