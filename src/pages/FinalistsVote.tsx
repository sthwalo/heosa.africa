import React, { useState } from 'react';
import { Phone, Mail, Share2, AlertCircle } from 'lucide-react';

interface Finalist {
  id: string;
  name: string;
  category: string;
  image: string;
  voteCode: string;
}

const FinalistsVote = () => {
  const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

  const finalists = [
    {
      id: 'hi1',
      name: 'Espaco Relive LDA-Mozambique',
      category: 'Health Institution of the Year',
      image: 'https://heosa.africa/wp-content/uploads/2024/10/46-scaled.jpg',
      voteCode: 'HI01'
    },
    {
      id: 'mt1',
      name: 'Ms Edith Mhlongo',
      category: 'Multi-Talented HCP of the Year',
      image: 'https://heosa.africa/wp-content/uploads/2024/10/13.jpg',
      voteCode: 'MT01'
    }
  ];

  const handleVote = (finalist: Finalist) => {
    setSelectedFinalist(finalist);
    setIsVoteModalOpen(true);
  };

  const VoteModal = () => {
    if (!selectedFinalist) return null;

    const votingMethods = [
      {
        title: 'SMS Voting',
        icon: <Phone className="h-6 w-6" />,
        description: `SMS ${selectedFinalist.voteCode} to 33225`,
        action: () => window.location.href = `sms:33225?body=${selectedFinalist.voteCode}`
      },
      {
        title: 'Email Voting',
        icon: <Mail className="h-6 w-6" />,
        description: 'Vote via email',
        action: () => window.location.href = `mailto:vote@heosa.africa?subject=Vote for ${selectedFinalist.name}&body=I would like to vote for ${selectedFinalist.name} (${selectedFinalist.voteCode})`
      },
      {
        title: 'Share',
        icon: <Share2 className="h-6 w-6" />,
        description: 'Share with friends',
        action: () => {
          if (navigator.share) {
            navigator.share({
              title: 'Vote for ' + selectedFinalist.name,
              text: `Vote for ${selectedFinalist.name} in the African Health Excellence Awards! SMS ${selectedFinalist.voteCode} to 33225`,
              url: window.location.href
            });
          }
        }
      }
    ];

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-[#2B2A29]">
              Vote for {selectedFinalist.name}
            </h3>
            <button
              onClick={() => setIsVoteModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {votingMethods.map((method, index) => (
              <button
                key={index}
                onClick={method.action}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#962326] hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 text-[#962326]">
                  {method.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-[#2B2A29]">{method.title}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Vote for Finalists</h1>
          <p className="text-lg text-gray-600">
            Support your favorite healthcare professionals and institutions
          </p>
        </div>

        {/* Voting Instructions */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="h-6 w-6 text-[#962326]" />
              <h2 className="text-xl font-semibold text-[#2B2A29]">How to Vote</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Choose your preferred finalist from the list below</li>
              <li>Click the "Vote Now" button to see voting options</li>
              <li>Vote using SMS or email</li>
              <li>Share with friends to support your candidate</li>
              <li>Voting closes on May 31st, 2024</li>
            </ul>
          </div>
        </div>

        {/* Finalists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalists.map((finalist) => (
            <div
              key={finalist.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square">
                <img
                  src={finalist.image}
                  alt={finalist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{finalist.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2B2A29] mb-4">
                  {finalist.name}
                </h3>
                <button
                  onClick={() => handleVote(finalist)}
                  className="w-full py-2 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
                >
                  Vote Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isVoteModalOpen && <VoteModal />}
    </div>
  );
};

export default FinalistsVote;