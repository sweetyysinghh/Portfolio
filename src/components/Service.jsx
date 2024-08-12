import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build and deploy dynamic, responsive web applications using modern technologies such as React, Next.js, and Flask.",
  },
  {
    id: 2,
    title: "Custom Machine Learning Solutions",
    description: "Develop tailored machine learning models and algorithms for predictive analytics, including inventory and customer behavior forecasting.",
  },
  {
    id: 3,
    title: "IT Infrastructure Management and Technical Analyst",
    description: "Provide support for IT infrastructure, including application deployment, device configuration, client service, and system optimization.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
