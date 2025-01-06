import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { winnersData } from '../data/winnersData';

const PastWinners = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const location = useLocation();
  const isAwardsWinners = location.pathname.startsWith('/awards');
  
  const years = Array.from(new Set(winnersData.map(winner => winner.year))).sort().reverse();
  const filteredWinners = winnersData.filter(winner => winner.year === selectedYear);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/1.png"
            alt={isAwardsWinners ? "Past Award Winners background" : "Past Winners background"}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isAwardsWinners ? "Past Award Winners" : "Our Winners"}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {isAwardsWinners 
                ? "Celebrating our past award winners who have made significant contributions to healthcare"
                : "Celebrating excellence in African healthcare"
              }
            </p>
            <div className="flex justify-center gap-4">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    selectedYear === year
                      ? 'bg-[#F2C849] text-[#2B2A29]'
                      : 'border-2 border-[#F2C849] text-white hover:bg-[#F2C849] hover:text-[#2B2A29]'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Winners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Trophy className="h-8 w-8 text-[#962326]" />
          <h2 className="text-3xl font-bold text-[#2B2A29]">{selectedYear} Winners</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredWinners.map((winner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={winner.image}
                  alt={winner.winner}
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
                  {winner.winner}
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

export default PastWinners;