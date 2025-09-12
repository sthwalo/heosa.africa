//import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumbers = [
    { number: '+27824355370', label: 'Main Office' },
    { number: '+27799501565', label: 'Support' }
  ];

  const whatsapp = '+27824355370';
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team for any inquiries or support</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form - existing code */}

            {/* Contact Information */}
            <div className="space-y-8">
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

              {/* Accommodation Booking Section */}
              <div className="bg-gradient-to-br from-[#F2C849]/20 to-[#F2C849]/10 rounded-2xl p-8 shadow-lg border border-[#F2C849]/30">
                <h3 className="text-2xl font-bold text-[#2B2A29] mb-6 flex items-center">
                  <span className="text-3xl mr-3">🏨</span>
                  Accommodation Booking
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-lg text-[#2B2A29] mb-2">The Capital Zimbali</h4>
                    <p className="text-gray-600 mb-3">
                      Official venue for the African Health Excellence Awards 2025
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-[#F2C849]">💎</span>
                        <span className="font-semibold">Special delegate discount available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#962326]">📅</span>
                        <span>Event Date: November 15, 2025</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#A7864B]">🎯</span>
                        <span>Book early for best rates</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-[#2B2A29] mb-3">For accommodation bookings:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-[#962326]">📞</span>
                        <span>079 950 1565</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[#962326]">✉️</span>
                        <span>info@heosa.africa</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        Mention "African Health Excellence Awards 2025" to receive your delegate discount.
                      </p>
                    </div>
                  </div>
                </div>
              </div>              {/* Address - Uncomment and fill in details if needed */}
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
      </div>
    </div>
  );
};

export default Contact;