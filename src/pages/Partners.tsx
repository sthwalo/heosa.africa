import { Building2, Users, Laptop } from 'lucide-react';

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
      icon: <Laptop className="h-12 w-12 text-[#962326]" />,
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
          description: 'The organization seeks to develop youth and women in rural areas to be prospective employees and entrepreneurs through skills development.'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Our Partners</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to advance healthcare excellence across Africa
          </p>
        </div>

        {partnerCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              {category.icon}
              <h2 className="text-2xl font-bold text-[#2B2A29]">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.partners.map((partner, partnerIndex) => (
                <div
                  key={partnerIndex}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-auto mb-4 grayscale hover:grayscale-0 transition-all"
                  />
                  <h3 className="text-xl font-semibold text-[#2B2A29] mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;