import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Backgroun from './deskmain/Home'; // Import the Home component
import Nann from './deskmain/Nann';
import ProductPage from './deskmain/ProductPage';
import AboutPage from './deskmain/AboutPage';
import Service from './deskmain/Service';
import ContactPage from './deskmain/ContactPage';
import MoreAboutUs from './deskmain/MoreAboutUs';
import ProductDetail from './deskmain/ProductDetail';
import Customer from './deskmain/Customer';

// import CartDetails from './deskmain/CartDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <ConditionalComponents />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Route for the Home page */}
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

const HomePage = () => (
  <>
    <AboutPage />
    <Service />
    <Customer />
    <ProductPage />
    <ContactPage />
    {/* <footer write here /> */}
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
