import React from 'react';
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-[#962326]" />,
      title: 'Excellence Recognition',
      description: 'Celebrating outstanding achievements in healthcare operations and management.'
    },
    {
      icon: <Users className="h-8 w-8 text-[#962326]" />,
      title: 'Expert Consultation',
      description: 'Personalized guidance from industry leaders to optimize your operations.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#962326]" />,
      title: 'Educational Resources',
      description: 'Comprehensive training materials and workshops for continuous improvement.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#962326]" />,
      title: 'Performance Analytics',
      description: 'Data-driven insights to measure and enhance organizational effectiveness.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2B2A29] mb-4">
            Why Choose AHEO?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help healthcare organizations excel in their operations and achieve sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#2B2A29] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;