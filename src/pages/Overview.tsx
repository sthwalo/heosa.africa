import { ArrowRight, Calendar, Users, Award, Microscope, BookOpen, Cpu, Building2, Users2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Overview = () => {
  const summitHighlights = {
    date: "2025",
    attendees: "Nearly 1000 Healthcare Professionals",
    venue: "Durban, South Africa",
  };

  const summitTopics = [
    {
      icon: <Microscope className="h-12 w-12 text-[#962326]" />,
      title: "Medical Research and Advances",
      description: "Cutting-edge presentations and discussions on the latest medical research findings, breakthroughs, and advancements across various specialties. Discover groundbreaking developments shaping the future of healthcare."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#962326]" />,
      title: "Clinical Case Studies",
      description: "Expert-led analysis of compelling and challenging clinical cases, designed to enhance diagnostic accuracy and treatment strategies. Learn from real-world scenarios and improve patient care outcomes."
    },
    {
      icon: <Cpu className="h-12 w-12 text-[#962326]" />,
      title: "Healthcare Technology and Innovation",
      description: "Explore emerging technologies, digital health solutions, and innovations revolutionizing healthcare delivery. Discover AI-driven diagnostics, telemedicine advances, and smart healthcare solutions improving patient outcomes."
    },
    {
      icon: <Building2 className="h-12 w-12 text-[#962326]" />,
      title: "Healthcare Policy and Management",
      description: "In-depth discussions on healthcare policies, regulations, and management strategies. Focus on improving healthcare systems, expanding access to care, and enhancing quality of service delivery across Africa."
    },
    {
      icon: <Users2 className="h-12 w-12 text-[#962326]" />,
      title: "Healthcare Interdisciplinary Collaboration",
      description: "Foster collaboration and knowledge exchange among diverse healthcare specialists. Promote multidisciplinary approaches to patient care and build stronger healthcare networks across the continent."
    },
    {
      icon: <Heart className="h-12 w-12 text-[#962326]" />,
      title: "Patient-Centered Care",
      description: "Emphasize the crucial role of patient-centered care, effective communication, and empathy in healthcare practice. Develop strategies for improving patient experience and healthcare outcomes."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/summit/27.png"
            alt="Overview background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              African Health Excellence Summit
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A premier gathering of healthcare professionals, researchers, and thought leaders dedicated to advancing healthcare excellence across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/medical-events/register"
                className="inline-flex items-center px-6 py-3 bg-[#962326] rounded-md hover:bg-[#A7864B] transition-colors"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/medical-events"
                className="inline-flex items-center px-6 py-3 border-2 border-[#F2C849] rounded-md hover:bg-[#F2C849] hover:text-[#2B2A29] transition-colors"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Summit Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-[#962326] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{summitHighlights.date}</h3>
              <p className="text-gray-600">Mark Your Calendar</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#962326] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{summitHighlights.attendees}</h3>
              <p className="text-gray-600">Expected Attendance</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-[#962326] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{summitHighlights.venue}</h3>
              <p className="text-gray-600">Premier Venue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summit Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Summit Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summitTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                {topic.icon}
                <h3 className="text-xl font-semibold mt-4 mb-3">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2B2A29] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future of African Healthcare</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of this transformative gathering where healthcare excellence meets innovation
          </p>
          <Link
            to="/medical-events/register"
            className="inline-flex items-center px-8 py-4 bg-[#962326] rounded-md hover:bg-[#A7864B] transition-colors text-lg"
          >
            Register for the Summit
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
