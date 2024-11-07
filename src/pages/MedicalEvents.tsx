import React from 'react';
import { Calendar, Users, BookOpen, Award } from 'lucide-react';

const MedicalEvents = () => {
  const events = [
    {
      title: 'Healthcare Leadership Summit',
      date: '2024-07-15',
      location: 'Johannesburg, South Africa',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
      description: 'Join industry leaders for insights on healthcare management and innovation.'
    },
    {
      title: 'Medical Technology Expo',
      date: '2024-08-20',
      location: 'Cape Town, South Africa',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80',
      description: 'Explore the latest advances in medical technology and digital health solutions.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Medical Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for world-class medical education events and enhance your healthcare expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2B2A29] mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Users className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button className="inline-flex items-center px-6 py-3 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#2B2A29] mb-8">Why Attend Our Events?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-[#962326] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">Learn from industry leaders and healthcare experts</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#962326] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with peers and industry professionals</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-[#962326] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">CPD Points</h3>
              <p className="text-gray-600">Earn continuing professional development points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalEvents;