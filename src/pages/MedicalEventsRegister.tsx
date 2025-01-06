import { Calendar, MapPin, CreditCard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalEventsRegister = () => {
  const events = [
    {
      id: 1,
      name: "African Health Excellence Summit",
      date: "November 21, 2025",
      location: "TBC",
      price: "R2,500",
      earlyBird: "R1,999",
      registerLink: "https://www.medical-events.org/event-details-registration/african-health-excellence-summit",
      image: '/images/summit/27.png'
    },
    {
      id: 2,
      name: "African Health Excellence Awards & Gala Dinner",
      date: "November 22, 2025",
      location: "TBC",
      price: "R1,000",
      earlyBird: "R899",
      registerLink: "https://www.medical-events.org/event-details-registration/african-health-excellence-awards",
      image: '/images/events/1.png'
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/register-hero.jpg"
            alt="Event Registration background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Register for Medical Events
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us for professional development and networking opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/medical-events"
                className="inline-flex items-center px-6 py-3 border-2 border-[#F2C849] rounded-md hover:bg-[#F2C849] hover:text-[#2B2A29] transition-colors"
              >
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="relative h-[600px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-[#962326] mb-4">{event.name}</h2>
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CreditCard className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-semibold">Regular Price: {event.price}</p>
                      <p className="text-[#962326]">Early Bird: {event.earlyBird}</p>
                    </div>
                  </div>
                </div>
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-3 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalEventsRegister;