import React from 'react';
import { shallow } from 'enzyme';
import ProductsBoard from './ProductsBoard';

const mockProducts = [
  {
    _id: '123423414323',
    image_url: 'img-url',
    product_name: 'product1',
    labels: 'label1 label2',
  },
  {_id: '123423414324',
    image_url: 'img-url2',
    product_name: 'product2',
    labels: 'label1 label2',
  },
  {
    _id: '123423414325',
    image_url: 'img-url',
    product_name: 'product3',
    labels: 'label1 label2',
  },
];

describe('<ProductBox />', () => {
  test('should render product image', () => {
    const wrapper = shallow(<ProductsBoard products={mockProducts} />);
    expect(wrapper.find('.products__main').children().length).toEqual(3);
  });
});
