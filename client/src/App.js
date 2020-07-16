import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CategoriesMain from './components/categories/CategoriesMain';
import NotFound from './components/NotFound';
import ProductsMain from './components/category/ProductsMain'
import Product from './components/product/Product'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
    <Navbar />
      <Switch>
        <Route exact path='/'>
          <CategoriesMain />
        </Route>
        <Route path='/categories/:name'>
          <ProductsMain />
        </Route>
        <Route path='/products/:id'>
          <Product />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
