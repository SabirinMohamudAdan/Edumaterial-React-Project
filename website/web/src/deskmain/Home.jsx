import React from 'react';
import video from './Images/veu.mp4'; // Update the path to the correct video file

function Home() {
  return (
    <div>
      <video className="absolute inset-0 w-full h-full object-cover z-0" src={video} autoPlay loop muted />
      <div className="absolute inset-0 z-10"></div>
      <div className="relative z-30 text-center text-white p-12 md:p-20">
        <h2 className="text-black-500 text-4xl font-bold mt-8">
          Edu Material <span className="text-pink-500">Hub</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8 mt-6 leading-relaxed font-Poppins">
          Education Materials Are Crucial In Shaping The Learning Experience And Delivering.
          Education Materials Are Foundational To Effective Learning, Future Careers And Personal Lives.
        </p>
      </div>
    </div>
  );
}

export default Home;
