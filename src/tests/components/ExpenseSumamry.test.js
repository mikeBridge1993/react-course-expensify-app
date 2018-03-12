import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const totals = {
    totalAmount: 1000,
    totalCount: 1
  }

  const wrapper = shallow(<ExpensesSummary {...totals}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const totals = {
    totalAmount: 1000,
    totalCount: 2
  }
  
  const wrapper = shallow(<ExpensesSummary {...totals}/>);
  expect(wrapper).toMatchSnapshot();
});