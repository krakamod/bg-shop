import React, { useState } from 'react';

function BestsellersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('popularity');

  const bestsellers = [
    {
      name: 'Top Game 1',
      image: 'topgame1.jpg',
      description: 'Description of Top Game 1',
      price: 29.99,
      reviews: 150,
      rating: 4.8,
      availability: 'In Stock',
      specialOffer: '10% off',
    },
    {
      name: 'Top Game 2',
      image: 'topgame2.jpg',
      description: 'Description of Top Game 2',
      price: 39.99,
      reviews: 120,
      rating: 4.5,
      availability: 'Limited Stock',
      specialOffer: '15% off',
    },
    {
      name: 'Top Game 3',
      image: 'topgame3.jpg',
      description: 'Description of Top Game 3',
      price: 49.99,
      reviews: 100,
      rating: 4.7,
      availability: 'In Stock',
      specialOffer: '20% off',
    },
  ];

  const filteredBestsellers = bestsellers.filter(bestseller =>
    bestseller.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBestsellers = filteredBestsellers.sort((a, b) => {
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
    <div className="bestsellers-page">
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
            placeholder="Search for bestsellers..."
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
        <div className="bestseller-listings">
          {sortedBestsellers.map(bestseller => (
            <div className="bestseller" key={bestseller.name}>
              <img src={bestseller.image} alt={bestseller.name} />
              <h2>{bestseller.name}</h2>
              <p>{bestseller.description}</p>
              <p>Price: ${bestseller.price}</p>
              <p>Reviews: {bestseller.reviews}</p>
              <p>Rating: {bestseller.rating} ★</p>
              <p>Availability: {bestseller.availability}</p>
              <p>Special Offer: {bestseller.specialOffer}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default BestsellersPage;
