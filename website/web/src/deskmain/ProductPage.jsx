import React from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import image1 from './Images/bog11.jpg';
import image2 from './Images/bog4.jpg';
import image3 from './Images/bog12.jpg';
import image4 from './Images/10.jpg';
import image5 from './Images/bage6.jpg';
import image6 from './Images/bag3.jpg';
import image7 from './Images/bag4.jpg';
import image8 from './Images/bag5.jpg';
import image9 from './Images/era7.jpg';
import image10 from './Images/era4.jpg';
import image11 from './Images/era9.jpg';
import image12 from './Images/era11.jpg';
import image13 from './Images/pen10.jpg';
import image14 from './Images/pen3.jpg';
import image15 from './Images/pen4.jpg';
import image16 from './Images/pen9.jpg';

const products = [
  { id: 1, name: "Book1", price: "$12", rating: 5, image: image1 },
  { id: 2, name: "Book2", price: "$8", rating: 4, image: image2 },
  { id: 3, name: "Reading Book", price: "$10", rating: 4, image: image3 },
  { id: 4, name: "Book3", price: "$15", rating: 5, image: image4 },
  { id: 5, name: "Rucksack", price: "$12", rating: 5, image: image5 },
  { id: 6, name: "Straps", price: "$17", rating: 5, image: image6 },
  { id: 7, name: "Nylon", price: "$15", rating: 5, image: image7 },
  { id: 8, name: "Hand Bags", price: "$20", rating: 5, image: image8 },
  { id: 9, name: "Custom Engraved", price: "$4", rating: 5, image: image9 },
  { id: 10, name: "Dry Erase Strip", price: "$3", rating: 5, image: image10 },
  { id: 11, name: "Personalised Eraser", price: "$2.5", rating: 5, image: image11 },
  { id: 12, name: "Zazzle Eraser", price: "$2", rating: 5, image: image12 },
  { id: 13, name: "Ballpoint", price: "$2.4", rating: 5, image: image13 },
  { id: 14, name: "Daffolid", price: "$5", rating: 5, image: image14 },
  { id: 15, name: "Marvy", price: "$6", rating: 5, image: image15 },
  { id: 16, name: "Jinhao", price: "$7", rating: 5, image: image16 },
];

function ProductPage() {
  const { addToCart, removeFromCart, cart } = useCart();

  const isInCart = (productId) => cart.some(item => item.id === productId);

  return (
    <div className="bg-gray-100 pt-24">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Add your other components here */}
        </div>
      </div>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 translate-y-5">
          {products.map(product => (
            <div key={product.id}
             className="bg-white shadow-lg rounded-lg overflow-hidden
              transform hover:scale-105 transition duration-300">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} 
                className="w-full h-48 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg" />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-2">
                  {product.price}</p>
                <div className="flex">
                  {Array.from({ length: product.rating }, (_, index) => (
                    <FaStar key={index} className="text-yellow-500 ml-2" />
                  ))}
                </div>
                <button
                  className=" bg-slate-500 mt-2 ml-4
                   hover:bg-pink-400 text-white px-2 py-2 rounded-md flex items-center justify-center transform hover:scale-125 border-b-2 border-l-2 border-blue-300"
                  onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product)}
                >
                  <FaPlus className="mr-2" /> {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
       

              </div>
            </div>
            
          ))}
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
    </div>
  );
}

export default ProductPage;