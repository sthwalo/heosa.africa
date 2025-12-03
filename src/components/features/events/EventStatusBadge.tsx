/**
 * EventStatusBadge Component
 * Displays the current status of an event with automatic updates
 */

import { EVENT_STATUS_TEXT, EVENT_STATUS_COLORS } from '../../../constants/events.constants';
import { useEventStatus } from '../../../hooks/useEventStatus';

interface EventStatusBadgeProps {
  startDate: Date;
  endDate?: Date;
  showText?: boolean;
  className?: string;
}

/**
 * Auto-updating status badge for events
 * Shows "Upcoming", "Happening Now", or "Past Event"
 */
export function EventStatusBadge({ 
  startDate, 
  endDate, 
  showText = true,
  className = '' 
}: EventStatusBadgeProps) {
  const status = useEventStatus({ startDate, endDate });
  
  const colorClass = EVENT_STATUS_COLORS[status];
  const text = EVENT_STATUS_TEXT[status];

  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClass} ${className}`}
      aria-label={`Event status: ${text}`}
    >
      <span className="relative flex h-2 w-2 mr-2">
        {status === 'ongoing' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${
          status === 'ongoing' ? 'bg-green-500' : 
          status === 'upcoming' ? 'bg-blue-500' : 
          'bg-gray-500'
        }`}></span>
      </span>
      {showText && text}
    </span>
  );
}
