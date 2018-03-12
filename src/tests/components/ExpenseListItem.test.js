import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expenses', () => {
  const expenseData = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expenseData} />);
  expect(wrapper).toMatchSnapshot();
});

