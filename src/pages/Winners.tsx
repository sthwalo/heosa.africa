//import React from 'react';


const AWARD_CATEGORIES = [
  {
    name: "Healthcare Leader",
    winner: "Dr. Putswana Senoamadi",
    image: "/images/winners/24/Healthcare Leader.jpg",
    achievement: "Outstanding leadership in healthcare administration"
  },
  {
    name: "Media Personality",
    winner: "Ms Moloko Mehlape",
    image: "/images/winners/24/Media Personality.jpg",
    achievement: "Exceptional media representation in healthcare"
  },
  {
    name: "Mentor",
    winner: "Dr Ashlin Rampul",
    image: "/images/winners/24/Mentor.jpg",
    achievement: "Dedicated mentorship in healthcare professionals"
  },
  {
    name: "Employee Wellness HCP",
    winner: "Mr Sifiso Mkhatshwa",
    image: "/images/winners/24/Employee Wellness.jpg",
    achievement: "Exemplary compassion in patient care"
  },
  {
    name: "Health Researcher",
    winner: "Dr Borna Nyaoke-Anoke",
    image: "/images/winners/24/Health Researcher.jpg",
    achievement: "Outstanding contributions to healthcare research"
  },
  {
    name: "Health Institution of the Year",
    winner: "Foundation for Alcohol Related Research",
    image: "/images/winners/24/Health Institution.jpg",
    achievement: "Recognized for outstanding contributions to healthcare literature"
  },
  {
    name: "Multi-Talented HCP",
    winner: "Mr Sibusiso Mthembu(SbuNoah)",
    image: "/images/winners/24/Multi-Talented.jpg",
    achievement: "Versatility and excellence in multiple healthcare domains"
  },
  {
    name: "Rising Star HCP",
    winner: "Dr. Thozama Siyotula",
    image: "/images/winners/24/Rising Star.jpg",
    achievement: "Outstanding performance as a young healthcare professional"
  },
  {
    name: "HCP Community Builder",
    winner: "Ms Bulelani Mkhize",
    image: "/images/winners/24/Community Builder.jpg",
    achievement: "Excellent community service and health promotion projects"
  },
  {
    name: "HCP Educator",
    winner: "Dr. Gugu Nhleko Tembe",
    image: "/images/winners/24/Educator.jpg",
    achievement: "Innovative approaches to healthcare education"
  },
  {
    name: "HCP Charity Driver",
    winner: "Mrs Tshidi Sithole-Mabila",
    image: "/images/winners/24/Charity Driver.jpg",
    achievement: "Outstanding contributions to healthcare charity initiatives"
  },
  {
    name: "Digital Health Innovator",
    winner: "Ms Clementine Phale",
    image: "/images/winners/24/Digital Innovator.jpg",
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