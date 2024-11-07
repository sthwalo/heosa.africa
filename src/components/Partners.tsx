import React from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partners = [
    {
      name: "Healthcare Innovation Labs",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100",
      link: "/partners#strategic"
    },
    {
      name: "MedTech Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100",
      link: "/partners#technology"
    },
    {
      name: "African Medical Association",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100",
      link: "/partners#healthcare"
    },
    {
      name: "Global Health Partners",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100",
      link: "/partners#strategic"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2B2A29] mb-12 text-center">Our Partners</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              to={partner.link}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;