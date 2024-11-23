import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://heosa.africa/wp-content/uploads/2024/07/9.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2A29]/80 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advancing Healthcare Excellence & Operations
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Empowering healthcare organizations to achieve operational excellence through innovative solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#962326] hover:bg-[#A7864B] transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-[#F2C849] text-base font-medium rounded-md text-white hover:bg-[#F2C849] hover:text-[#2B2A29] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;