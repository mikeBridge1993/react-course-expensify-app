import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {preventDefault: () => {}});
  expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {target: {value}});
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').at(0).simulate('change', {target: {value}});
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const value = '21.23';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {target: {value}});
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
  const value = '12.12.12';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {target: {value}});
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form subimission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);  
  wrapper.find('form').simulate('submit', {preventDefault: () => {}});
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(
    {
      description: expenses[0].description,
      note: expenses[0].note,
      amount: expenses[0].amount,
      createdAt: expenses[0].createdAt
    }
  );
});

test('should set date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focused on focus change', () => {
  const focused = false;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});