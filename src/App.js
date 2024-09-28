import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import CategoriesPage from './CategoriesPage';
import BestsellersPage from './BestsellersPage';
import NewArrivalsPage from './NewArrivalsPage';
import ContactUsPage from './ContactUsPage';
import ProductDetailsPage from './ProductDetailsPage';
import AddProductPage from './AddProductPage';
import EditProductPage from './EditProductPage';

function App() {
  return (
    <Router>
      <header className="header">
        <div className="header-logo">
          <img src="logo.png" alt="Shop Logo" />
          <h1>Board Games Shop</h1>
        </div>
        <p className="header-tagline">Your Ultimate Board Game Destination</p>
        <nav>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/add-product">Add Product</a></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/bestsellers" component={BestsellersPage} />
        <Route path="/new-arrivals" component={NewArrivalsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/product/:id" component={ProductDetailsPage} />
        <Route path="/add-product" component={AddProductPage} />
        <Route path="/edit-product/:id" component={EditProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
