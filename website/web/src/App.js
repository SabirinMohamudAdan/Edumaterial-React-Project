// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nann from './deskmain/Nann';

import AboutPage from './deskmain/AboutPage';
import Service from './deskmain/Service';
import ContactPage from './deskmain/ContactPage';

import ProductDetail from './deskmain/ProductDetail';
import ProductPage from './deskmain/ProductPage';
 
import Customer from './deskmain/Customer';
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
        
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;