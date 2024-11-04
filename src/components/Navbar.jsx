import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { darkMode, setDarkMode } = useTheme();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    // Show navbar on any route change except Home
    if (location.pathname !== '/') {
      setShowNav(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (location.pathname === '/') {
        if (currentScrollY > window.innerHeight - 100) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      } else {
        setShowNav(true); // Always show navbar on non-Home routes
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location]);

  // Function to hide navbar when clicking on "Home"
  const handleHomeClick = () => {
    setShowNav(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        showNav
          ? 'translate-y-0 bg-white dark:bg-dark-primary shadow-lg dark:shadow-none'
          : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 relative">
        {/* Main Navigation Links */}
        <div className="flex flex-col items-center justify-center pt-2">
          {/* Small Notch */}
          <div className="relative mb-2">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-dark-primary rounded-full shadow-lg" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 shadow-inner flex items-center justify-center transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-orange-500" />
              )}
            </button>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-12 h-12">
            <Link
              to="/"
              onClick={handleHomeClick} // Hide navbar on "Home" link click
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
