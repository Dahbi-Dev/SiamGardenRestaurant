// pages/About.js
import Map from '../components/Map';
import ab1 from '../assets/About/ab.png'
import ab2 from '../assets/About/full.png'

const About = () => {
  return (
    <section className="pt-16  dark:bg-dark-primary">
      <div className="relative h-64 mb-16 ">
        <img src={ab1 ? ab1 : "https://placehold.co/1920x400"} alt="About Us Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-300 ">About Us</h2>
        </div>
      </div>
      <div className="container mx-auto px-4  dark:bg-dark-primary dark:text-gray-300">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={ab2 ? ab2 : "https://placehold.co/1920x400"} alt="Our Story" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-5">
            <h3 className="text-3xl font-bold mb-4">Our Story</h3>
            <p className="">Founded in 2010, our restaurant has been serving exceptional cuisine and creating memorable dining experiences for our guests. Our passionate team of chefs and staff are dedicated to providing the highest quality service and dishes.</p>
          </div>
        </div>
      </div>
        <div className="py-16 m-5 sm:m-5"><Map /></div>
    </section>
  );
};

export default About;