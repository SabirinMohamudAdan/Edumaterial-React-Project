import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare,
   FaInstagramSquare, FaDribbbleSquare } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual form submission logic (e.g., sending data to backend or API)
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contacts py-12 md:py-20">
      <div className="container mx-auto shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-6">We're open for any suggestion or just to have a chat.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="text-lg font-semibold">ADDRESS:</h4>
                <p>  Hodan MOGADISHO</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="text-lg font-semibold">EMAIL:</h4>
                <p>info@EduMaterial.com</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="text-lg font-semibold">PHONE:</h4>
                <p>+252617171470</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-gray-200 p-3 rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-gray-200 p-3 rounded-lg focus:outline-none"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-gray-200 p-3 mt-4 w-full rounded-lg focus:outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Create a message here..."
                className="bg-gray-200 p-3 mt-4 w-full rounded-lg focus:outline-none"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md mt-4 transition duration-300 ease-in-out"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
   

        </div>
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
};

export default ContactPage;