import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const Navbar = ({ onSectionChange, activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'destinations', text: 'Destinations' },
    { id: 'tour-packages', text: 'Tour Packages' },
    { id: 'group-tours', text: 'Group Tours' },
    { id: 'customized-tours', text: 'Customized Tours' },
  ];

  return (
    <nav className="fixed w-full z-50" style={{ background: 'linear-gradient(to right, skyblue, green)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="images/logo.jpg" 
              alt="Suttrula Tours and Travels" 
              className="h-12 w-auto"
              onClick={() => handleNavClick('home')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-white hover:text-blue-700 transition-colors duration-200 ${
                  activeSection === link.id ? 'font-semibold border-b-2 border-white' : ''
                }`}
              >
                {link.text}
              </button>
            ))}
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-white" />
              <span className="text-white">+49 1514 0924168</span>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`fixed inset-y-0 right-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left py-2 text-gray-800 hover:text-green-600 transition-colors duration-200 ${
                    activeSection === link.id ? 'font-semibold text-green-600' : ''
                  }`}
                >
                  {link.text}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-800">
                  <Phone size={20} className="text-green-600" />
                  <span>+49 1514 0924168</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;