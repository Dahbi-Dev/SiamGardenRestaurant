// pages/Menu.js

import m0 from '../assets/Menu/m0.png'
import m1 from '../assets/Menu/m1.png'
import m2 from '../assets/Menu/m2.png'
import m3 from '../assets/Menu/m3.png'
import m4 from '../assets/Menu/m4.png'
import m5 from '../assets/Menu/m5.png'
import m6 from '../assets/Menu/m6.png'


const menuItems = [
  {
    name: "Grilled Salmon",
    price: "$24.99",
    image: m1,
    description: "Fresh Atlantic salmon with herbs",
  },
  {
    name: "Beef Wellington",
    price: "$34.99",
    image: m2,
    description: "Classic beef dish with mushroom duxelles",
  },
  {
    name: "Pasta Carbonara",
    price: "$18.99",
    image: m3,
    description: "Creamy pasta with pancetta",
  },
  {
    name: "Caesar Salad",
    price: "$12.99",
    image: m4,
    description: "Fresh romaine with our special dressing",
  },
  {
    name: "Mushroom Risotto",
    price: "$19.99",
    image: m5,
    description: "Creamy arborio rice with wild mushrooms",
  },
  {
    name: "Chocolate Fondant",
    price: "$9.99",
    image: m6,
    description: "Warm chocolate cake with vanilla ice cream",
  },
];

const Menu = () => {
  return (
    <section className="pt-16  dark:bg-dark-primary">
      <div className="container mx-auto">
        <div className="relative h-64 mb-16 ">
          <img
            src={m0 ? m0 : "https://placehold.co/1920x400"}
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Our Menu</h2>
          </div>
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:bg-dark-primary m-5 sm:m-16 ">
          {menuItems.map((item, index) => (
            <div key={index} className=" rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 dark:bg-dark-primary dark:text-gray-300">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className=" mb-4">{item.description}</p>
                <p className="text-xl font-bold ">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
