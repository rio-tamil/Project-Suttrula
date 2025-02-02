import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white"style={{ background: 'linear-gradient(to right, skyblue, green)' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Suttrula</h3>
            <p className="text-white-400">
              Making travel dreams come true since 2024. We specialize in group tours,
              customized holidays, and unforgettable travel experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={20} />
                <span>+49 1514 0924168</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} />
                <span>info@Suttrula.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="https://www.instagram.com/suttrula?igsh=cWJqdXh5Y25nOGRt" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-black-400">
            © {new Date().getFullYear()} Suttrula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;