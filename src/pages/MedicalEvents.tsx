import { Users } from 'lucide-react';

const MedicalEvents = () => {
  const events = [
    {
      title: 'African Health Excellence Summit',
      date: '2025-11-21',
      location: 'TBC',
      price: "R2,500",
      earlyBird: "R1,999",
      image: '/images/summit/27.png',
      description: 'Join industry leaders for insights on healthcare management and innovation.',
      registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-summit'
    },
    {
      title: 'African Health Excellence Awards',
      date: '2025-11-22',
      location: 'TBC',
      price: "R1,000",
      earlyBird: "R899",
      image: '/images/events/1.png',
      description: 'Explore the latest advances in medical technology and digital health solutions.',
      registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-awards'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/File 12.png"
            alt="Partners background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Medical Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Join us at our upcoming healthcare events and conferences
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#962326] mb-4">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Users className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">
                    Price: {event.price}
                  </span>
                  <span className="text-gray-600">
                    Early Bird (before 30th September): {event.earlyBird}
                  </span>
                </div>
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-base font-semibold leading-6 text-white transition duration-150 ease-in-out bg-[#962326] border border-transparent rounded-md hover:bg-[#8B1C1C] focus:outline-none focus:border-[#962326] focus:shadow-outline-indigo active:bg-[#8B1C1C]"
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

export default MedicalEvents;