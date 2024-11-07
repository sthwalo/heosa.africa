import React from 'react';
import { Building2, Users, Laptop } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'Strategic Partners',
      icon: <Building2 className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'Healthcare Innovation Labs',
          logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100',
          description: 'Leading research and development in healthcare solutions'
        },
        {
          name: 'African Medical Association',
          logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100',
          description: 'Advancing medical excellence across Africa'
        }
      ]
    },
    {
      title: 'Healthcare Providers',
      icon: <Users className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'Premier Hospitals Group',
          logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100',
          description: 'Network of excellence in patient care'
        },
        {
          name: 'Global Health Partners',
          logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100',
          description: 'International healthcare collaboration'
        }
      ]
    },
    {
      title: 'Technology Partners',
      icon: <Laptop className="h-12 w-12 text-[#962326]" />,
      partners: [
        {
          name: 'MedTech Solutions',
          logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100',
          description: 'Innovative healthcare technology solutions'
        },
        {
          name: 'Digital Health Systems',
          logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100',
          description: 'Digital transformation in healthcare'
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