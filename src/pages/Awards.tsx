import { Link } from 'react-router-dom';
import { Award, ArrowRight, Clock } from 'lucide-react';
import { EVENT_CONFIG } from '../constants/app.constants';
import { useNominationsStatus } from '../hooks/useNominationsStatus';
import { useRegistrationStatus } from '../hooks/useRegistrationStatus';

const Awards = () => {
  const nominations = useNominationsStatus();
  const { awards: awardsRegistration } = useRegistrationStatus();

  const categories = [
    {
      title: "Voted Categories",
      description: "Categories open for public voting",
      items: [
        "HCP Author of the Year",
        "HCP Charity Driver of the Year",
        "HCP Mentor of the Year",
        "HCP Community Builder of the Year",
        "Multi-Talented HCP of the Year",
        "HCP Educator of the Year"
      ]
    },
    {
      title: "Honorary Categories",
      description: "Special recognition categories",
      items: [
        "Outstanding Healthcare Professional",
        "Healthcare Innovation",
        "Excellence in Healthcare Leadership",
        "Outstanding Healthcare Institution",
        "Community Health Impact",
        "Academic Impact in Health"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80"
            alt="Awards ceremony"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              African Health Excellence Awards
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Recognizing and celebrating outstanding achievements in African healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {nominations.isOpen ? (
                <Link
                  to="/awards/nominate"
                  className="inline-flex items-center px-6 py-3 bg-[#962326] rounded-md hover:bg-[#A7864B] transition-colors"
                >
                  Nominate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : nominations.status === 'not-open' ? (
                <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-md cursor-default">
                  <Clock className="mr-2 h-5 w-5" />
                  Opens {nominations.openDateFormatted}
                </div>
              ) : (
                <button
                  className="inline-flex items-center px-6 py-3 bg-gray-500 rounded-md cursor-not-allowed opacity-70"
                  disabled
                >
                  Nominations Closed
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              )}
              <Link
                to="/awards/categories"
                className="inline-flex items-center px-6 py-3 border-2 border-[#F2C849] rounded-md hover:bg-[#F2C849] hover:text-[#2B2A29] transition-colors"
              >
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Award Categories Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2B2A29] mb-4">Award Categories</h2>
          <p className="text-lg text-gray-600">
            Celebrating excellence across multiple healthcare disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <Award className="h-12 w-12 text-[#962326] mb-6" />
              <h3 className="text-2xl font-semibold text-[#2B2A29] mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-[#962326] rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/awards/categories"
            className="inline-flex items-center px-6 py-3 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2B2A29] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">African Health Excellence Awards 2026</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {nominations.isOpen 
                ? `Nominations are open until ${nominations.closeDateFormatted}. Join us at the awards ceremony on ${EVENT_CONFIG.awardsCeremonyDate} - "Night of the Health Stars".`
                : `Nominations are now closed. Join us at the awards ceremony on ${EVENT_CONFIG.awardsCeremonyDate} - "Night of the Health Stars".`
              }
            </p>
            {awardsRegistration.isOpen ? (
              <Link
                to="/medical-events"
                className="inline-flex items-center px-8 py-4 bg-[#A7864B] rounded-md hover:bg-[#962326] transition-colors"
              >
                Register for Awards Ceremony
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            ) : awardsRegistration.status === 'not-open' ? (
              <div className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-md cursor-default">
                <Clock className="mr-2 h-5 w-5" />
                Registration Opens {awardsRegistration.openDateFormatted}
              </div>
            ) : awardsRegistration.status === 'event-passed' ? (
              <div className="inline-flex items-center px-8 py-4 bg-gray-600 rounded-md cursor-default opacity-70">
                Event Has Passed
              </div>
            ) : (
              <div className="inline-flex items-center px-8 py-4 bg-gray-600 rounded-md cursor-default opacity-70">
                Registration Closed
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;