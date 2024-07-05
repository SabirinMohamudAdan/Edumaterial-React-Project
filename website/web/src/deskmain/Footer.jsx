import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-screen p-4 md:p-6 lg:p-8">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold mb-2">About Us</h4>
            <p className="text-gray-600">
            Welcome to EduMaterial, your go-to source for high-quality educational resources. Our mission is to empower educators, students, and parents with comprehensive, curriculum-aligned materials that foster effective learning and teaching.            </p>
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
                <a className="text-gray-600 hover:text-gray-900" href="#">
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
  );
};

export default Footer;