//import React from 'react';
import {AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwardsNominate = () => {
  const categories = [
      // Voted Categories
      'HCP AUTHOR OF THE YEAR',
      'HCP CHARITY DRIVER OF THE YEAR',
      'HCP MENTOR OF THE YEAR',
      'HCP COMMUNITY BUILDER OF THE YEAR',
      'MULTI-TALENTED HCP OF THE YEAR',
      'HCP EDUCATOR OF THE YEAR',
      'HCP MEDIA PERSONALITY OF THE YEAR',
      'DIGITAL HEALTH INNOVATOR OF THE YEAR',
      'HEALTH RESEARCHER OF THE YEAR',
      'HEALTH INSTITUTION OF THE YEAR',
      'HEALTH CARE LEADER OF THE YEAR',
      'EMPLOYEE WELLNESS HCP OF THE YEAR',
      // Honorary Categories
      'OUTSTANDING HEALTHCARE PROFESSIONAL',
      'HEALTHCARE INNOVATION',
      'EXCELLENCE IN HEALTH CARE LEADERSHIP',
      'OUTSTANDING HEALTHCARE INSTITUTION',
      'COMMUNITY HEALTH IMPACT',
      'ACADEMIC IMPACT IN HEALTH'
    ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/awards/nominate-hero.jpg"
            alt="Awards Nomination background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nominate a Healthcare Champion
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Recognize excellence and innovation in African healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/awards/categories"
                className="inline-flex items-center px-6 py-3 border-2 border-[#F2C849] rounded-md hover:bg-[#F2C849] hover:text-[#2B2A29] transition-colors"
              >
                View Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Nominate</h1>
          <p className="text-lg text-gray-600">
            Recognize excellence in African healthcare by nominating outstanding individuals and institutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Guidelines */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="h-6 w-6 text-[#962326]" />
              <h2 className="text-xl font-semibold text-[#2B2A29]">Nomination Guidelines</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                    <strong>Nomination Process:</strong> Individuals may nominate their healthcare professional or institution under a specific category. Nominees must be healthcare professionals working in Africa
                </li>
                <li>
                    <strong>Acceptance of Nomination:</strong> The nominated healthcare professional will be contacted by the office and must either accept or decline the nomination.
                </li>
                <li>
                    <strong>Submission of Proof:</strong> Upon acceptance of the nomination, the healthcare professional is required to submit proof of their work in the specific category they have been nominated for.
                </li>
                <li>
                    <strong>Shortlisting and Selection:</strong> The African Health Excellence Organisation Adjudication Committee will review the nominations, shortlist candidates, and select finalists based on established professional standards and criteria.
                </li>
                <li>
                    <strong>Voting Process:</strong> Individuals will have the opportunity to vote for their favorite healthcare professional or institution among those shortlisted as finalists.
                </li>
                <li>
                    <strong>Winners Announcement:</strong> The healthcare professionals who receive the most votes will be declared winners in their respective categories.
                </li>
                <li>Nominations close on <strong>May 30th, {new Date().getFullYear()}</strong></li> 
            </ul>
          </div>

          {/* Nomination Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2B2A29] mb-8">Nomination Form</h2>
            <form className="space-y-6">
              {/* Nominator Information */}
              <div>
                <h3 className="text-lg font-medium text-[#2B2A29] mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nominator-name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="nominator-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="nominator-email" className="block text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="nominator-email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                </div>
              </div>

              {/* Nominee Information */}
              <div>
                <h3 className="text-lg font-medium text-[#2B2A29] mb-4">Nominee Information</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nominee-name" className="block text-sm font-medium text-gray-700">
                        Nominee Name
                      </label>
                      <input
                        type="text"
                        id="nominee-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                      />
                    </div>
                    <div>
                      <label htmlFor="nominee-email" className="block text-sm font-medium text-gray-700">
                        Nominee Email
                      </label>
                      <input
                        type="email"
                        id="nominee-email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Award Category
                    </label>
                    <select
                      id="category"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
                      Institution/Organization
                    </label>
                    <input
                      type="text"
                      id="institution"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                </div>
              </div>

              {/* Nomination Details */}
              <div>
                <h3 className="text-lg font-medium text-[#2B2A29] mb-4">Nomination Details</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="achievements" className="block text-sm font-medium text-gray-700">
                      Key Achievements
                    </label>
                    <textarea
                      id="achievements"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                      placeholder="Describe the nominee's key achievements and contributions..."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="impact" className="block text-sm font-medium text-gray-700">
                      Impact on Healthcare
                    </label>
                    <textarea
                      id="impact"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                      placeholder="Describe the impact of their work on healthcare..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#962326] hover:bg-[#A7864B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#962326]"
                >
                  Submit Nomination
                </button>

                <input type="hidden" name="_to" value="nominations@heosa.africa" />
                <input type="hidden" name="_subject" value="New Nomination" />
                <input type="hidden" name="_success" value="/awards-nominate-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsNominate;