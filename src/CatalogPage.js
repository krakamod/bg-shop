import React from 'react';

function CatalogPage() {
  return (
    <div className="catalog-page">
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
            <li><a href="#categories">Categories</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#bestsellers">Bestsellers</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
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
        <h1>Catalog</h1>
        <div className="product-listings">
          <div className="product">
            <img src="game1.png" alt="Game 1" />
            <h2>Game 1</h2>
            <p>Description of Game 1</p>
            <p>Price: $29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="game2.png" alt="Game 2" />
            <h2>Game 2</h2>
            <p>Description of Game 2</p>
            <p>Price: $39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="game3.png" alt="Game 3" />
            <h2>Game 3</h2>
            <p>Description of Game 3</p>
            <p>Price: $49.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="featured-products">
          <h2>Featured Products</h2>
          <div className="product">
            <img src="featured1.png" alt="Featured 1" />
            <h2>Featured Game 1</h2>
            <p>Description of Featured Game 1</p>
            <p>Price: $59.99</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="customer-reviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <p>Review 1: Great game!</p>
            <p>Rating: ★★★★★</p>
          </div>
          <div className="review">
            <p>Review 2: Fun for the whole family.</p>
            <p>Rating: ★★★★☆</p>
          </div>
        </div>
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          <p>Items in cart: 0</p>
        </div>
        <div className="security-badges">
          <img src="security.png" alt="Security Badge" />
          <p>Your payment information is safe with us.</p>
        </div>
        <div className="contact-information">
          <h2>Contact Information</h2>
          <p>Email: support@boardgamesshop.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </main>
    </div>
  );
}

export default CatalogPage;
