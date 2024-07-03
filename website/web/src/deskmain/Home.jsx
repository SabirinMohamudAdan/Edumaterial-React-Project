import React from 'react';
import video from '../deskmain/Images/bghome.jpg';


function Home() {
  return (
    <div className="  mt-10 relative w-full h-screen flex 
    items-center justify-center">
      {/* Video Background */}
      {/* <video className="absolute inset-0 w-full h-full object-cover z-0" 
      src={video} autoPlay loop muted /> */}
     <img className="absolute inset-0 w-full h-full object-cover z-0" 
      src={video}  />
      {/* Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-30 text-center text-white p-12 md:p-20">
        <h2 className="text-black-500 text-4xl font-bold mt-8">
          Edu Material <span className="text-pink-500">Hub</span><br/>
       </h2>
        <p className="text-2lg text-white mb-8 mt-6 leading-relaxed 
         font-Poppins">
          Education Materials Are Crucial In Shaping 
          The Learning Experience And well Delivering.<br/>
          Educational Materials Are Foundational 
          To Effective Learning, Future<br/> Careers And Personal Lives.
          
          
        </p>
        <button className="bg-pink-500 px-6 py-3 rounded-md text-white text-lg hover:bg-gray-500/30 mt-2 border-b-2 border-l-2 border-b-gray-950">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;
