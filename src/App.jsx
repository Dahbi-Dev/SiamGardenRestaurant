// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About.jsx';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';



const App = () => {
  return (
    <div className="dark:bg-dark-primary dark:text-gray-100">
      <ThemeProvider>
        <Router>
          <div className="relative">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;