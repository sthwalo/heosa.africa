/**
 * EventsSlider Component
 * Displays upcoming events with auto-updating status and countdowns
 */

import { useState, useEffect } from 'react';
import { Event } from '../types/event.types';
import { getAllEvents, getUpcomingEvents } from '../services/api/events.service';
import { EventCard } from './features/events';

export default function EventsSlider() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      // Get upcoming events (or all events with registration links)
      const upcomingEvents = await getUpcomingEvents();
      
      // If no upcoming events, show all events with registration
      if (upcomingEvents.length === 0) {
        const allEvents = await getAllEvents();
        const eventsWithRegistration = allEvents.filter(e => e.registerLink);
        setEvents(eventsWithRegistration);
      } else {
        setEvents(upcomingEvents.filter(e => e.registerLink));
      }
    } catch (error) {
      console.error('Failed to load events:', error);
      // Fallback to all events on error
      const allEvents = await getAllEvents();
      setEvents(allEvents.filter(e => e.registerLink));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return null;
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2A29]">Upcoming Events</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join us at our upcoming healthcare events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event}
              showCountdown={true}
              showStatus={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}