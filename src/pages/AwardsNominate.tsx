import { useState } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../config';

const AwardsNominate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nominator_name: '',
    nominator_email: '',
    nominator_phone: '',
    nominator_location: '',
    nominee_name: '',
    nominee_email: '',
    nominee_phone: '',
    nominee_location: '',
    category: '',
    nominee_institution: '',
    achievements: '',
    impact: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('-', '_')]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    const apiUrl = `${config.apiBaseUrl}/nominations/create.php`;
    console.log('Submitting to:', apiUrl); // Debug log

    try {
      const payload = {
        ...formData
      };

      console.log('Sending payload:', payload); // Debug log

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'cors' // Add explicit CORS mode
      });

      console.log('Response status:', response.status); // Debug log

      // Add error handling for non-JSON responses
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Server returned non-JSON response: ${await response.text()}`);
      }

      const data = await response.json();

      if (response.ok) {
        // Clear form and show success message
        setFormData({
          nominator_name: '',
          nominator_email: '',
          nominator_phone: '',
          nominator_location: '',
          nominee_name: '',
          nominee_email: '',
          nominee_phone: '',
          nominee_location: '',
          category: '',
          nominee_institution: '',
          achievements: '',
          impact: ''
        });
        setSuccessMessage('Nomination submitted successfully! Thank you for your submission.');
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      } else {
        setError(data.message || 'Failed to submit nomination. Please try again.');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while submitting the nomination. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-24 left-0 right-0 z-50 mx-auto max-w-md">
          <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline">{successMessage}</span>
            <button
              onClick={() => setSuccessMessage('')}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <span className="sr-only">Close</span>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/1.png"
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {error}
                </div>
              )}
              {/* Nominator Information */}
              <div>
                <h3 className="text-lg font-medium text-[#2B2A29] mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="nominator-name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="nominator-name"
                      value={formData.nominator_name}
                      onChange={handleInputChange}
                      required
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
                      value={formData.nominator_email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="nominator-phone" className="block text-sm font-medium text-gray-700">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      id="nominator-phone"
                      value={formData.nominator_phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+27 123 456 789"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                  <div>
                    <label htmlFor="nominator-location" className="block text-sm font-medium text-gray-700">
                      Your Location
                    </label>
                    <input
                      type="text"
                      id="nominator-location"
                      value={formData.nominator_location}
                      onChange={handleInputChange}
                      required
                      placeholder="City, Country"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                    />
                  </div>
                </div>
              </div>

              {/* Nominee Information */}
              <div>
                <h3 className="text-lg font-medium text-[#2B2A29] mb-4">Nominee Information</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="nominee-name" className="block text-sm font-medium text-gray-700">
                        Nominee Name
                      </label>
                      <input
                        type="text"
                        id="nominee-name"
                        value={formData.nominee_name}
                        onChange={handleInputChange}
                        required
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
                        value={formData.nominee_email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                      />
                    </div>
                    <div>
                      <label htmlFor="nominee-phone" className="block text-sm font-medium text-gray-700">
                        Nominee Phone Number
                      </label>
                      <input
                        type="tel"
                        id="nominee-phone"
                        value={formData.nominee_phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+27 123 456 789"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#962326] focus:ring-[#962326]"
                      />
                    </div>
                    <div>
                      <label htmlFor="nominee-location" className="block text-sm font-medium text-gray-700">
                        Nominee Location
                      </label>
                      <input
                        type="text"
                        id="nominee-location"
                        value={formData.nominee_location}
                        onChange={handleInputChange}
                        required
                        placeholder="City, Country"
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
                      value={formData.category}
                      onChange={handleInputChange}
                      required
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
                    <label htmlFor="nominee_institution" className="block text-sm font-medium text-gray-700">
                      Institution/Organization
                    </label>
                    <input
                      type="text"
                      id="nominee_institution"
                      value={formData.nominee_institution}
                      onChange={handleInputChange}
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
                      value={formData.achievements}
                      onChange={handleInputChange}
                      required
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
                      value={formData.impact}
                      onChange={handleInputChange}
                      required
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
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#962326] hover:bg-[#A7864B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#962326] disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsNominate;