import React, { useReducer, useEffect } from 'react';
import CategoriesBoard from './CategoriesBoard';
import Text from '../inputs/Text';
import { getCategories } from '../../mockCalls/mockCategories';
import { filterCategories } from '../../helpers/filterCategories';
import axios from 'axios';

const initialState = {
  categories: [],
  filterValue: '',
  filteredCategories: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
      };
    case 'INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'FILTER_CATEGORIES':
      return {
        ...state,
        filteredCategories: action.categories,
      };
    default:
      return state;
  }
};

export default function CategoriesMain() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filterValue, categories, filteredCategories } = state;

  useEffect(() => {
    axios.get('/categories').then(res => dispatch({type: 'GET_CATEGORIES', categories: res.data}))
    // setTimeout(() => {
    //   dispatch({ type: 'GET_CATEGORIES', categories: getCategories() });
    // }, 1000);
  }, []);

  useEffect(() => {
    const userCategories = filterCategories(categories, filterValue);
    dispatch({ type: 'FILTER_CATEGORIES', categories: userCategories });
  }, [filterValue]);

  return (
    <div>
      <Text
        name='filterValue'
        value={filterValue}
        placeholder='Filter categories...'
        onChange={e =>
          dispatch({
            type: 'INPUT',
            value: e.target.value,
            name: e.target.name,
          })
        }
      />
      {categories.length === 0 ? (
     <h1>Loading...</h1>
      ) : (
        <CategoriesBoard
          categories={filterValue === '' ? categories : filteredCategories}
        />
      )}
    </div>
  );
}
