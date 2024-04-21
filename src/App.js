import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Products" element={<AllProducts />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Contact" element={<Contact />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
};

export default App;
