import React from 'react';
import step1Image from './images1/6.jpg';
import step2Image from './images1/man3.jpg';
import step3Image from './images1/8.jpg';
import step4Image from './images1/man2.jpg';  // Assuming you have this additional image
import './Customer.css';


function Customer() {
  const customers = [
    {
      image: step1Image,
      name: 'Asma ayaanle',
      testimonial: '“I stumbled upon EduMaterial Hub while preparing for my university exams. The detailed and meticulously organized study guides, practice tests,  I highly recommend their services.”'
    },
    {
      image: step2Image,
      name: 'Azmar Mohamed',
      testimonial: '“I found EduMaterial Hub incredibly helpful for my certification exams. The resources available are top-notch and very up to date.”'
    },
    {
      image: step3Image,
      name: 'Siman ALi',
      testimonial: '“Thanks to EduMaterial Hub, I aced my exams! The explanations and coverage of topics are comprehensive and easy to understand.”'
    },
    {
      image: step4Image,
      name: 'Zakeria Ab/kareem',
      testimonial: '“The video tutorials and practice tests from EduMaterial Hub made it possible for me to succeed in a very competitive exam environment.”'
    }
  ];

  return (
    <section className=" mt-40">
      <h1 className="section-title">What Our Customers Say</h1>
      <div className="steps">
        {customers.map((customer, index) => (
          <div key={index} className="step">
            <img src={customer.image} alt={`Customer ${index + 1}`} />
            <h5>{customer.name}</h5>
            <p>{customer.testimonial}</p>
          </div>
        ))}
      </div>
      <footer className=" bg-slate-400 text-white p-4 mt-auto">
      <div className="container mx-white p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold mb-2">About Us</h4>
            <p className="text-gray-600">
            Welcome to EduMaterial, your go-to 
            source for high-quality educational
             resources. Our mission is to empower educators,
              students, and parents with comprehensive,
               curriculum-aligned materials that foster effective
                learning and teaching.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="list-none mb-4">
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900" href="#">Home</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900" href="#">About</a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold mb-2">Social Media</h4>
            <ul className="list-none mb-4">
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900" 
                href="#">
                  <i className="fab fa-facebook-f mr-2" />
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900" href="#">
                  <i className="fab fa-twitter mr-2" />
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-900" href="#">
                  <i className="fab fa-instagram mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600 text-center">
          Copyright 2024 EDUMATERIAL. All rights reserved.
        </p>
      </div>
    </footer>
    </section>
  );
}

export default Customer;
