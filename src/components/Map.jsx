import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const iframeUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.4925657782095!2d-116.95660716224903!3d33.74692619943049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6f39616aa053%3A0x19d2151e19524d7f!2sSiam%20Garden%20Restaurant!5e1!3m2!1sen!2sma!4v1730737077600!5m2!1sen!2sma";

const Map = () => (
  <div className="w-full max-w-4xl mx-auto my-8 rounded-lg border border-gray-300  dark:border-gray-600  overflow-hidden">
    <div className="p-4 dark:text-gray-300 dark:bg-dark-primary">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-300">
        Our Locations
      </h1>
      <div className="grid md:grid-cols-1 gap-8">
        <div className=" rounded-lg  overflow-hidden">
          <div className="p-6 text-gray-800 dark:text-gray-300">
            <h2 className="text-2xl font-semibold mb-2 text-center underline">Siam Garden Restaurant</h2>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 max-h-[500px]">
              <iframe
              className="rounded-lg h-96"
                src={iframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Get Directions Button positioned inside the iframe */}
            <button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/rYvKpRi7GWXuHnV86",
                  "_blank"
                )
              }
              className="absolute bottom-4 right-4 bg-black text-white dark:bg-white dark:text-gray-900 rounded-lg px-4 py-2 "
              style={{ zIndex: 10 }}
            >
              <Navigation className="w-4 h-4 inline-block" />
              <span className="ml-1">Get Directions</span>
            </button>

            {/* Overlay for styling */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-800 opacity-20 rounded-b-lg"></div>
          </div>

          <div className="p-6 text-gray-800 dark:text-gray-300 text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <p className="text-sm">
                1527 E Florida Ave, Hemet, CA 92544, United States
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Phone className="w-4 h-4 text-gray-500" />
              <p className="text-sm">Phone: +1 (555) 123-4567</p>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Mail className="w-4 h-4 text-gray-500" />
              <p className="text-sm">Email: info@restaurant.com</p>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <p className="text-sm">Hours: Mon-Sun, 11am - 11pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Map;
