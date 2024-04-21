// Contact.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="contactSection">
        <h2 className="contactHeading">Contact Information</h2>
        <div className="contactInfo">
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
