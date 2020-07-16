import React from 'react';
import { shallow } from 'enzyme';
import CategoriesBox from './CategoriesBox';

describe('<CategoriesBox />', () => {
  test('should render h3 element with categorie name', () => {
    const wrapper = shallow(
      <CategoriesBox name='en:Plant-based foods' id='en:plant-based-foods' />
    );
    expect(wrapper.find('h3').text()).toEqual('Plant-based foods');
  });
  test('should render h4 tag with amount of products', () => {
    const wrapper = shallow(
      <CategoriesBox
        name='en:Plant-based foods'
        products='43'
        id='en:plant-based-foods'
      />
    );
    expect(wrapper.find('h4').text()).toEqual('Products: 43');
  });
});
