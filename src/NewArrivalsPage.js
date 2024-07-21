import React, { useState } from 'react';

function NewArrivalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('popularity');

  const newArrivals = [
    {
      name: 'New Game 1',
      image: 'newgame1.jpg',
      description: 'Description of New Game 1',
      price: 29.99,
      releaseDate: '2023-01-01',
      reviews: 10,
      rating: 4.5,
      availability: 'In Stock',
      specialOffer: '10% off',
    },
    {
      name: 'New Game 2',
      image: 'newgame2.jpg',
      description: 'Description of New Game 2',
      price: 39.99,
      releaseDate: '2023-02-01',
      reviews: 5,
      rating: 4.0,
      availability: 'Limited Stock',
      specialOffer: '15% off',
    },
  ];

  const filteredArrivals = newArrivals.filter(arrival =>
    arrival.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedArrivals = filteredArrivals.sort((a, b) => {
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
    <div className="new-arrivals-page">
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
            placeholder="Search for new arrivals..."
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
        <div className="new-arrival-listings">
          {sortedArrivals.map(arrival => (
            <div className="new-arrival" key={arrival.name}>
              <img src={arrival.image} alt={arrival.name} />
              <h2>{arrival.name}</h2>
              <p>{arrival.description}</p>
              <p>Price: ${arrival.price}</p>
              <p>Release Date: {arrival.releaseDate}</p>
              <p>Reviews: {arrival.reviews}</p>
              <p>Rating: {arrival.rating} ★</p>
              <p>Availability: {arrival.availability}</p>
              <p>Special Offer: {arrival.specialOffer}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default NewArrivalsPage;
