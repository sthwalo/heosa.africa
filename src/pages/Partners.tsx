import { Building2, Users, Handshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Partner {
  name: string;
  logo: string;
  description: string;
  webLink?: string;
  returnLink?: boolean;
  className?: string;
}

interface PartnerCategory {
  title: string;
  icon: JSX.Element;
  partners: Partner[];
}

function Partners() {
  const partnerCategories: PartnerCategory[] = [
    {
      title: 'Platinum Sponsor',
      icon: <Building2 className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'Momentum Health Solutions',
          logo: '/images/Sponsors/Momentum.webp',
          description: 'Momentum is a leading FSP offering financial advice, medical aid, insurance, Wills, Trust and investment products to individuals and businesses in SA. The health division of MMH, Momentum Health key strategic focus is to support communities by enabling and delivering sustainable, integrated outcomes-based healthcare solutions.',
          webLink: 'https://www.momentumhealthsolutions.co.za/',
          returnLink: true,
          className: 'flex items-center justify-center'
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
            src="/images/Cover.jpeg"
            alt="Partners background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Working together with leading organizations to advance healthcare excellence in Africa
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {partnerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex flex-col items-center justify-center text-center mb-8">
              {category.icon}
              <h2 className="text-3xl font-bold text-gray-900 mt-4">{category.title}</h2>
            </div>

            <div className={`grid ${category.title === 'Platinum Sponsor' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
              {category.partners.map((partner, partnerIndex) => (
                <motion.div
                  key={partnerIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: partnerIndex * 0.1 }}
                  whileHover={category.title === 'Platinum Sponsor' ? { scale: 1.05 } : {}}
                  className={`
                    bg-white rounded-lg shadow-lg overflow-hidden 
                    ${category.title === 'Platinum Sponsor' ?
                      'border-4 border-[#962326] transform hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto' :
                      'border border-gray-200'}
                  `}
                >
                  {partner.webLink ? (
                    <a
                      href={partner.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="p-6 flex flex-col items-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className={`h-32 object-contain mb-4 ${partner?.className ?? ''}`} />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 text-center mb-4">{partner.description}</p>
                        {category.title === 'Platinum Sponsor' && (
                          <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-center text-[#962326] font-semibold"
                          >
                            Visit Website <ArrowRight className="ml-2 h-5 w-5" />
                          </motion.div>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="p-6 flex flex-col items-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`h-32 object-contain mb-4 ${partner?.className ?? ''}`} />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                        {partner.name}
                      </h3>
                      <p className="text-gray-600 text-center">{partner.description}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;