import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('<Text />', () => {
  test('should render correct placeholder', () => {
    const wrapper = shallow(<Text placeholder='Filter categories...' />);
    expect(wrapper.props().placeholder).toEqual('Filter categories...');
  });
  test('should render correct name and value', () => {
    const wrapper = shallow(<Text name='categories' value='xyz' />);
    expect(wrapper.props().name).toEqual('categories');
    expect(wrapper.props().value).toEqual('xyz');
  });
  test('should call onChange on change', () => {
    const mockChange = jest.fn();
    const event = {
      target: { value: 'new value' },
    };
    const wrapper = shallow(
      <Text name='categories' value='xyz' onChange={mockChange} />
    );
    wrapper.simulate('change', event);
    expect(mockChange).toBeCalledWith({ target: { value: 'new value' } });
  });
});
