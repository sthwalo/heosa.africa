import React from 'react';
import { Trophy } from 'lucide-react';

const FinalistsWinners = () => {
  const pastWinners = [
    {
      year: 2023,
      winners: [
        {
          category: "Health Institution of the Year",
          winner: "Espaco Relive LDA-Mozambique",
          image: "https://heosa.africa/wp-content/uploads/2024/10/46-scaled.jpg",
          description: "Excellence in healthcare delivery and community impact"
        },
        {
          category: "Multi-Talented HCP of the Year",
          winner: "Ms Edith Mhlongo",
          image: "https://heosa.africa/wp-content/uploads/2024/10/13.jpg",
          description: "Outstanding achievements across multiple healthcare disciplines"
        }
      ]
    },
    {
      year: 2022,
      winners: [
        {
          category: "Healthcare Leader of the Year",
          winner: "Dr. Putswana Senoamadi",
          image: "https://heosa.africa/wp-content/uploads/2024/10/9.jpg",
          description: "Exceptional leadership in healthcare transformation"
        },
        {
          category: "HCP Educator of the Year",
          winner: "Dr. Precious Serero",
          image: "https://heosa.africa/wp-content/uploads/2024/10/38-scaled.jpg",
          description: "Innovation in medical education and mentorship"
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Past Winners</h1>
          <p className="text-lg text-gray-600">
            Celebrating excellence in African healthcare
          </p>
        </div>

        {pastWinners.map((yearGroup) => (
          <div key={yearGroup.year} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="h-8 w-8 text-[#962326]" />
              <h2 className="text-3xl font-bold text-[#2B2A29]">{yearGroup.year}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {yearGroup.winners.map((winner, index) => (
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
                        <p className="text-sm font-medium">{winner.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#2B2A29] mb-2">
                      {winner.winner}
                    </h3>
                    <p className="text-gray-600">{winner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalistsWinners;