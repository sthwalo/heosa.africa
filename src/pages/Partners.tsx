import { Building2, Users, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'Strategic Partners',
      icon: <Building2 className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'South African Medical Association',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/SAMA.jpg',
          description: 'Leading research and development in healthcare solutions'
        },
        {
          name: 'S.A A.H.I.P V.H.I.A',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/SAAHIP-Logo.png',
          description: 'Advancing medical excellence across Africa'
        },
        { 
          name: 'South African Medical Association Trade Union',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/banner-overlay-logo.png',
          description: 'Leading research and development in healthcare solutions'
        },
      ]
    },
    {
      title: 'Healthcare Providers',
      icon: <Users className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'The Department of Health Mpumalanga',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/mpumahealthdept.jpg',
          description: 'Improving health status through the prevention of illnesses and the promotion of healthy lifestyles and to consistently improve the healthcare delivery system by focusing on access, equity, efficiency, quality and sustainability.'
        },
        {
          name: 'Denosa',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/Denosa-Logo.png',
          description: 'The Democratic Nursing Organisation of South Africa'
        }
      ]
    },
    {
      title: 'Sponsors',
      icon: <Handshake className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'Project Artour',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/11.png',
          description: 'Fashion on the go'
        },
        {
          name: 'Inikiwe Consulting Services',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/2.png',
          description: 'A finance and business consulting firm'
        },
        {
          name: 'Stayeasy | Mbombela',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/3.png',
          description: 'A travelling and accommodation agency'
        },
        {
          name: 'Jumpstart',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/1.png',
          description: 'The organization that seeks to develop youth and women in rural areas to be prospective employees and entrepreneurs through skills development.'
        },
        {
          name: 'Gozone Water',
          logo: 'https://heosa.africa/wp-content/uploads/2024/06/10.png',
          description: 'We deliver only the healthiest remineralised ozonated water'
        }, 
        {
          name: 'Old Mutual',
          logo: 'https://heosa.africa/wp-content/uploads/2024/07/12.png',
          description: 'Investments, Insurance & More'
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://heosa.africa/wp-content/uploads/2024/07/9.png"
            alt="Partners background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Partners & Sponsors</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with leading organizations to advance healthcare excellence across Africa
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {partnerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              {category.icon}
              <h2 className="text-3xl font-bold text-[#2B2A29] ml-4">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.partners.map((partner, partnerIndex) => (
                <div key={partnerIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-full h-48 mb-6 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#962326] mb-3">{partner.name}</h3>
                    <p className="text-gray-600 flex-grow">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Become a Partner CTA */}
      <div className="bg-[#2B2A29] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in our mission to advance healthcare excellence across Africa. Partner with us to make a lasting impact in the healthcare sector.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#962326] rounded-md hover:bg-[#A7864B] transition-colors text-lg group"
          >
            Contact Us
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partners;