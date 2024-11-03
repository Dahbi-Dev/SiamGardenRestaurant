import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

// Create Loading Context
const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-primary z-50">
    <div className="flex flex-col items-center space-y-4">
      <Loader2 className="w-12 h-12 animate-spin text-primary dark:text-white" />
      <p className="text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  </div>
);

// Main App Component
const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    // Simulate checking if all resources are loaded
    const loadApp = async () => {
      // Wait for initial resources to load
      await Promise.all([
        // Add your resource loading promises here
        new Promise(resolve => setTimeout(resolve, 1000)) // Minimum loading time
      ]);
      setAppLoaded(true);
    };

    loadApp();
  }, []);

  return (
    <div className="dark:bg-dark-primary dark:text-gray-100">
      <LoadingProvider>
        <ThemeProvider>
          {!appLoaded && <LoadingSpinner />}
          <Router>
            <div className="relative">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu  />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </LoadingProvider>
    </div>
  );
};

export default App;