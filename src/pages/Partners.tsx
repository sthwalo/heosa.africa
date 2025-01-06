import { Building2, Users, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'Platinum Sponsor',
      icon: <Building2 className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'Momentum Health Solutions',
          logo: '/images/Sponsors/Momentum.webp',
          description: 'Leading research and development in healthcare solutions',
          webLink: 'https://www.momentumhealthsolutions.co.za/'
        }
      ]
    },
    {
      title: 'Our Partners',
      icon: <Users className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'South African Medical Association',
          logo: '/images/Sponsors/SAMA.jpg',
          description: 'The South African Medical Association (SAMA): A non-statutory, professional association for public- and private-sector medical practitioners in South Africa.'
        },
        {
          name: 'Democratic Nursing Organisation of South Africa',
          logo: '/images/Sponsors/Denosa-Logo.png',
          description: 'A united and proficient nursing fraternity'
        },
        {
          name: 'The Department of Public Service and Administration',
          logo: '/images/Sponsors/DPSA-Logo.jpg',
          description: 'Batho Pele: We Belong, We Care, We Serve.'
        },
        { 
          name: 'South African Medical Association Trade Union',
          logo: '/images/Sponsors/4.png',
          description: 'Leading research and development in healthcare solutions'
        },
        {
          name: 'The Department of Health Mpumalanga',
          logo: '/images/Sponsors/mpumahealthdept.jpg',
          description: 'Improving health status through the prevention of illnesses and the promotion of healthy lifestyles and to consistently improve the healthcare delivery system by focusing on access, equity, efficiency, quality and sustainability.'
        },
        {
          name: 'The Department of Health Gauteng',
          logo: '/images/Sponsors/Gauteng.png',
          description: 'Our mission is to create an effective public healthcare system in Gauteng by ensuring we have the right people, skills, system and equipment to provide the care our patients need to live healthy and quality lives.'
        }
      ]
    },
    {
      title: 'Sponsors',
      icon: <Handshake className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'Curro Academy Mbombela',
          logo: '/images/Sponsors/curro.jpg',
          description: 'Providing excellent education to learners from Grade R to Grade 7.'
        },
        {
          name: 'Inikiwe Consulting Services',
          logo: '/images/Sponsors/2.png',
          description: 'A finance and business consulting firm'
        },
        {
          name: 'Ndalo Group of Hotels',
          logo: '/images/Sponsors/ndalo.jpg',
          description: 'Nestled in four distinct locations, our hotels are a testament to luxury, comfort, and a commitment to providing unparalleled guest experiences.'
        },
        {
          name: 'Lancet Laboratories',
          logo: '/images/Sponsors/lancet.png',
          description: 'Lancet Laboratories SA is one of the leading pathology laboratories operating throughout South Africa, providing vital diagnostic and monitoring pathology services in 9 provinces. Cerba Lancet Africa provides services to Botswana, Gabon, Ghana, Kenya, Mozambique, Rwanda, Nigeria, Eswatini, Tanzania, Uganda, Zimbabwe and Zambia.'
        },
        {
          name: 'Dr Sifiso Nxumalo',
          logo: '/images/Sponsors/drscnxumalo.png',
          description: 'Dr. Sifiso C Nxumalo’s Medical Practice is where Advanced Healthcare meets Personalized Treatment, call for quality care in a welcoming environment. Our facilities, equipped with the latest technology, offer a broad spectrum of medical services. '
        }, 
        {
          name: 'La Roche-Posay',
          logo: '/images/Sponsors/laroche.jpg',
          description: 'A BETTER LIFE FOR SENSITIVE SKIN'
        },
        {
          name: 'The Nestlé Nutrition Institute (NNI)',
          logo: '/images/Sponsors/NNIA.webp',
          description: 'The Nestlé Nutrition Institute (NNI) is a non for profit association that shares leading science-based information.'
        },
        {
          name: 'URIAGE',
          logo: '/images/Sponsors/uriage.png',
          description: 'Since 1992, the Dermatological Laboratories have incorporated the benefits of Uriage Thermal Water into its expert dermatological products to help all the family skin on a daily basis. Today, its expertise is recognised in over 70 countries.'
        },
        {
          name: 'Clinical Care Platform',
          logo: '/images/Sponsors/ccp.png',
          description: 'Your Home for Continuous Professional Development (CPD). Welcome to Clinical Care Platform. Enjoy a Library of Over 100 CPD Courses.'
          
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
            src="/images/events/File 12.png"
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