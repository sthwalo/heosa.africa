//import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { OFFICE_MAP_URL } from '../constants';
import { buildPhoneUrl, buildWhatsAppUrl, buildMapsUrl } from '../utils';

const Contact = () => {
  const phoneNumbers = [
    { number: '+27824355370', label: 'Main Office' },
    { number: '+27799501565', label: 'Support' }
  ];

  const address = {
    street: 'Suite 1018, 6 Waxbill Street',
    city: 'Mbombela',
    province: 'Mpumalanga',
    country: 'South Africa',
    postal: '1200'
  };

  const whatsapp = '+27824355370';

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/2.png"
            alt="Contact Us background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or support
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                    href={buildPhoneUrl(phone.number)}
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
                href={buildWhatsAppUrl(whatsapp, 'Hello, I would like to get in touch')}
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
                href={buildMapsUrl(Object.values(address).join(', '))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#F2C849] text-[#2B2A29] rounded-full hover:bg-[#A7864B] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={OFFICE_MAP_URL}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HEOSA Office Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;