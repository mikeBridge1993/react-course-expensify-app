import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: ['date', 'high'],
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
});

test('should setup text filter', () => {
  const text = "hello"
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
  expect(state).toEqual({
    text,
    sortBy: ['date', 'high'],
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should setup start date filter', () => {
  const startDate = moment(0);
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
  expect(state).toEqual({
    text: '',
    sortBy: ['date', 'high'],
    startDate,
    endDate: moment().endOf('month')
  })
});

test('should setup end date filter', () => {
  const endDate = moment(0);
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
  expect(state).toEqual({
    text: '',
    sortBy: ['date', 'high'],
    startDate: moment().startOf('month'),
    endDate
  })
});

test('should setup sortBy to amount, lowest firt', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT', criteria: 'low'});
  expect(state).toEqual({
    text: '',
    sortBy: ['amount', 'low'],
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
});

test('should setup sortBy to amount, highest firt', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT', criteria: 'high'});
  expect(state).toEqual({
    text: '',
    sortBy: ['amount', 'high'],
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
});

test('should setup sortBy to date, highest firt', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_DATE', criteria: 'high'});
  expect(state).toEqual({
    text: '',
    sortBy: ['date', 'high'],
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
});

test('should setup sortBy to date, lowest firt', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_DATE', criteria: 'low'});
  expect(state).toEqual({
    text: '',
    sortBy: ['date', 'low'],
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
});