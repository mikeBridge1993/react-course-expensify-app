import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should setup start date with provided value', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual(
    { 
      type: 'SET_START_DATE',
      startDate: moment(0)
    })
});

test('should setup end date with provided value', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual(
    { 
      type: 'SET_END_DATE',
      endDate: moment(0)
    })
});

test('should setup text filter with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual(
    { 
      type: 'SET_TEXT_FILTER',
      text: ''
    })
});

test('should setup text filter with provided value', () => {
  const text = "!23"
  const action = setTextFilter(text);

  expect(action).toEqual(
    { 
      type: 'SET_TEXT_FILTER',
      text
    })
});

test('should setup sortByDate with provided criteria', () => {
  const criteria = 'high';
  const action = sortByDate(criteria);

  expect(action).toEqual(
    { 
      type: 'SORT_BY_DATE',
      criteria
    })
});

test('should setup sortByAmount with provided criteria', () => {
  const criteria = 'high'
  const action = sortByAmount(criteria);

  expect(action).toEqual(
    { 
      type: 'SORT_BY_AMOUNT',
      criteria
    })
});