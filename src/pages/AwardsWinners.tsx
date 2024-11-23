//import React from 'react';
import { Trophy } from 'lucide-react';
import { AWARD_WINNERS_2023 } from '../constants/images';

const AWARD_CATEGORIES = [
  {
    name: "HCP Author of the Year",
    winner: "Ms. Pamela Sedibe",
    image: AWARD_WINNERS_2023.HCP_AUTHOR,
    achievement: "Recognized for outstanding contributions to healthcare literature"
  },
  {
    name: "Medi Personality of the Year",
    winner: "Christopher Zungu",
    image: AWARD_WINNERS_2023.MEDI_PERSONALITY,
    achievement: "Exceptional media representation in healthcare"
  },
  {
    name: "Media HCP Educator of the Year",
    winner: "Dr. Thandeka Ngcobo",
    image: AWARD_WINNERS_2023.HCP_EDUCATOR,
    achievement: "Innovative approaches to healthcare education"
  },
  {
    name: "Mentor of the Year",
    winner: "Thembeka Buleni",
    image: AWARD_WINNERS_2023.MENTOR,
    achievement: "Dedicated mentorship in healthcare professionals"
  },
  {
    name: "Most Compassionate HCP",
    winner: "Noxolo Singwane",
    image: AWARD_WINNERS_2023.MOST_COMPASSIONATE,
    achievement: "Exemplary compassion in patient care"
  },
  {
    name: "Most Voted HCP",
    winner: "Noxolo Singwane",
    image: AWARD_WINNERS_2023.MOST_VOTED,
    achievement: "Recognized by peers for outstanding service"
  },
  {
    name: "Healthcare Leader",
    winner: "Ms. Tshidi Sithole-Mabila",
    image: AWARD_WINNERS_2023.TSHIDI_SITHOLE,
    achievement: "Outstanding leadership in healthcare administration"
  },
  {
    name: "Multi-Talented HCP",
    winner: "Dr. Khanyisile Mashele & Dr. Ziyanda Vundhla",
    image: AWARD_WINNERS_2023.MULTI_TALENTED,
    achievement: "Versatility and excellence in multiple healthcare domains"
  }
];

const AwardsWinners = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Award Winners</h1>
          <p className="text-lg text-gray-600">
            Celebrating excellence and innovation in African healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {AWARD_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={`${category.winner} - ${category.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#2B2A29] mb-3">
                  {category.winner}
                </h4>
                <p className="text-gray-600 text-sm">{category.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsWinners;