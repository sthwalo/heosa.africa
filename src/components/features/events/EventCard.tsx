/**
 * EventCard Component
 * Reusable card for displaying event information with auto-updating status
 */

import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { Event } from '../../../types/event.types';
import { EventStatusBadge } from './EventStatusBadge';
import { EventCountdownDisplay } from './EventCountdownDisplay';

interface EventCardProps {
  event: Event;
  showCountdown?: boolean;
  showStatus?: boolean;
  className?: string;
}

/**
 * Event card with automatic status updates and countdown
 */
export function EventCard({ 
  event, 
  showCountdown = true,
  showStatus = true,
  className = '' 
}: EventCardProps) {
  const hasRegistration = !!event.registerLink;
  
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full ${className}`}>
      {/* Event Image */}
      {event.image && (
        <div className="relative h-[300px] overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
          {showStatus && (
            <div className="absolute top-4 right-4">
              <EventStatusBadge 
                startDate={event.startDate} 
                endDate={event.endDate} 
              />
            </div>
          )}
        </div>
      )}

      {/* Event Details */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#2B2A29] mb-3">
          {event.name}
        </h3>

        {/* Countdown */}
        {showCountdown && (
          <div className="mb-4">
            <EventCountdownDisplay 
              targetDate={event.startDate} 
              showLabel={false}
            />
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 mb-4 flex-1">
          {event.description}
        </p>

        {/* Location and Time */}
        <div className="space-y-2 mb-4">
          {event.location && (
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#962326]" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}
          {event.time && (
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4 flex-shrink-0 text-[#962326]" />
              <span className="text-sm">{event.time}</span>
            </div>
          )}
        </div>

        {/* Registration Button */}
        {hasRegistration && (
          <div className="mt-auto">
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors font-medium"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
