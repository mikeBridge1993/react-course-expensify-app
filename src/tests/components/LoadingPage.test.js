import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../components/LoadingPage';

test('should render ExpenseListItem with expenses', () => {
  const wrapper = shallow(<LoadingPage/>);
  expect(wrapper).toMatchSnapshot();
});

