import React from 'react'
import { shallow } from 'enzyme'
import CategoriesBoard from './CategoriesBoard'

const categories = [
    {
      products: 61,
      name: 'en:Beverages',
    },
    {
      products: 52,
      name: 'en:Groceries',
    },
    {
      name: 'en:Salts',
      products: 42,
    },
    {
      name: 'en:Ketchup',
      products: 31,
    },
  ];


describe('<CategoriesBoard />', () => {
    test('should render 4 components', () => {
        const wrapper = shallow(<CategoriesBoard categories={categories} />)
        expect(wrapper.find('.categories__main').children().length).toEqual(4)
        expect(wrapper).toMatchSnapshot()
    })
    
})
