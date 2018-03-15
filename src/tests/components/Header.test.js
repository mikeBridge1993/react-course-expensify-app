import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'



test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
  // const renderer = newReactShallowRenderer();
  // renderer.render(<Header />);
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);

  wrapper.find('.btn-logout').simulate('click');

  expect(startLogout).toHaveBeenLastCalledWith();

});

