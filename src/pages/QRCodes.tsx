import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import QRCodeGenerator from '../components/QRCodeGenerator';

const QRCodes: React.FC = () => {
  // Use the actual nomination and voting URLs
  const nominationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeDn6dQtTYPM8sUsNC2CbpEREhmFM8pSkFjQ5FJosrYGlb5hw/viewform?usp=sharing&ouid=115228437543903286104';
  // You'll need to replace this with your actual voting URL when it's available
  const votingUrl = 'https://heosa.africa/awards/vote';
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#2B2A29] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              QR Codes for Nominations & Voting
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Scan these QR codes to quickly access our nomination and voting forms
            </p>
          </div>
        </div>
      </div>
      
      {/* QR Codes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/awards/nominate" 
            className="inline-flex items-center text-[#962326] hover:text-[#7a1c1f]"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Nominations
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Nomination QR Code */}
          <QRCodeGenerator 
            url={nominationUrl}
            title="Nomination Form"
            description="Scan this QR code to nominate a healthcare champion for the HEOSA Awards."
            size={250}
          />
          
          {/* Voting QR Code */}
          <QRCodeGenerator 
            url={votingUrl}
            title="Voting Form"
            description="Scan this QR code to vote for finalists in the HEOSA Awards."
            size={250}
          />
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#2B2A29] mb-4">How to Use These QR Codes</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li><strong>For Event Organizers:</strong> Download these QR codes and include them in your promotional materials, presentations, or display them at your event.</li>
            <li><strong>For Participants:</strong> Use your smartphone's camera to scan the QR code, which will direct you to the appropriate form.</li>
            <li><strong>For Social Media:</strong> Share these QR codes on your social media platforms to encourage nominations and voting.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QRCodes;
