import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import './App.css';

function LandingPage() {
  return (
    <section className="landing-page">
      <h1 className="landing-title">Paradise Nursery</h1>
      <Link to="/plants" className="get-started-btn">
        Get Started
      </Link>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;