import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import CategoriesPage from './CategoriesPage';
import NewArrivalsPage from './NewArrivalsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/new-arrivals" component={NewArrivalsPage} />
      </Switch>
    </Router>
  );
}

export default App;
