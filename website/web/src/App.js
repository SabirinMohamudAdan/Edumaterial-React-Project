// src/App.js
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
>>>>>>> upstream/main
import './App.css';

import Nann from './deskmain/Nann';

import AboutPage from './deskmain/AboutPage';
import Service from './deskmain/Service';
import ContactPage from './deskmain/ContactPage';
import MoreAboutUs from './deskmain/MoreAboutUs';
import ProductDetail from './deskmain/ProductDetail';
import Customer from './deskmain/Customer';
<<<<<<< HEAD
import Home from './deskmain/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Nann />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the Home page */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/offers" element={<Service />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/more-about-us" element={<MoreAboutUs />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
=======


// import { ProductProvider } from './context/ProductContext';
// import { CartProvider, useCartContext } from './context/CartContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <NavBar />
            <ConditionalComponents />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/offers" element={<Service />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/more-about-us" element={<MoreAboutUs />} />
              
            
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

const NavBar = () => {
  const { state } = useCartContext();
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">EduMaterial Hub</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </Link>
          <Link to="/products" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Products
          </Link>
          <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Contact
          </Link>
        </div>
        <div>
          <Link to="/cart" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => (
  <>
    <AboutPage />
    <Service />
    <Customer />
    <ProductList />
    <ContactPage />
  </>
);

const ConditionalComponents = () => {
  const location = useLocation();
  const isProductDetailPage = location.pathname.startsWith('/product/');

  if (isProductDetailPage) {
    return null;
  }

  return (
    <>
      <Nann />
      <Backgroun />
    </>
  );
};

export default App;
>>>>>>> upstream/main
