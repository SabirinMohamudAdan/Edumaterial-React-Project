import React from 'react';
import { Link } from 'react-router-dom';
import { FaGift, FaBook, FaShippingFast, FaStore, FaLaptop, FaTags }
 from 'react-icons/fa';
 import { FaLocust } from "react-icons/fa6";
import sampleProperty1 from './images1/2.jpg';
import sampleProperty2 from './images1/3.jpg';
import sampleProperty3 from './images1/4.jpg';

const services = [
    { icon: <FaTags size={32} />, title: 'Offers' },
    { icon: <FaShippingFast size={32} />, title: 'Delivery' },
    { icon: <FaStore size={32} />, title: 'Shop' },
    { icon: <FaGift size={32} />, title: 'Gifts' },
    { icon: <FaBook size={32} />, title: 'Book' },
    { icon: <FaLaptop size={32} />, title: 'Laptop Service' }
];

const Service = () => {
    return (
        <>
            {/* Section Header */}
            <div className="text-center py-10  mt-20">
                <h1 className="text-4xl font-semibold">Our Services</h1>
                <p className="text-md text-gray-600 mt-2">Discover the variety of services we offer</p>
            </div>

            {/* Display Icons */}
            <div className="py-6 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="text-center transition transform hover:scale-105">
                                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-pink-600 text-white rounded-full">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                            </div>
                        ))}
                      
                      
                    </div>
                </div>
            </div>

            {/* Display Images with Names and Prices */}
            <section className="properties">
                <h1>We buy The <span className="highlight">Best</span> Based On The <span className="highlight">edumaterial equipments</span> That You Like</h1>
                <h2>meet our services</h2>
                <div className="property-cards">
                    <div className="property-card">
                        <img src={sampleProperty1} alt="Property 1" />
                        <h3>top person</h3>
                        <h2>Juweria Dahir Abdirahman</h2>
                    </div>
                    <div className="property-card">
                        <img src={sampleProperty2} alt="Property 2" />
                        <h3>the assistant.</h3>
                        <p>Sabirin Mohamud Adan</p>
                    </div>
                    <div className="property-card">
                        <img src={sampleProperty3} alt="Property 3" />
                        <h3>Financial Officer</h3>
                        <p>Sabirin Mohamed Ali</p>
                    </div>
                </div>

                    {/* Link to Customer Page */}
                    <div className="text-center transition 
                    transform hover:scale-105 mt-20">
                            <Link to="/customer" className="block">
                                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-pink-600 text-white rounded-full">
                                    <FaLocust  size={32} />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
                            </Link>
                        </div>
            </section>
        </>
    );
};

export default Service;