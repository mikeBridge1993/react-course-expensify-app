import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

test('should render Login Page correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startlogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);

  wrapper.find('.btn-login').simulate('click');

  expect(startLogin).toHaveBeenLastCalledWith();

});