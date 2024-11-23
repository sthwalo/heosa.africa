import { Users } from 'lucide-react';

const MedicalEvents = () => {
  const events = [
    {
      title: 'African Health Excellence Summit',
      date: '2024-11-29',
      location: 'Johannesburg, South Africa',
      image: 'https://heosa.africa/wp-content/uploads/2024/10/SUMMIT-POSTER-scaled.jpg',
      description: 'Join industry leaders for insights on healthcare management and innovation.',
      registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-summit'
    },
    {
      title: 'African Health Excellence Awards',
      date: '2024-11-29',
      location: 'Johannesburg, South Africa',
      image: 'https://heosa.africa/wp-content/uploads/2024/10/Awards-Poster.jpg',
      description: 'Explore the latest advances in medical technology and digital health solutions.',
      registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-awards'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Medical Events</h1>
          <p className="text-lg text-gray-600">
            Join us at our upcoming healthcare events and conferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#962326] mb-4">{event.title}</h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Users className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
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