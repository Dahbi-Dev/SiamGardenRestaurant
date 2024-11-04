import { useState, useEffect, createContext, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
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

// Lazy-loaded components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Main App Component
const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await Promise.all([
          preloadImage('./assets/Home/home.png'),
          preloadImage('./assets/Home/home2.png'),
          preloadImage('./assets/Home/home3.png'),
          preloadImage('./assets/Home/home_1.png'),
          preloadImage('./assets/Home/home_2.png'),
          preloadImage('./assets/About/ab.png'),
          preloadImage('./assets/About/full.png'),
          preloadImage('./assets/Contact/co.png'),
          preloadImage('./assets/Menu/m0.png'),
          preloadImage('./assets/Menu/m2.png'),
          preloadImage('./assets/Menu/m3.png'),
          preloadImage('./assets/Menu/m4.png'),
          preloadImage('./assets/Menu/m5.png'),
          preloadImage('./assets/Menu/m6.png'),
          loadFont('./assets/Fonts/BonaNovaSC-Regular.ttf'),
        ]);
        setAppLoaded(true);
      } catch (error) {
        console.error('Error preloading assets:', error);
        setAppLoaded(true); // Allow app to load even if assets fail
      }
    };

    // Set a maximum loading time to prevent infinite loading
    const timeout = setTimeout(() => setAppLoaded(true), 10000);
    loadAssets();

    return () => clearTimeout(timeout);
  }, []);

  // Helper functions
  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  const loadFont = (src) => {
    return new Promise((resolve, reject) => {
      const font = new FontFace('MyFont', `url(${src})`);
      font.load().then(resolve).catch(reject);
    });
  };

  return (
    <div className="dark:bg-dark-primary dark:text-gray-100">
      <LoadingProvider>
        <ThemeProvider>
          {!appLoaded && <LoadingSpinner />}
          <Router>
            <div className="relative">
              <Suspense fallback={<LoadingSpinner />}>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </Suspense>
            </div>
          </Router>
        </ThemeProvider>
      </LoadingProvider>
    </div>
  );
};

export default App;
