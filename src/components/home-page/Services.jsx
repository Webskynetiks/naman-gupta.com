"use client";

import { FaBullseye, FaArrowsAlt, FaWater } from "react-icons/fa";

const services = [
  {
    icon: <FaBullseye className="text-6xl text-[#3d87dc] mb-4" />,
    title: "Financial Advisory",
    description:
      " Providing strategic advice on stocks and market opportunities to grow wealth effectively.",
  },
  {
    icon: <FaArrowsAlt className="text-6xl text-orange-500 mb-4" />,
    title: "Investment Analysis",
    description:
      "Expertise in financial analysis, valuation and market trends to guide strategic investment decisions.",
  },
  {
    icon: <FaWater className="text-6xl text-[#3d87dc] mb-4" />,
    title: "Performance Analysis",
    description:
      "Assessing financial performance and identifying growth opportunities to enhance strategic outcomes.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-[2rem] font-bold text-gray-800 mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
