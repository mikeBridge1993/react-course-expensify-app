import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';

test('should setup default expense values', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add expense to state', () => {
  const currentState = [];
  const expense = {
    id: uuid(),
    description: "desc",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }
  const state = expensesReducer(currentState, {type: 'ADD_EXPENSE', expense });
  expect(state).toEqual([...currentState, expense]);
});

test('should remove expense of state by id', () => {
  const currentState = [{
    id: "123",
    description: "descp1",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }, {
    id: uuid(),
    description: "descp2",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }];

  const state = expensesReducer(currentState, {type: 'REMOVE_EXPENSE', id: "123" });
  expect(state).toEqual([{
    id: expect.any(String),
    description: "descp2",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }]);
});

test('should not remove expense of state if id not found', () => {
  const currentState = [{
    id: "123",
    description: "descp1",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }, {
    id: uuid(),
    description: "descp2",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }];

  const state = expensesReducer(currentState, {type: 'REMOVE_EXPENSE', id: "-1" });
  expect(state).toEqual(currentState);
});

test('should edit expense of state by id', () => {
  const currentState = [{
    id: "123",
    description: "descp1",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }];

  const updates = {
    description: "Editted Description",
    note: "Editted Note"
  }

  const state = expensesReducer(currentState, {type: 'EDIT_EXPENSE', id: "123", updates});
  expect(state).toEqual([{
    id: "123",
    description: "Editted Description",
    note: "Editted Note",
    amount: 1212,
    createdAt: 1212
  }]);
});

test('should not edit expense of state, if id not found', () => {
  const currentState = [{
    id: "123",
    description: "descp1",
    note: "note",
    amount: 1212,
    createdAt: 1212
  }];

  const updates = {
    description: "Editted Description",
    note: "Editted Note"
  }

  const state = expensesReducer(currentState, {type: 'EDIT_EXPENSE', id: "-1", updates});
  expect(state).toEqual(currentState);
});

test('should set expenses to state', () => {
  const currentState = [expenses[2]];

  const state = expensesReducer(currentState, {type: 'SET_EXPENSES', expenses});
  expect(state).toEqual(expenses);
});
