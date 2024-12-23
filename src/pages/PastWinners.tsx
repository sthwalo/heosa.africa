//import React from 'react';
import { Trophy } from 'lucide-react';

const FinalistsWinners = () => {
  const pastWinners = [
    {
      year: 2023,
      winners: [
        {
          //category: "HCP Author of the Year",
          winner: "Ms. Pamela Sedibe",
          image: "/images/winners/23/Pamela.jpg",
          description: "Recognized for outstanding contributions to healthcare literature"
        },
        {
         // category: "Medi Personality of the Year",
          winner: "Mr. Christopher Zungu",
          image: "/images/winners/23/Zungu.jpg",
          description: "Exceptional media representation in healthcare"
        },
        {
          //category: "Media HCP Educator of the Year",
          winner: "Dr. Thandeka Ngcobo",
          image: "/images/winners/23/Ngcobo.jpg",
          description: "Innovative approaches to healthcare education"
        },
        {
          //category: "Mentor of the Year",
          winner: "Ms. Thembeka Buleni",
          image: "/images/winners/23/Buleni.jpg",
          description: "Dedicated mentorship in healthcare professionals"
        },
        {
          //category: "Most Compassionate HCP",
          winner: "Ms.Noxolo Singwane",
          image: "/images/winners/23/Singwane.jpg",
          description: "Exemplary compassion in patient care"
        },
        {
          //category: "Most Voted HCP",
          winner: "Ms.Noxolo Singwane",
          image: "/images/winners/23/Singwane.jpg",
          description: "Recognized by peers for outstanding service"
        },
        {
          //category: "Healthcare Leader",
          winner: "Ms. Tshidi Sithole-Mabila",
          image: "/images/winners/23/Ms-Tshidi-Sithole-Mabila.jpg",
          description: "Outstanding leadership in healthcare administration"
        },
        {
          category: "",
          winner: "Dr. Khanyisile Mashele & Dr. Ziyanda Vundhla",
          image: "/images/winners/23/Dr-Khanyisile-Dr-Ziyanda.jpg",
          description: "Outstanding achievements across multiple healthcare disciplines"
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Our Winners</h1>
          <p className="text-lg text-gray-600">
            Celebrating excellence in African healthcare
          </p>
        </div>

        {pastWinners.map((yearGroup) => (
          <div key={yearGroup.year} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="h-8 w-8 text-[#962326]" />
              <h2 className="text-3xl font-bold text-[#2B2A29]">{yearGroup.year} Winners</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {yearGroup.winners.map((winner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <img
                      src={winner.image}
                      alt={`${winner.winner} - ${winner.category}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-sm font-semibold">{winner.category}</h3>
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
        ))}
      </div>
    </div>
  );
};

export default FinalistsWinners;