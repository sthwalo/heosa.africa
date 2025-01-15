import { useState } from 'react';
import { Phone, Mail, Share2, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { finalistsData, type Finalist } from '../data/finalistsData';
import Timeline from '../components/Timeline';
import { finalistsTimelineData } from '../data/timelineData';

const Finalists = () => {
  const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

  const currentFinalists = finalistsData.filter(f => f.year === '2024');

  const categories = Object.values(
    currentFinalists.reduce((acc, finalist) => {
      if (!acc[finalist.category]) {
        acc[finalist.category] = {
          title: finalist.category,
          finalists: []
        };
      }
      acc[finalist.category].finalists.push(finalist);
      return acc;
    }, {} as Record<string, { title: string; finalists: Finalist[] }>));

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
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-[#2B2A29]">Vote for {selectedFinalist.name}</h3>
            <button
              onClick={() => setIsVoteModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
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
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/1.png"
            alt="Finalists background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Finalists
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Vote for your favorite healthcare professionals
            </p>
            <Link
              to="/past-finalists"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#962326] text-white hover:bg-[#7a1c1f] transition-colors"
            >
              View Past Finalists
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <Timeline data={finalistsTimelineData} title="Finalist Selection Process" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold text-[#2B2A29] mb-8">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.finalists.map((finalist) => (
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
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#2B2A29] mb-4">{finalist.name}</h3>
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
        ))}
      </div>

      {isVoteModalOpen && <VoteModal />}
    </div>
  );
};

export default Finalists;