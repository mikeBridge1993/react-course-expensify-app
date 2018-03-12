import selectExpenses from '../../selectors/expenses'
import moment from 'moment';
const expenses = [{
  id: '1',
  description: 'Rem',
  note: '',
  amount: 195,
  createdAt: 0,
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 295,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Car',
  note: '',
  amount: 395,
  createdAt:  moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', () => {
  const filters = {
    text: 'RE',
    sortBy: ['amount', 'low']
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    startDate: moment(0),
    endDate: undefined,
    sortBy: ['date', 'low']
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: moment(0),
    sortBy: ['date', 'high']
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by amount, highest first', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: ['amount', 'high']
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test('should sort by amount, lowest first', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: ['amount', 'low']
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should sort by date, highest first', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: ['date', 'high']
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by date, lowest first', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: ['date', 'low']
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
