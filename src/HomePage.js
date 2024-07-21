import React from 'react';

function HomePage() {
  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src="logo.png" alt="Shop Logo" />
          <h1>Board Games Shop</h1>
        </div>
        <p className="header-tagline">Your Ultimate Board Game Destination</p>
        <nav>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="/bestsellers">Bestsellers</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="/catalog">Catalog</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for games..." />
        </div>
        <div className="promotions">
          <p>Special Offer: Get 20% off on your first purchase!</p>
        </div>
        <a href="#shop-now" className="cta">Shop Now</a>
        <div className="visuals">
          <img src="visual1.png" alt="Visual 1" />
          <img src="visual2.png" alt="Visual 2" />
        </div>
        <div className="social-media-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </header>
      <main>
        <h1>Welcome to the Board Games Shop!</h1>
        <p>We offer a wide variety of board games for all ages and interests. Whether you're looking for a strategic game, a party game, or a family game, we have something for everyone.</p>
        <p>Our shop is dedicated to providing the best selection of board games, along with excellent customer service. Come visit us and discover your next favorite game!</p>
      </main>
    </div>
  );
}

export default HomePage;
