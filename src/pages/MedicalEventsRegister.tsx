import React from 'react';
import { Calendar, Users, CreditCard, AlertCircle } from 'lucide-react';

const MedicalEventsRegister = () => {
  const events = [
    {
      id: 1,
      name: "Healthcare Leadership Summit",
      date: "July 15, 2024",
      location: "Johannesburg, South Africa",
      price: "R2,500",
      earlyBird: "R1,999"
    },
    {
      id: 2,
      name: "Medical Technology Expo",
      date: "August 20, 2024",
      location: "Cape Town, South Africa",
      price: "R1,800",
      earlyBird: "R1,499"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Event Registration</h1>
          <p className="text-lg text-gray-600">
            Register for our upcoming medical events and conferences
          </p>
        </div>

        {/* Event Selection */}
        <div className="max-w-3xl mx-auto">
          {/* Important Notice */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="h-6 w-6 text-[#962326]" />
              <h2 className="text-xl font-semibold text-[#2B2A29]">Important Information</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Early bird registration ends 30 days before the event</li>
              <li>CPD points will be awarded for attendance</li>
              <li>Registration includes access to all sessions and materials</li>
              <li>Lunch and refreshments are provided</li>
            </ul>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2B2A29] mb-8">Registration Form</h2>
            <form className="space-y-6">
              {/* Event Selection */}
              <div>
                <label htmlFor="event" className="block text-sm font-medium text-gray-700">
                  Select Event
                </label>
                <select
                  id="event"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                >
                  <option value="">Choose an event</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name} - {event.date}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-[#2B2A29]">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-[#2B2A29]">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                      Profession
                    </label>
                    <input
                      type="text"
                      id="profession"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="regNumber" className="block text-sm font-medium text-gray-700">
                      Professional Registration Number
                    </label>
                    <input
                      type="text"
                      id="regNumber"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="dietary" className="block text-sm font-medium text-gray-700">
                      Dietary Requirements
                    </label>
                    <input
                      type="text"
                      id="dietary"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-[#2B2A29]">Payment Information</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700">Registration Fee:</span>
                    <span className="font-semibold text-[#962326]">R2,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Early Bird Discount:</span>
                    <span className="font-semibold text-green-600">-R501</span>
                  </div>
                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">Total:</span>
                      <span className="font-semibold text-[#962326]">R1,999</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#962326] hover:bg-[#A7864B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#962326]"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalEventsRegister;