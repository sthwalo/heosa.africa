import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { winnersData } from '../data/winnersData';
import Timeline from '../components/Timeline';
import TimelineMobile from '../components/TimelineMobile';
import { awardsTimelineData } from '../data/timelineData';

const Winners = () => {
  const location = useLocation();
  const isAwardsWinners = location.pathname.startsWith('/awards');
  const currentWinners = winnersData.filter(winner => winner.year === '2024');

  const content = {
    title: isAwardsWinners ? "2024 Award Winners" : "2024 Winners",
    description: isAwardsWinners 
      ? "Meet our outstanding award winners who have demonstrated excellence in healthcare"
      : "Meet the outstanding individuals and organizations recognized for their excellence",
    pastWinnersLink: isAwardsWinners ? "/awards/past-winners" : "/past-winners"
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/1.png"
            alt="Winners background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={content.pastWinnersLink}
                className="inline-flex items-center px-6 py-3 border-2 border-[#F2C849] rounded-md hover:bg-[#F2C849] hover:text-[#2B2A29] transition-colors"
              >
                View Past Winners
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Section */}
      <div className="bg-gray-50">
        <div className="hidden md:block max-w-7xl mx-auto">
          <Timeline data={awardsTimelineData} title="Awards Timeline" />
        </div>
        <TimelineMobile data={awardsTimelineData} title="Awards Timeline" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentWinners.map((winner) => (
            <div
              key={winner.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{winner.category}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#2B2A29] mb-3">
                  {winner.name}
                </h4>
                <p className="text-gray-600 text-sm">{winner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Winners;