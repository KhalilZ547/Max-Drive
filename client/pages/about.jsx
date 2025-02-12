import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Max Drive is a full-stack web application designed to manage a modern garage. 
        We offer a range of services including mechanical, electrical, and tuning services. 
        Our goal is to provide a seamless experience for garage management, ensuring that 
        all your needs are met efficiently and effectively.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="text-lg text-gray-700">
        Our mission is to simplify garage management for both service providers and customers. 
        We strive to enhance the quality of service through innovative solutions and exceptional customer support.
      </p>
    </div>
  );
};

export default About;
