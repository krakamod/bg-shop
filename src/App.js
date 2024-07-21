import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import CategoriesPage from './CategoriesPage';
import BestsellersPage from './BestsellersPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/bestsellers" component={BestsellersPage} />
      </Switch>
    </Router>
  );
}

export default App;
