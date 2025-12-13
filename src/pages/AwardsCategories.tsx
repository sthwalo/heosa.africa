//import React from 'react';
import {
  BookOpen,
  Heart,
  Users,
  Globe,
  Star,
  Brain,
  Radio,
  Laptop,
  Search,
  Accessibility,
  Building2,
  Trophy,
  UserPlus,
  Briefcase,
  Stethoscope,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNominationsStatus } from '../hooks/useNominationsStatus';
import { getVotedCategories, getHonoraryCategories } from '../data/awardCategories';
import { AwardCategory } from '../types/finalist.types';

// Icon mapping
const iconMap = {
  BookOpen: BookOpen,
  Heart: Heart,
  Users: Users,
  Globe: Globe,
  Star: Star,
  Brain: Brain,
  Radio: Radio,
  Laptop: Laptop,
  Search: Search,
  Accessibility: Accessibility,
  Building2: Building2,
  Trophy: Trophy,
  UserPlus: UserPlus,
  Briefcase: Briefcase,
  Stethoscope: Stethoscope,
  Lightbulb: Lightbulb
} as const;

// Dynamic icon import
const getIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={24} /> : null;
};

const AwardsCategories = () => {
  const nominations = useNominationsStatus();
  const votedCategories = getVotedCategories();
  const honoraryCategories = getHonoraryCategories();

  const CategoryCard = ({ category }: { category: AwardCategory }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-[#962326]/10 p-3 rounded-full mr-4">
          <div className="text-[#962326]">
            {getIcon(category.icon)}
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#2B2A29]">{category.shortTitle}</h3>
      </div>

      <p className="text-gray-600 mb-4">{category.description}</p>

      {category.qualificationCriteria.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-[#962326] mb-2">Qualification Criteria:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {category.qualificationCriteria.map((criteria, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#962326] mr-2">•</span>
                {criteria}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <h4 className="font-semibold text-[#962326] mb-2">Score Metrics:</h4>
        <div className="flex flex-wrap gap-2">
          {category.scoreMetrics.map((metric, index) => (
            <span
              key={index}
              className="bg-[#F2C849] text-[#2B2A29] px-2 py-1 rounded-full text-xs font-medium"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-[#962326] mb-2">Required Documents:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {category.requiredDocuments.slice(0, 3).map((doc, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#962326] mr-2">•</span>
              {doc}
            </li>
          ))}
          {category.requiredDocuments.length > 3 && (
            <li className="text-[#962326] text-sm font-medium">
              +{category.requiredDocuments.length - 3} more documents required
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/2025/Awards/10.jpg"
            alt="2025 Awards"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Award Categories</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the comprehensive range of categories celebrating excellence in African healthcare
          </p>
        </div>
      </div>

      {/* Voted Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2B2A29] mb-4">Voted Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These categories are determined by public voting, recognizing outstanding achievements
            and contributions across the African healthcare landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {votedCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Nomination CTA */}
        <div className="text-center">
          <div className="bg-[#962326] text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Nominate?</h3>
            <p className="text-xl mb-6">
              {nominations.isOpen
                ? "Nominations are now open! Submit your nomination for any of these categories."
                : "Nominations will open soon. Stay tuned for updates."
              }
            </p>
            {nominations.isOpen && (
              <Link
                to="/awards/nominate"
                className="inline-flex items-center bg-[#F2C849] text-[#2B2A29] font-bold py-3 px-8 rounded-lg hover:bg-[#F2C849]/90 transition-colors duration-300"
              >
                Nominate Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Honorary Categories Section (if any) */}
      {honoraryCategories.length > 0 && (
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2B2A29] mb-4">Honorary Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Special recognition categories celebrating exceptional achievements in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {honoraryCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Score Metrics Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2B2A29] mb-4">Evaluation Framework</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All nominations are evaluated using a comprehensive scoring system across five key metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              title: 'Impact & Contribution',
              description: 'Measurable positive effects on healthcare delivery and patient outcomes'
            },
            {
              title: 'Innovation & Creativity',
              description: 'Novel approaches, solutions, and creative problem-solving in healthcare'
            },
            {
              title: 'Professional Excellence',
              description: 'Demonstrated mastery, leadership, and adherence to professional standards'
            },
            {
              title: 'Evidence & Documentation',
              description: 'Comprehensive documentation and verifiable proof of achievements'
            },
            {
              title: 'Community Engagement',
              description: 'Active involvement in community health initiatives and outreach'
            }
          ].map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-[#F2C849] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#2B2A29]">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#2B2A29] mb-2">{metric.title}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nomination Requirements */}
      <div className="bg-[#962326] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nomination Requirements</h2>
            <p className="text-xl max-w-3xl mx-auto">
              All nominations must include the following documentation to be considered complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Copy of professional registration (e.g., HPCSA, SAPC, SANC)',
              'CV or institutional profile',
              'Reviews from patients',
              'Motivation letter (maximum 2 pages)',
              'Portfolio of evidence (photos, reports, letters, media links)',
              'Reference letters (minimum 2)',
              'Proof of achievements (certificates, publications, awards)',
              'For institutions: compliance and accreditation documents',
              'For entrepreneurs: business registration and proof of operations'
            ].map((requirement, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-[#F2C849] rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-[#2B2A29]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsCategories;