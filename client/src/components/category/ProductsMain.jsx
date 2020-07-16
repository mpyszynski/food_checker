import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductsBoard from './ProductsBoard';
import { getProducts } from '../../mockCalls/mockProducts';
import { filterProducts } from '../../helpers/filterCategories';
import Text from '../inputs/Text';

const initialState = {
  products: [],
  filterValue: '',
  filteredProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    case 'INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        filteredProducts: action.products,
      };
    default:
      return state;
  }
};

export default function ProductsMain() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, filterValue, filteredProducts } = state;
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`/categories/${name}`)
      .then(res => dispatch({ type: 'GET_PRODUCTS', products: res.data }));
    // setTimeout(() => {
    //   dispatch({ type: 'GET_PRODUCTS', products: getProducts() });
    // }, 1000);
  }, []);

  useEffect(() => {
    const userProducts = filterProducts(products, filterValue);
    dispatch({ type: 'FILTER_PRODUCTS', products: userProducts });
  }, [filterValue]);
  return (
    <div>
      <Text
        name='filterValue'
        value={filterValue}
        placeholder='Filter products...'
        onChange={e =>
          dispatch({
            type: 'INPUT',
            value: e.target.value,
            name: e.target.name,
          })
        }
      />

      {products.length === 0 ? (
        <h1>Loading....</h1>
      ) : (
        <ProductsBoard
          products={filterValue === '' ? products : filteredProducts}
        />
      )}
    </div>
  );
}
