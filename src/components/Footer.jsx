import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" dark:bg-dark-primary dark:text-gray-100 mt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Fine Dining Restaurant</h3>
            <p className="text-gray-400">Exceptional cuisine and unforgettable experiences</p>
            <div className="mt-4">
              <p className="text-gray-400">123 Gourmet Street</p>
              <p className="text-gray-400">Culinary City, CC 12345</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className=" transition-colors">
                Home
              </Link>
              <Link to="/menu" className=" transition-colors">
                Menu
              </Link>
              <Link to="/about" className=" transition-colors">
                About Us
              </Link>
              <Link to="/contact" className=" transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className=" transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className=" transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className=" transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Fine Dining Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;