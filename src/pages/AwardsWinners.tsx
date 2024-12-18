//import React from 'react';
import { AWARD_WINNERS_2024 } from '../constants/images';

const AWARD_CATEGORIES = [
  {
    //name: "Healthcare Leader",
    winner: "Dr. Putswana Senoamadi",
    image: AWARD_WINNERS_2024.HEALTHCARE_LEADER,
    achievement: "Outstanding leadership in healthcare administration"
  },
  {
    //name: "Media Personality",
    winner: "Christopher Zungu",
    image: AWARD_WINNERS_2024.MEDIA_PERSONALITY,
    achievement: "Exceptional media representation in healthcare"
  },
  {
    //name: "Mentor",
    winner: "Thembeka Buleni",
    image: AWARD_WINNERS_2024.MENTOR,
    achievement: "Dedicated mentorship in healthcare professionals"
  },
  {
    //name: "Employee Wellness HCP",
    winner: "Noxolo Singwane",
    image: AWARD_WINNERS_2024.WELLNESS,
    achievement: "Exemplary compassion in patient care"
  },
  {
    //name: "Health Researcher",
    winner: "Dr. Thembinkosi Ngcobo",
    image: AWARD_WINNERS_2024.RESEARCHER,
    achievement: "Outstanding contributions to healthcare research"
  },
  {
    //name: "Health Institution of the Year",
    winner: "Mr Sifiso Mkhatshwa",
    image: AWARD_WINNERS_2024.HEALTHCARE_INSTITUTION,
    achievement: "Recognized for outstanding contributions to healthcare literature"
  },
  {
    //name: "Multi-Talented HCP",
    winner: "Dr. Khanyisile Mashele & Dr. Ziyanda Vundhla",
    image: AWARD_WINNERS_2024.MULTI_TALENTED,
    achievement: "Versatility and excellence in multiple healthcare domains"
  },
  {
    //name: "Rising Star HCP",
    winner: "Dr. Thembinkosi Ngcobo",
    image: AWARD_WINNERS_2024.RISING_STAR_HCP,
    achievement: "Outstanding performance as a young healthcare professional"
  },
  {
    //name: "HCP Community Builder",
    winner: "Dr. Thandeka Ngcobo",
    image: AWARD_WINNERS_2024.HCP_COMMUNITY_BUILDER,
    achievement: "Excellent community service and health promotion projects"
  },
  {
    //name: "HCP Educator",
    winner: "Dr. Thandeka Ngcobo",
    image: AWARD_WINNERS_2024.HCP_EDUCATOR,
    achievement: "Innovative approaches to healthcare education"
  },
  {
    //name: "HCP Charity Driver",
    winner: "Dr. Putswana Senoamadi",
    image: AWARD_WINNERS_2024.HCP_CHARITY_DRIVER,
    achievement: "Outstanding contributions to healthcare charity initiatives"
  },
  {
    //name: "Digital Health Innovator",
    winner: "Ms Clementine Phale",
    image: AWARD_WINNERS_2024.DIGITAL_HEALTH_INNOVATOR,
    achievement: "Innovative use of digital technology to improve healthcare"
  },
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
                  alt={`${category.winner}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold"></h3>
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