import React from 'react';
import video from '../deskmain/Images/veu4.mp4'; // Adjust the video path as per your project structure

function Backgroun() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover z-0" src={video} autoPlay loop muted />

      {/* Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-30 text-center text-white p-12 md:p-20">
        <h2 className="text-black-500 text-4xl font-bold mt-6">
          Edu Material <span className="text-pink-500">Hub</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8 mt-6 leading-relaxed">
          Education Materials Are Crucial In Shaping The Learning Experience And Delivering.
          Educational Materials Are Foundational <br />To Effective Learning, Future Careers And Personal Lives.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi ullam repudiandae aperiam.
        </p>
        <button className="bg-pink-500 px-6 py-3 rounded-md text-white text-lg hover:bg-gray-500/30 mt-2 border-b-2 border-l-2 border-b-gray-950">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Backgroun;
