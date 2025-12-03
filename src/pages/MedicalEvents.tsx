import { Users, ArrowRight, Clock } from 'lucide-react';
import { useRegistrationStatus } from '../hooks/useRegistrationStatus';

const MedicalEvents = () => {
  const { summit, awards } = useRegistrationStatus();
  const events = [
    {
      title: 'National Obesity Conference',
      date: '2026-10-16 to 2026-10-18',
      location: 'Venue to be announced',
      price: "R2500",
      earlyBird: "R1800",
      generalReg: "R2100", 
      summitOnlyPrice: "R2500",
      summitOnlyEarlyBird: "R1800",
      summitOnlyGeneralReg: "R2100",
      image: '/images/summit/27.png',
      description: 'Join industry leaders for insights on healthcare management and innovation at the National Obesity Conference.',
      registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-summit-1',
      registrationStatus: summit
    },
    {
      title: 'African Health Excellence Awards',
      date: '2026-11-14',
      location: 'The Capital Zimbali Resort',
      price: "R2000",
      earlyBird: "R1500",
      generalReg: "R1800",
      tablePrice: "R18000",
      tableEarlyBird: "R13000",
      tableGeneralReg: "R15000",
      image: '/images/2026/Posters/awards-poster.jpg',
      description: '"Night of the Health Stars" - Celebrating and honoring Africa\'s healthcare heroes at a night of excellence, elegance, and recognition.',
      registerLink: 'https://www.medical-events.org/event-details-registration/african-health-excellence-awards-1',
      registrationStatus: awards
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/2.png"
            alt="Medical Events background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Medical Events
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us for impactful medical events and professional development opportunities
            </p>
          </div>
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
                
                {/* Pricing Information */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  {event.title === 'African Health Excellence Summit' ? (
                    // Summit Pricing
                    <>
                      <h4 className="font-bold text-[#962326] mb-3">Summit Only Tickets:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm mb-4">
                        <div className="text-center p-2 bg-[#962326] text-white rounded">
                          <div className="font-semibold">EARLY BIRD</div>
                          <div className="text-xs mb-1">(Until Oct 31)</div>
                          <div>R1800</div>
                        </div>
                        <div className="text-center p-2 bg-[#A7864B] text-white rounded">
                          <div className="font-semibold">GENERAL REG.</div>
                          <div className="text-xs mb-1">(Nov 1-10)</div>
                          <div>R2100</div>
                        </div>
                        <div className="text-center p-2 bg-gray-600 text-white rounded">
                          <div className="font-semibold">LATE REG.</div>
                          <div className="text-xs mb-1">(Nov 11-15)</div>
                          <div>R2500</div>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-[#962326] mb-3">All Access (Summit & Awards):</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                        <div className="text-center p-2 bg-[#962326] text-white rounded">
                          <div className="font-semibold">EARLY BIRD</div>
                          <div className="text-xs mb-1">(Until Oct 31)</div>
                          <div>R2500</div>
                        </div>
                        <div className="text-center p-2 bg-[#A7864B] text-white rounded">
                          <div className="font-semibold">GENERAL REG.</div>
                          <div className="text-xs mb-1">(Nov 1-10)</div>
                          <div>R2800</div>
                        </div>
                        <div className="text-center p-2 bg-gray-600 text-white rounded">
                          <div className="font-semibold">LATE REG.</div>
                          <div className="text-xs mb-1">(Nov 11-15)</div>
                          <div>R3000</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Awards Pricing  
                    <>
                      <h4 className="font-bold text-[#962326] mb-3">Individual Tickets:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm mb-4">
                        <div className="text-center p-2 bg-[#962326] text-white rounded">
                          <div className="font-semibold">EARLY BIRD</div>
                          <div className="text-xs mb-1">(Until Oct 31)</div>
                          <div>R1500</div>
                        </div>
                        <div className="text-center p-2 bg-[#A7864B] text-white rounded">
                          <div className="font-semibold">GENERAL REG.</div>
                          <div className="text-xs mb-1">(Nov 1-10)</div>
                          <div>R1800</div>
                        </div>
                        <div className="text-center p-2 bg-gray-600 text-white rounded">
                          <div className="font-semibold">LATE REG.</div>
                          <div className="text-xs mb-1">(Nov 11-15)</div>
                          <div>R2000</div>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-[#962326] mb-3">Table for 10:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                        <div className="text-center p-2 bg-[#962326] text-white rounded">
                          <div className="font-semibold">EARLY BIRD</div>
                          <div className="text-xs mb-1">(Until Oct 31)</div>
                          <div>R13,000</div>
                        </div>
                        <div className="text-center p-2 bg-[#A7864B] text-white rounded">
                          <div className="font-semibold">GENERAL REG.</div>
                          <div className="text-xs mb-1">(Nov 1-10)</div>
                          <div>R15,000</div>
                        </div>
                        <div className="text-center p-2 bg-gray-600 text-white rounded">
                          <div className="font-semibold">LATE REG.</div>
                          <div className="text-xs mb-1">(Nov 11-15)</div>
                          <div>R18,000</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {event.registrationStatus.isOpen ? (
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-base font-semibold leading-6 text-white transition duration-150 ease-in-out bg-[#962326] border border-transparent rounded-md hover:bg-[#8B1C1C] focus:outline-none focus:border-[#962326] focus:shadow-outline-indigo active:bg-[#8B1C1C]"
                  >
                    Register Now
                  </a>
                ) : event.registrationStatus.status === 'not-open' ? (
                  <div className="inline-flex items-center px-6 py-2 text-base font-semibold text-white bg-blue-600 rounded-md cursor-default">
                    <Clock className="mr-2 h-5 w-5" />
                    Opens {event.registrationStatus.openDateFormatted}
                  </div>
                ) : event.registrationStatus.status === 'event-passed' ? (
                  <div className="inline-block px-6 py-2 text-base font-semibold text-white bg-gray-500 rounded-md cursor-default opacity-70">
                    Event Has Passed
                  </div>
                ) : (
                  <div className="inline-block px-6 py-2 text-base font-semibold text-white bg-gray-500 rounded-md cursor-default opacity-70">
                    Registration Closed
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Accommodation Section */}
        <div className="mt-16 bg-gradient-to-r from-[#2B2A29] to-[#962326] text-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">🏨 Discounted Accommodation Available!</h2>
            <p className="text-xl text-gray-100">
              Make your stay memorable with special rates at The Capital Hotel (Zimbali)
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#F2C849]">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[#F2C849] font-semibold">Protel Rate Code:</span>
                  <span className="bg-white/20 px-3 py-1 rounded font-mono">HEASO</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#F2C849] font-semibold">Website Promo Code:</span>
                  <span className="bg-white/20 px-3 py-1 rounded font-mono">HEASO</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#F2C849] font-semibold">Source Profile:</span>
                  <span>Banqueting Event</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 text-[#F2C849]">Book Your Stay</h3>
              <p className="text-gray-100 mb-6">
                Use promo code <strong>HEOSA</strong> for exclusive delegate rates
              </p>
              <a
                href="https://booking.thecapital.co.za/convert/site/The%20Capital%20Zimbali/index.html?av=promo&promotionCode=HEOSA&fw_submitted=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#F2C849] text-[#2B2A29] rounded-md hover:bg-[#A7864B] hover:text-white transition-colors font-semibold"
              >
                Book Accommodation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Banking Details Section */}
        <div className="mt-8 bg-white rounded-xl p-8 shadow-lg border border-[#F2C849]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2B2A29] mb-4">Banking Details</h2>
            <p className="text-lg text-gray-600">
              Health Excellence Organisation NPC
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2B2A29] text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#F2C849]">Payment Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-[#F2C849] font-semibold">Bank Name:</span>
                  <span>FNB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-[#F2C849] font-semibold">Account No.:</span>
                  <span className="font-mono">62823742326</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-[#F2C849] font-semibold">Account Type:</span>
                  <span>Gold Business</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#F2C849] font-semibold">Reference:</span>
                  <span>Name & Surname</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F2C849]/10 rounded-lg p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 text-[#962326]">Payment Instructions</h3>
              <div className="space-y-3 text-gray-700">
                <p>1. Use the banking details on the left to make your payment</p>
                <p>2. Use your <strong>Name & Surname</strong> as the reference</p>
                <p>3. Send proof of payment to confirm registration</p>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm font-semibold text-[#962326]">FOR MORE INFO CONTACT US</p>
                  <p className="text-sm">📞 079 950 1565</p>
                  <p className="text-sm">✉️ info@heosa.africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalEvents;