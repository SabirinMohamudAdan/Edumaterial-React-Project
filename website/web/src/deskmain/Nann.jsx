import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaCartPlus, FaTimesCircle } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { SiMaterialformkdocs } from "react-icons/si";
import { useCart } from './CartContext';

function Nann() {
  const { cart } = useCart(); // Use cart context
  const [showCartDetails, setShowCartDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleCartDetails = () => {
    setShowCartDetails(!showCartDetails);
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleBackToProducts = () => {
    closeModal();
  };

  return (
    <div className=" bg-white border-b-2 flex justify-between items-center h-20 px-4 fixed top-0 left-0 right-0 z-10 hover:text-pink-400">
      <div className="">
        <h1 className="text-gray-500 flex">
          <SiMaterialformkdocs className='text-pink-500 mr-3' />
          Edu
          <span className="text-pink-500 text-3xl mr-2">Material</span>
          Hub
        </h1>
      </div>
      <ul className="hidden md:flex text-2xl text-gray-500">
        <li className="hover:text-pink-400"><Link to="/">Home</Link></li>
        <li className="hover:text-pink-400"><Link to="/about">About</Link></li>
        <li className="hover:text-pink-400"><Link to="/products">Products</Link></li>
        <li className="hover:text-pink-400"><Link to="/offers">Offers
        </Link></li>
        <li className="hover:text-pink-400"><Link to="/Customer">Customer
        </Link></li>
        
        <li className="hover:text-pink-400"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hidden md:flex text-pink-500 space-x-6 ">
        <FaUserAlt className="text-2xl hover:text-gray-400" />
        <GiEternalLove className="text-2xl hover:text-gray-400" />
        <FaCartPlus className=' text-2xl cursor-pointer' onClick={toggleCartDetails} />
        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full absolute top-2 right-2">{cart.length}</span>
      </div>

      {/* Modal for displaying cart details */}
      {showCartDetails && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 max-w-lg rounded-lg shadow-lg">
            <button className="ml-18 t-5 text-red-500 "
             onClick={toggleCartDetails}>
              <FaTimesCircle />
            </button>
            <h2 className="text-black  text-xl font-semibold mb-4">Cart Details</h2>
            {cart.map(product => (
              <div key={product.id} className="flex items-center space-x-4 mb-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md shadow-md" />
                <div>
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for displaying selected product details */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 max-w-lg rounded-lg shadow-lg">
            {/* <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
              Close
            </button> */}
            <h2 className="text-xl font-semibold mb-4">{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover mb-4" />
            <p className="text-gray-800 mb-2">Price: {selectedProduct.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={handleBackToProducts}>
              Back to Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nann;