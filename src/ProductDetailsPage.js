import React from 'react';

function ProductDetailsPage() {
  return (
    <div className="product-details-page">
      <header className="header">
        <div className="header-logo">
          <img src="logo.png" alt="Shop Logo" />
          <h1>Product Title</h1>
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
      </header>
      <main>
        <div className="product-title">
          <h1>Product Title</h1>
        </div>
        <div className="product-images">
          <img src="image1.jpg" alt="Product Image 1" />
          <img src="image2.jpg" alt="Product Image 2" />
        </div>
        <div className="product-description">
          <h2>Description</h2>
          <p>Detailed description of the product.</p>
        </div>
        <div className="product-specifications">
          <h2>Specifications</h2>
          <ul>
            <li>Size: Medium</li>
            <li>Dimensions: 10x10x10 cm</li>
            <li>Weight: 1 kg</li>
            <li>Color: Red</li>
            <li>Material: Plastic</li>
          </ul>
        </div>
        <div className="product-pricing">
          <h2>Pricing and Availability</h2>
          <p>Price: $49.99</p>
          <p>Availability: In Stock</p>
        </div>
        <div className="customer-reviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <p>Review 1: Great product!</p>
            <p>Rating: ★★★★★</p>
          </div>
          <div className="review">
            <p>Review 2: Worth the price.</p>
            <p>Rating: ★★★★☆</p>
          </div>
        </div>
        <div className="cta-buttons">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
        <div className="shipping-information">
          <h2>Shipping Information</h2>
          <p>Shipping options, costs, and estimated delivery times.</p>
        </div>
        <div className="return-policy">
          <h2>Return Policy</h2>
          <p>Information about the return policy.</p>
        </div>
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="product">
            <img src="related1.jpg" alt="Related Product 1" />
            <h3>Related Product 1</h3>
            <p>Price: $29.99</p>
          </div>
          <div className="product">
            <img src="related2.jpg" alt="Related Product 2" />
            <h3>Related Product 2</h3>
            <p>Price: $39.99</p>
          </div>
        </div>
        <div className="social-sharing">
          <h2>Share this product</h2>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </main>
    </div>
  );
}

export default ProductDetailsPage;
