// pages/Home.js
import  { useState, useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import img1 from '../assets/Home/home.png'
import img2 from '../assets/Home/home2.png'
import img3 from '../assets/Home/home3.png'
import img4 from '../assets/Home/home_1.png'
import img5 from '../assets/Home/home_2.png'

const images = [
  // "https://placehold.co/1920x1080",
  // "https://placehold.co/1920x1080",
  // "https://placehold.co/1920x1080",
  img1,
  img2,
  img3,
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id='home' className="h-screen relative overflow-hidden mb-32">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <img 
            src={images[currentImage]} 
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-gray-300">
              <h1 className="text-6xl font-bold mb-4">Fine Dining Excellence</h1>
              <p className="text-xl ">Experience culinary artistry at its finest</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16  dark:bg-dark-primary mb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:pr-8 p-2 dark:text-gray-300">
              <h2 className="text-3xl font-bold mb-4">Our Signature Dishes</h2>
              <p className="text-gray-400 mb-2">Experience our chef&apos;s carefully curated menu featuring the finest ingredients and innovative cooking techniques.</p>
            </div>
            <div className="md:w-1/2">
              <img src={img4 ? img4 :"https://placehold.co/600x400"} alt="Signature Dish" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center ">
            <div className="md:w-1/2 md:pl-8 p-2 mb-2 dark:text-gray-300">
              <h2 className="text-3xl font-bold mb-4">Elegant Atmosphere</h2>
              <p className="text-gray-400 ">Immerse yourself in our sophisticated dining environment designed for memorable experiences.</p>
            </div>
            <div className="md:w-1/2">
              <img src={img5 ? img5 :"https://placehold.co/600x400"} alt="Restaurant Interior" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;
