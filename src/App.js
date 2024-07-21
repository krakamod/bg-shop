import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import CategoriesPage from './CategoriesPage';
import NewArrivalsPage from './NewArrivalsPage';
import ContactUsPage from './ContactUsPage';
import ProductDetailsPage from './ProductDetailsPage';
import AddProductPage from './AddProductPage';
import EditProductPage from './EditProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/categories" component={CategoriesPage} />
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
