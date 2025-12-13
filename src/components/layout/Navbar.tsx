import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MenuItem } from '../../types';
import { NAVIGATION } from '../../constants';
import { useClickOutside } from '../../hooks';
import { scrollToElement, getHashFromUrl } from '../../utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Use custom hook for click outside
  useClickOutside(menuRef, () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  });

  // Get menu items from constants
  const leftMenuItems = NAVIGATION.leftMenu;
  const rightMenuItems = NAVIGATION.rightMenu;

  const handleMenuClick = (path: string) => {
    setIsOpen(false);
    setActiveSubmenu(null);

    const hash = getHashFromUrl(path);
    if (hash) {
      setTimeout(() => scrollToElement(hash), 100);
    }
  };

  const MenuItem = ({ item, side = 'left' }: { item: MenuItem, side?: 'left' | 'right' }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setActiveSubmenu(item.title)}
      onMouseLeave={() => setActiveSubmenu(null)}
    >
      <Link
        to={item.path}
        className={`text-[#2B2A29] hover:text-[#962326] px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors ${
          location.pathname === item.path ? 'text-[#962326]' : ''
        }`}
        onClick={() => handleMenuClick(item.path)}
      >
        {item.title}
        {item.submenu && <ChevronDown size={16} />}
      </Link>
      
      {item.submenu && activeSubmenu === item.title && (
        <div 
          className={`absolute ${
            side === 'right' ? 'right-0' : 'left-0'
          } mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
        >
          <div className="py-1">
            {item.submenu.map((subItem: MenuItem, index: number) => (
              <Link
                key={index}
                to={subItem.path}
                className="block px-4 py-2 text-sm text-[#2B2A29] hover:bg-[#F2C849] hover:text-white transition-colors"
                onClick={() => handleMenuClick(subItem.path)}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left Menu */}
          <div className="hidden lg:flex items-center flex-1">
            <div className="flex space-x-4">
              {leftMenuItems.map((item) => (
                <MenuItem key={item.title} item={item} />
              ))}
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src="logo.png"
                alt="AHEO Logo"
                className="h-24 w-auto max-h-full"
              />
            </Link>
          </div>

          {/* Right Menu */}
          <div className="hidden lg:flex items-center flex-1 justify-end">
            <div className="flex space-x-4">
              {rightMenuItems.map((item) => (
                <MenuItem key={item.title} item={item} side="right" />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2B2A29] hover:text-[#962326] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...leftMenuItems, ...rightMenuItems].map((item) => (
              <div key={item.title}>
                <Link
                  to={item.path}
                  className="block text-[#2B2A29] hover:text-[#962326] px-3 py-2 text-base font-medium"
                  onClick={() => setActiveSubmenu(activeSubmenu === item.title ? null : item.title)}
                >
                  <div className="flex justify-between items-center">
                    {item.title}
                    {item.submenu && <ChevronDown size={16} />}
                  </div>
                </Link>
                
                {item.submenu && activeSubmenu === item.title && (
                  <div className="pl-4">
                    {item.submenu.map((subItem: MenuItem, index: number) => (
                      <Link
                        key={index}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm text-[#2B2A29] hover:text-[#962326]"
                        onClick={() => handleMenuClick(subItem.path)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;