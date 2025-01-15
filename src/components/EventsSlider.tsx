import EventCountdown from './EventCountdown';
import { ArrowRight } from 'lucide-react';

const EventsSlider = () => {
  const events = [
    {
      id: 1,
      name: "African Health Excellence Organisation Summit 2025",
      date: "2025-11-21",
      image: "/images/summit/27.png",
      description: "Join us for the African Health Excellence Organisation Awards and Summit, celebrating excellence in healthcare.",
      location: "Durban, South Africa",
      time: "09:00 - 17:00",
      registerLink: "https://www.medical-events.org/event-details-registration/african-health-excellence-summit"
    }, 
    {
      id: 2,
      name: "African Health Excellence Awards 2025",
      date: "2025-11-22",
      image: "/images/events/1.png", 
      description: "Join us for the prestigious African Health Excellence Awards ceremony celebrating outstanding achievements in healthcare.",
      location: "Durban, South Africa",
      time: "18:00 - 22:00",
      registerLink: "https://www.medical-events.org/event-details-registration/african-health-excellence-awards"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2A29]">Upcoming Events</h2>
          <p className="mt-4 text-lg text-gray-600">Join us at our upcoming healthcare events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-[600px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#2B2A29] mb-2">{event.name}</h3>
                <EventCountdown targetDate={event.date} eventName={event.name} />
                <p className="text-gray-600 mt-4 flex-1">{event.description}</p>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p> 📍 {event.location}</p>
                  <p> 🕒 {event.time}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSlider;