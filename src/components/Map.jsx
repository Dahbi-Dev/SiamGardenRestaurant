import React from 'react';

const Map = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8  rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 dark:text-gray-300">
        <h2 className="text-2xl font-bold text-center mb-4">Our Location</h2>
      </div>
      
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.925934784328!2d-116.9606825709343!3d33.74731872345273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6f39616aa053%3A0x19d2151e19524d7f!2sSiam%20Garden%20Restaurant!5e1!3m2!1sen!2sma!4v1730654388906!5m2!1sen!2sma"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-b-lg"
        ></iframe>
        
        {/* Overlay for styling */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-800 opacity-20 rounded-b-lg"></div>
      </div>

      <div className="p-6 dark:text-gray-300 text-center">
        <p className="text-sm ">
          1527 E Florida Ave, Hemet, CA 92544, United States
        </p>
        <p className="text-sm  mt-1">Phone: +1 (555) 123-4567</p>
        <p className="text-sm  mt-1">Email: info@restaurant.com</p>
        <p className="text-sm  mt-1">Hours: Mon-Sun, 11am - 11pm</p>
      </div>
    </div>
  );
};

export default Map;
