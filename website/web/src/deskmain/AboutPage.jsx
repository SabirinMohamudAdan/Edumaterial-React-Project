import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import image2 from './Images/bg23.jpg'
function AboutPage() {
  return (
<<<<<<< HEAD
    <div className="bg-gray-100 py-27 mt-20">
      <div className="container mx-auto px-20">
        <h1 className="text-4xl md:text-5xl font-bold 
        text-center text-pink-600 mt-20">
          About Us
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6 px-6 justify-center items-center">
            <h2 className='  text-gray-950 text-4xl  font-bold'>
              At Edu  Material Hub,</h2>At Edu  Material Hub, we are dedicated to enriching the educational journey
               for learners 

            </p>

            {/* <div className="flex justify-center md:justify-start">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </button>
            </div> */}
      </div>

      
      <Link to="/MoreAboutUs"
         className="text-pink-600 font-bold text-lg hover:underline">
          Learn More About Us</Link>
    </div>
    
  );
=======
  <h1>AboutPage us</h1>

  )
>>>>>>> upstream/main
}

export default AboutPage;