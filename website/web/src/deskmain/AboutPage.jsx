import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import image2 from './Images/bg23.jpg';

function AboutPage() {
  return (
    <div className="bg-gray-100 py-12 md:py-20 mt-12 md:mt-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:order-2 mb-6 md:mb-0">
          <img src={image2} alt="About Us Image" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 md:order-1 md:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-pink-600 mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 list-item-2">
            {/* <span className="text-4xl text-gray-900 font-bold">
              At Edu Material Hub
            </span> */}
            
            We are dedicated to enriching the educational journey for learners. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mauris ut odio tincidunt placerat. Nullam molestie vehicula eros nec mattis.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/MoreAboutUs" className="bg-pink-600
             hover:bg-pink-700 ml-20 text-white px-8 py-3 rounded-md 
             font-medium flex items-center transition duration-300 ease-in-out">
              Learn More <FaArrowRight className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;