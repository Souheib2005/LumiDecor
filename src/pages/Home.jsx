import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title"></h1>
        <nav className="nav-links">
 
        </nav>
        <h2 className="hero-subtitle">Welcome to LumiDécor</h2>
        <p className="hero-text">
          Discover elegant and modern lighting solutions to brighten your home. Shop from our curated
          selection of lamps, LED strips, and decorative lights.
        </p>
      </section>

      {/* Product Preview Section */}
      <section className="products-preview">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src="/aurora-glow.jpg" alt="Lamp" />
            <h3>Aurora Glow Lamp</h3>
            <p>Warm and cozy light for your room.</p>
            <p>$45</p>
          </div>
          <div className="product-card">
            <img src="/cozy-night-light.jpg" alt="LED Strip" />
            <h3>Cozy Night Light</h3>
            <p>RGB lighting strip with remote control.</p>
            <p>$30</p>
          </div>
          <div className="product-card">
            <img src="/led-strip-vibe.jpg" alt="Decorative Light" />
            <h3>LED Strip Vibe</h3>
            <p>Add ambiance to any space.</p>
            <p>$35</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>120 Sparks St, Ottawa, ON</p>
          <p>Email: support@lumidecor.ca</p>
          <p>Phone: (613) 555-1234</p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Mon–Fri: 9am – 6pm</p>
          <p>Sat: 10am – 4pm</p>
          <p>Sun: Closed</p>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            LumiDécor offers beautiful, calming lighting for your home, from lamps to LED strips.
            Designed to bring ambiance to every room.
          </p>
          <p><em>This website was created by Souheib Al-ahdal.</em></p>
        </div>
        <div className="footer-bottom">
          <p>© 2025 LumiDécor. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
