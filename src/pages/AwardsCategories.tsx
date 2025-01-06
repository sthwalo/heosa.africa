//import React from 'react';
import {Users, BookOpen, Star, Heart, Brain, Stethoscope, Building2, Trophy, Lightbulb, Globe, Briefcase, Radio, Laptop, Search, UserPlus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwardsCategories = () => {
  const votedCategories = [
    {
      title: 'HCP AUTHOR OF THE YEAR',
      icon: <BookOpen className="h-8 w-8 text-[#962326]" />,
      description: 'The Healthcare Professional Author of the Year Award recognizes healthcare professionals who have demonstrated exceptional talent and impact in the field of healthcare literature and writing. This award celebrates those who contribute to medical knowledge through published works, research papers, or educational materials.'
    },
    {
      title: 'HCP CHARITY DRIVER OF THE YEAR',
      icon: <Heart className="h-8 w-8 text-[#962326]" />,
      description: 'Honoring healthcare professionals who have shown exceptional commitment to charitable initiatives, organizing fundraising events, and driving community service projects that improve healthcare access and outcomes for underserved populations.'
    },
    {
      title: 'HCP MENTOR OF THE YEAR',
      icon: <Users className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing healthcare professionals who excel in guiding and developing the next generation of healthcare providers through dedicated mentorship, knowledge sharing, and professional development support.'
    },
    {
      title: 'HCP COMMUNITY BUILDER OF THE YEAR',
      icon: <Globe className="h-8 w-8 text-[#962326]" />,
      description: 'Celebrating individuals who actively strengthen healthcare communities through networking, collaboration, and initiatives that bring healthcare professionals together for improved patient care.'
    },
    {
      title: 'MULTI-TALENTED HCP OF THE YEAR',
      icon: <Star className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing healthcare professionals who demonstrate excellence across multiple disciplines, combining clinical practice with other talents or skills that benefit the healthcare community.'
    },
    {
      title: 'HCP EDUCATOR OF THE YEAR',
      icon: <Brain className="h-8 w-8 text-[#962326]" />,
      description: 'Honoring healthcare professionals who excel in education, whether through formal teaching, training programs, or innovative educational initiatives that enhance healthcare knowledge and skills.'
    },
    {
      title: 'HCP MEDIA PERSONALITY OF THE YEAR',
      icon: <Radio className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing healthcare professionals who effectively use media platforms to educate, inform, and engage the public on health-related matters, promoting health awareness and education.'
    },
    {
      title: 'DIGITAL HEALTH INNOVATOR OF THE YEAR',
      icon: <Laptop className="h-8 w-8 text-[#962326]" />,
      description: 'Celebrating healthcare professionals who leverage digital technologies and innovations to improve healthcare delivery, patient care, or healthcare systems.'
    },
    {
      title: 'HEALTH RESEARCHER OF THE YEAR',
      icon: <Search className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing outstanding contributions to healthcare research, including clinical trials, medical studies, and innovative research methodologies that advance medical knowledge.'
    },
    {
      title: 'HEALTH INSTITUTION OF THE YEAR',
      icon: <Building2 className="h-8 w-8 text-[#962326]" />,
      description: 'Honoring healthcare facilities that demonstrate excellence in patient care, operational efficiency, innovation, and community impact.'
    },
    {
      title: 'HEALTH CARE LEADER OF THE YEAR',
      icon: <Trophy className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing exceptional leadership in healthcare management, administration, and organizational development that drives positive change and improvement.'
    },
    {
      title: 'EMPLOYEE WELLNESS HCP OF THE YEAR',
      icon: <UserPlus className="h-8 w-8 text-[#962326]" />,
      description: 'Celebrating healthcare professionals who champion workplace wellness programs and initiatives that promote the health and well-being of healthcare workers.'
    }
  ];

  const honoraryCategories = [
    {
      title: 'OUTSTANDING HEALTHCARE PROFESSIONAL',
      icon: <Stethoscope className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing individual healthcare professionals who have made significant contributions to their respective fields, displayed exceptional clinical skills, and provided outstanding patient care.'
    },
    {
      title: 'HEALTHCARE INNOVATION',
      icon: <Lightbulb className="h-8 w-8 text-[#962326]" />,
      description: 'Honoring breakthrough innovations in healthcare delivery, treatment methods, or medical technology that significantly improve patient outcomes or healthcare efficiency.'
    },
    {
      title: 'EXCELLENCE IN HEALTH CARE LEADERSHIP',
      icon: <Briefcase className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing exemplary leadership that transforms healthcare organizations, inspires teams, and drives sustainable improvements in healthcare delivery.'
    },
    {
      title: 'OUTSTANDING HEALTHCARE INSTITUTION',
      icon: <Building2 className="h-8 w-8 text-[#962326]" />,
      description: 'Celebrating healthcare institutions that set new standards in patient care, operational excellence, and innovative healthcare delivery models.'
    },
    {
      title: 'COMMUNITY HEALTH IMPACT',
      icon: <Globe className="h-8 w-8 text-[#962326]" />,
      description: 'Recognizing initiatives and programs that significantly improve community health outcomes and access to healthcare services.'
    },
    {
      title: 'ACADEMIC IMPACT IN HEALTH',
      icon: <BookOpen className="h-8 w-8 text-[#962326]" />,
      description: 'Honoring significant contributions to healthcare education, research, and academic advancement that shape the future of healthcare practice.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/awards/categories-hero.jpg"
            alt="Award Categories background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Award Categories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our diverse range of healthcare excellence categories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/awards/nominate"
                className="inline-flex items-center px-6 py-3 bg-[#962326] rounded-md hover:bg-[#A7864B] transition-colors"
              >
                Nominate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Voted Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#2B2A29] mb-8">Voted Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {votedCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2B2A29]">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Honorary Categories */}
      <div>
        <h2 className="text-3xl font-bold text-[#2B2A29] mb-8">Honorary Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {honoraryCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2B2A29]">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsCategories;