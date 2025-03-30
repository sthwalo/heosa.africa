import { ArrowRight, ExternalLink, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwardsNominate = () => {
  const handleRedirect = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf_WILeDUFGrZAsNour9NvMAwzUC4qZFVeUk5cJ9_H-Xbi9HA/viewform?usp=pp_url', '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/1.png"
            alt="Awards Nomination background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nominate a Healthcare Champion
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Recognize excellence and innovation in African healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/awards/categories"
                className="inline-flex items-center px-6 py-3 border-2 border-[#F2C849] rounded-md hover:bg-[#F2C849] hover:text-[#2B2A29] transition-colors"
              >
                View Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Nominate</h1>
          <p className="text-lg text-gray-600">
            Recognize excellence in African healthcare by nominating outstanding individuals and institutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Guidelines */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#2B2A29] mb-4">Nomination Guidelines</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Nomination Process:</strong> Individuals may nominate their healthcare professional or institution under a specific category. Nominees must be healthcare professionals working in Africa
              </li>
              <li>
                <strong>Acceptance of Nomination:</strong> The nominated healthcare professional will be contacted by the office and must either accept or decline the nomination.
              </li>
              <li>
                <strong>Submission of Proof:</strong> Upon acceptance of the nomination, the healthcare professional is required to submit proof of their work in the specific category they have been nominated for.
              </li>
              <li>
                <strong>Shortlisting and Selection:</strong> The African Health Excellence Organisation Adjudication Committee will review the nominations, shortlist candidates, and select finalists based on established professional standards and criteria.
              </li>
              <li>
                <strong>Voting Process:</strong> Individuals will have the opportunity to vote for their favorite healthcare professional or institution among those shortlisted as finalists.
              </li>
              <li>
                <strong>Winners Announcement:</strong> The healthcare professionals who receive the most votes will be declared winners in their respective categories.
              </li>
              <li className="font-semibold text-[#962326]">
                Nominations close on May 30th, 2025
              </li>
            </ul>
          </div>

          {/* Nomination Button */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleRedirect}
                className="inline-flex items-center px-8 py-4 bg-[#962326] text-white rounded-md hover:bg-[#7a1c1f] transition-colors text-lg font-semibold"
              >
                Submit Nomination
                <ExternalLink className="ml-2 h-5 w-5" />
              </button>
              
              <Link
                to="/awards/qrcodes"
                className="inline-flex items-center px-8 py-4 border-2 border-[#962326] text-[#962326] rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Get QR Codes
                <QrCode className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsNominate;