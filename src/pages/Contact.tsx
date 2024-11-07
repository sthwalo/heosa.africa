import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumbers = [
    { number: '+27 12 345 6789', label: 'Main Office' },
    { number: '+27 98 765 4321', label: 'Support' }
  ];

  const address = {
    street: '123 Healthcare Avenue',
    city: 'Pretoria',
    province: 'Gauteng',
    country: 'South Africa',
    postal: '0001'
  };

  const whatsapp = '+27 71 234 5678';

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team for any inquiries or support</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Numbers */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-[#962326] rounded-full mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-6">Call Us</h2>
            <div className="space-y-4">
              {phoneNumbers.map((phone, index) => (
                <div key={index} className="text-center">
                  <p className="text-gray-600 mb-1">{phone.label}</p>
                  <a
                    href={`tel:${phone.number.replace(/\s/g, '')}`}
                    className="inline-block px-6 py-2 bg-[#F2C849] text-[#2B2A29] rounded-full hover:bg-[#A7864B] transition-colors"
                  >
                    {phone.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-[#962326] rounded-full mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-6">WhatsApp</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-4">Message us on WhatsApp for quick responses</p>
              <a
                href={`https://wa.me/${whatsapp.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors"
              >
                Chat with us
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-[#962326] rounded-full mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-6">Visit Us</h2>
            <div className="text-center">
              <address className="not-italic text-gray-600 space-y-2">
                <p>{address.street}</p>
                <p>{address.city}</p>
                <p>{address.province}</p>
                <p>{address.country}</p>
                <p>{address.postal}</p>
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  Object.values(address).join(', ')
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#F2C849] text-[#2B2A29] rounded-full hover:bg-[#A7864B] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Send us a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#962326] focus:border-[#962326]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#962326] focus:border-[#962326]"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#962326] focus:border-[#962326]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;