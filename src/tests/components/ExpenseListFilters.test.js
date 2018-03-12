import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach( () => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
  <ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}  
    sortByAmount={sortByAmount}  
    sortByDate={sortByDate}  
    setTextFilter={setTextFilter}  
    setStartDate={setStartDate} 
    setEndDate={setEndDate} 
    />
  );
});

test('should render ExpenseListFilters with filters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altfilters', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});


test('should handle textchange', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: {
      value: altFilters[0].text
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters[0].text);
});

test('should sortByDate, older dates first', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: "date-low"
    }
  });
  expect(sortByDate).toHaveBeenLastCalledWith("low");
});

test('should sortByDate, older dates first', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: "date-high"
    }
  });
  expect(sortByDate).toHaveBeenLastCalledWith("high");
});

test('should sortByAmount, older dates first', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: "amount-low"
    }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith("low");
});

test('should sortByAmount, older dates first', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: "amount-high"
    }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith("high");
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');

  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').at(0).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
