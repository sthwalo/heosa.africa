import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Awards', path: '/awards' },
    { name: 'Medical Events', path: '/medical-events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com/AHEO' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/AHEO' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/AHEO' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/AHEO' }
  ];

  return (
    <footer className="bg-[#2B2A29] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F2C849]">About AHEO</h3>
            <p className="text-gray-300 mb-4">
              African Health Excellence Organisation celebrates and promotes excellence in healthcare across Africa through recognition, education, and collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#F2C849] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F2C849]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#F2C849] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F2C849]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#F2C849]" />
                <a href="tel:+27 82 435 5370" className="text-gray-300 hover:text-[#F2C849]">
                +27 82 435 5370
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#F2C849]" />
                <a href="mailto:info@aheo.org" className="text-gray-300 hover:text-[#F2C849]">
                  info@aheo.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#F2C849] flex-shrink-0" />
                <span className="text-gray-300">
                  Suite 1018, 6 Waxbill Street,<br />
                  Mbombela, 1200<br />
                  South Africa
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F2C849]">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events and awards.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2C849]"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {currentYear} African Health Excellence Organisation. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-[#F2C849] text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#F2C849] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;