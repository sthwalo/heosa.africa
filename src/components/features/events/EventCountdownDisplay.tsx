/**
 * EventCountdownDisplay Component
 * Auto-updating countdown timer with proper cleanup
 */

import { Calendar } from 'lucide-react';
import { useCountdown } from '../../../hooks/useCountdown';

interface EventCountdownDisplayProps {
  targetDate: Date | string;
  showLabel?: boolean;
  compact?: boolean;
  className?: string;
}

/**
 * Countdown timer that updates every second
 * Automatically stops updating when expired
 */
export function EventCountdownDisplay({ 
  targetDate, 
  showLabel = true,
  compact = false,
  className = '' 
}: EventCountdownDisplayProps) {
  const countdown = useCountdown(targetDate);

  if (countdown.isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
          <Calendar className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-600">Event Started</span>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-2 text-sm ${className}`}>
        <Calendar className="h-4 w-4 text-[#962326]" />
        <span className="font-semibold text-[#2B2A29]">
          {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </span>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {showLabel && (
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="h-5 w-5 text-[#962326]" />
          <h3 className="text-sm font-semibold text-[#2B2A29] uppercase tracking-wide">
            Time Remaining
          </h3>
        </div>
      )}
      <div className="flex gap-3 justify-center">
        {[
          { label: 'Days', value: countdown.days },
          { label: 'Hours', value: countdown.hours },
          { label: 'Minutes', value: countdown.minutes },
          { label: 'Seconds', value: countdown.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="bg-[#962326] text-white rounded-lg p-3 min-w-[60px] shadow-md">
              <span className="text-2xl font-bold">{value.toString().padStart(2, '0')}</span>
            </div>
            <p className="text-xs mt-1 text-gray-600 font-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
