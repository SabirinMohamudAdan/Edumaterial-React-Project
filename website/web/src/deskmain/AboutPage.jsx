import React from 'react';
import { Link } from 'react-router-dom';
function AboutPage() {
  return (
    <div className="bg-gray-100 py-27 mt-20">
      <div className="container mx-auto px-20">
        <h1 className="text-4xl md:text-5xl font-bold 
        text-center text-pink-600 mt-20">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This is the About Us page content. Add your content here.
        </p>
      </div>
      <Link to="/MoreAboutUs"
         className="text-pink-600 font-bold text-lg hover:underline">
          Learn More About Us</Link>
    </div>
    
  );
}

export default AboutPage;