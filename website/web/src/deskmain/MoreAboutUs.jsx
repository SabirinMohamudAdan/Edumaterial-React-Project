import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './Images/pen9.jpg'; // Replace with your image path
import image2 from './Images/pen10.jpg'; // Replace with your image path
import image3 from './Images/pen11.jpg'; // Replace with your image path

function MoreAboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: image1, text: 'Empowering Students with Knowledge' },
    { image: image2, text: 'Innovative Teaching Resources' },
    { image: image3, text: 'Lifelong Learning and Growth' },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-8">
          More About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Edu Material Hub, we strive to create a comprehensive educational experience for students and educators. Our platform offers a wide array of resources and tools to support learning and teaching across various subjects and disciplines. Whether you are a student seeking to enhance your knowledge or a teacher looking for innovative methods to engage your students, Edu Material Hub is here to help. We believe in the power of education to transform lives and are dedicated to fostering a vibrant community of learners and educators.
        </p>

        {/* Slider */}
        <div className="relative w-full max-w-4xl mx-auto mb-8">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform 
                  duration-1000 ${index === currentSlide ? 
                    'translate-x-0' : 'translate-x-full'}`}
                style={{ backgroundImage:`url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
                  <h2 className="text-2xl text-white font-bold text-center">{slide.text}</h2>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full">
            &#10094;
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full">
            &#10095;
          </button>
        </div>

        {/* Link to AboutPage */}
        <Link to="/about" className="text-pink-600 font-bold text-lg hover:underline">Learn More About Us</Link>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to support learners at every stage of their educational journey. With our diverse range of resources, students can delve deeper into subjects, educators can find new inspiration for their lessons, and lifelong learners can continue to expand their horizons. We are committed to providing high-quality educational materials that are accessible and engaging for everyone.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Join us at Edu Material Hub and be a part of a community that values knowledge, creativity, and continuous improvement. Together, we can create a brighter future through education.
        </p>
      </div>
    </div>
  );
}

export default MoreAboutUs;