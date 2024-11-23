import { Link } from 'react-router-dom';
import EventCountdown from './EventCountdown';
import { ArrowRight } from 'lucide-react';

const EventsSlider = () => {
  const events = [
    {
      id: 3,
      name: "African Health Excellence Organisation Awards and Summit",
      date: "2024-11-28",
      image: "https://heosa.africa/wp-content/uploads/2024/09/10.png",
      description: "Join us for the African Health Excellence Organisation Awards and Summit, celebrating excellence in healthcare.",
      location: "Johannesburg, South Africa",
      time: "09:00 - 17:00"
    }, 
    {
      id: 1,
      name: "African Health Excellence Awards 2024",
      date: "2024-06-15",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
      description: "Join us for the prestigious African Health Excellence Awards ceremony celebrating outstanding achievements in healthcare.",
      location: "Johannesburg, South Africa",
      time: "18:00 - 22:00"
    },
    {
      id: 2,
      name: "Healthcare Innovation Summit",
      date: "2024-07-20",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      description: "Explore the latest innovations and technologies shaping the future of healthcare in Africa.",
      location: "Cape Town, South Africa",
      time: "09:00 - 17:00"
    },
    
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2B2A29] mb-8 text-center">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="relative group">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <EventCountdown targetDate={event.date} eventName={event.name} />
                </div>
              </div>
              
              <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[#2B2A29] mb-2">{event.name}</h3>
                <div className="mb-4 text-gray-600">
                  <p className="mb-2">{event.location}</p>
                  <p>{event.time}</p>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex gap-4">
                  <Link
                    to="/medical-events/register"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to={`/medical-events#${event.id}`}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-[#962326] text-[#962326] rounded-md hover:bg-[#962326] hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
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