import React, { useState } from 'react';

function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('popularity');

  const categories = [
    {
      name: 'Strategy Games',
      image: 'strategy.jpg',
      description: 'Games that require careful planning and strategy.',
      reviews: 120,
      rating: 4.5,
    },
    {
      name: 'Family Games',
      image: 'family.jpg',
      description: 'Fun games for the whole family to enjoy.',
      reviews: 80,
      rating: 4.2,
    },
    {
      name: 'Card Games',
      image: 'card.jpg',
      description: 'Classic and modern card games for all ages.',
      reviews: 60,
      rating: 4.0,
    },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCategories = filteredCategories.sort((a, b) => {
    if (filter === 'price') {
      return a.price - b.price;
    } else if (filter === 'popularity') {
      return b.reviews - a.reviews;
    } else if (filter === 'ratings') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="categories-page">
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
          <input
            type="text"
            placeholder="Search for categories..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <main>
        <div className="filters">
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="ratings">Ratings</option>
          </select>
        </div>
        <div className="category-listings">
          {sortedCategories.map(category => (
            <div className="category" key={category.name}>
              <img src={category.image} alt={category.name} />
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <p>Reviews: {category.reviews}</p>
              <p>Rating: {category.rating} ★</p>
              <a href="#shop-now" className="cta">Shop Now</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CategoriesPage;
