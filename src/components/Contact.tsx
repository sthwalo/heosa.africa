import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumbers = [
    { number: '+27824355370', label: 'Main Office' },
    { number: '+27799501565', label: 'Support' }
  ];

  const whatsapp = '+27824355370';
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/**
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
          */}
        </div>
      </div>
    </div>
  );
};

export default Contact;