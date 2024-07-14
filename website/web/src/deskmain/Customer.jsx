import React from 'react';
import step1Image from './images1/6.jpg';
import step2Image from './images1/7.jpg';
import step3Image from './images1/8.jpg';
import step4Image from './images1/6.jpg';  // Assuming you have this additional image
import './Customer.css';


function Customer() {
  const customers = [
    {
      image: step1Image,
      name: 'Customer Name 1',
      testimonial: '“I stumbled upon EduMaterial Hub while preparing for my university exams. The detailed and meticulously organized study guides, practice tests,  I highly recommend their services.”'
    },
    {
      image: step2Image,
      name: 'Customer Name 2',
      testimonial: '“I found EduMaterial Hub incredibly helpful for my certification exams. The resources available are top-notch and very up to date.”'
    },
    {
      image: step3Image,
      name: 'Customer Name 3',
      testimonial: '“Thanks to EduMaterial Hub, I aced my exams! The explanations and coverage of topics are comprehensive and easy to understand.”'
    },
    {
      image: step4Image,
      name: 'Customer Name 4',
      testimonial: '“The video tutorials and practice tests from EduMaterial Hub made it possible for me to succeed in a very competitive exam environment.”'
    }
  ];

  return (
    <section className="how-it-works">
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
    </section>
  );
}

export default Customer;
