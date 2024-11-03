// pages/Contact.js
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Map from '../components/Map';
import contactData from '../data/contact.json';
import co from '../assets/Contact/co.png'

const Contact = () => {
  return (
    <section className="pt-16 dark:bg-dark-primary">
      <div className="container mx-auto">
        {/* Header Image */}
        <div className="relative h-64 mb-16">
          <img src={co ? co : "https://placehold.co/1920x400"} alt="About Us Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 m-5 sm:m-5">
          {/* Phones */}
          <div className=" p-6 rounded-lg shadow-lg text-center dark:text-gray-300">
            <Phone className="mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            {contactData.phones.map((phone, index) => (
              <p key={index} className="">{phone}</p>
            ))}
          </div>

          {/* Emails */}
          <div className="dark:text-gray-300 p-6 rounded-lg shadow-lg text-center">
            <Mail className="mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            {contactData.emails.map((email, index) => (
              <p key={index} className="">{email}</p>
            ))}
          </div>

          {/* Addresses */}
          <div className="dark:text-gray-300 p-6 rounded-lg shadow-lg text-center">
            <MapPin className="mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            {contactData.addresses.map((address, index) => (
              <p key={index} className="">{address}</p>
            ))}
          </div>
        </div>

        {/* Opening Hours Card */}
        <div className="dark:text-gray-300 p-6 rounded-lg shadow-lg text-center mb-16 m-5 sm:m-5">
          <Clock className="mx-auto mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
          <div className=" space-y-2">
            {Object.entries(contactData.hours).map(([day, hours], index) => (
              <p key={index} className="text-sm">
                <span className="font-semibold">{day}:</span> {hours}
              </p>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className=" pb-10 m-2 sm:m-5 "><Map /></div>
      </div>
    </section>
  );
};

export default Contact;
