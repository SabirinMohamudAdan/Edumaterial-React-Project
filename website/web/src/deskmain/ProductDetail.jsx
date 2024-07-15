// src/deskmain/ProductDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import bog11 from './Images/bog11.jpg';
import bog4 from './Images/bog4.jpg';
import bog12 from './Images/bog12.jpg';
import bog7 from './Images/bog7.jpg';
import image5 from './Images/bage6.jpg';
import image6 from './Images/bag3.jpg';
import image7 from './Images/bag4.jpg';
import image8 from './Images/bag5.jpg';
import image9 from './Images/era7.jpg';
import image10 from './Images/era4.jpg';
import image14 from './Images/pen3.jpg';
import image15 from './Images/pen4.jpg';


const products = [
  { id: 1, name: "Book1", price: "$12", rating: 5, image: bog11, description: 'Detailed description for Book1' },
  { id: 2, name: "Book2", price: "$8", rating: 4, image: bog4, description: 'Detailed description for Book2' },
  { id: 3, name: "Reading Book", price: "$10", rating: 4, image: bog12, description: 'Detailed description for Reading Book' },
  { id: 4, name: "Book3", price: "$15", rating: 5, image: bog7, description: 'Detailed description for Book3' },
  { id: 5, name: "Book4", price: "$9", rating: 3, image: bog11,
     description: 'Detailed description for Book4' },
    
  { id: 6, name: "Rucksack", price: "$7", rating: 9, image: image5,
     description: 'Detailed description for pack' },
     { id: 7, name: "Straps", price: "$5.3", rating: 7, image: image6,
      description: 'Detailed description for pack' },
      { id: 8, name: "Nylon", price: "$8", rating: 6, image: image7,
        description: 'Detailed description for pack' },
        { id: 9, name: "Hand Bags", price: "$10", rating: 8, image: image8,
          description: 'Detailed description for pack' },
          { id: 10, name: "Custom Engraved", price: "$4", rating: 10, image: image10,
            description: 'Detailed description for pack' },
            { id: 11, name: "Dry Erase Strip", price: "$3", rating: 9, image:
               image9,
              description: 'Detailed description for ' },
              { id: 12, name: "Marvy", price: "$4", rating: 11, image:
                 image14,
                description: 'Detailed description for pack' },
                { id: 13, name: "Jinhao", price: "$3", rating: 12,
                   image:
                   image15,
                  description: 'Detailed description for ' },


];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 10);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-100 py-12 mt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">{product.name}</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
          <div className="md:ml-8 mt-8 md:mt-0">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {product.description}</p>
            <p className="text-2xl text-gray-800 mb-4">
              {product.price}</p>
            <div className="flex mb-6">
              {Array.from({ length: product.rating }, (_, index) => (
                <FaStar key={index} className="text-yellow-500 ml-1" />

              ))}
            </div>
            <Link to="/products" 
            className="bg-yellow-500 hover:bg-yellow-600
             text-white px-6 py-3 rounded-md font-medium">
              Back to Product
            </Link>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-700 mt-12">Related Books</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="m-4 p-4 bg-white rounded-lg shadow-lg w-60">
              <img src={relatedProduct.image} alt={relatedProduct.name}
               className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                {relatedProduct.name}</h3>
              <p className="text-lg text-gray-600">
                {relatedProduct.price}</p>
              <div className="flex mb-4">
                {Array.from({ length: relatedProduct.rating }, 
                (_, index) => (
                  <FaStar key={index} className="text-yellow-500 ml-1" />
                ))}
              </div>
              <Link to={`/product/${relatedProduct.id}`} className="text-blue-500 hover:text-blue-700">
                View Details
              </Link>
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
