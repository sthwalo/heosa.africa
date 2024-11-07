import React from 'react';
import { Trophy } from 'lucide-react';

const AwardsWinners = () => {
  const winners = [
    {
      year: '2023',
      categories: [
        {
          name: 'HCP AUTHOR OF THE YEAR',
          winner: 'Dr. Sarah Ndlovu',
          achievement: 'Published groundbreaking research on traditional medicine integration',
          image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80'
        },
        {
          name: 'HEALTHCARE LEADER OF THE YEAR',
          winner: 'Dr. John Mensah',
          achievement: 'Led successful implementation of telemedicine in rural areas',
          image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80'
        }
      ]
    },
    {
      year: '2022',
      categories: [
        {
          name: 'HEALTH INSTITUTION OF THE YEAR',
          winner: 'Victoria Memorial Hospital',
          achievement: 'Excellence in patient care and community service',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80'
        },
        {
          name: 'HCP EDUCATOR OF THE YEAR',
          winner: 'Prof. Mary Okonjo',
          achievement: 'Innovative medical education programs',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
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
            Celebrating excellence and innovation in African healthcare
          </p>
        </div>

        {winners.map((yearGroup) => (
          <div key={yearGroup.year} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="h-8 w-8 text-[#962326]" />
              <h2 className="text-3xl font-bold text-[#2B2A29]">{yearGroup.year} Winners</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {yearGroup.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={category.image}
                      alt={category.winner}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-[#2B2A29] mb-2">
                      {category.winner}
                    </h4>
                    <p className="text-gray-600">{category.achievement}</p>
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

export default AwardsWinners;