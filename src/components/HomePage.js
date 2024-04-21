import React from 'react';
import Header from './Header';
import BestSellingProducts from './BestSellingProducts';
import Footer from './Footer';
import styles from '../styles/HomePage.css'

function HomePage() {
  return (
    <div>
      <Header />
      <HomeSection />
      <BestSellingProducts />
      <Footer />
    </div>
  );
}

function HomeSection() {
  return (
    <section className="homeSection">
      <div className="homePage">
        <header className="hp_header">
          <h1>Welcome to NV-Restro</h1>
          <p>India's finest cuisine, now in your city</p>
        </header>
      </div>
    </section>
  );
}

export default HomePage;
