import {startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = "myuid";
const authState = {auth: {uid}};
const createMockStore = configureStore([thunk]);

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('users/'+ uid +'/expenses/').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual(
    { 
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    })
})

test('should setup edit expense action object', () => {
  const action = editExpense("123",
    {
      description: "Descp",
      note: "note",
      amount: 2324,
      } 
  );

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: "123",
    updates: {
      description : "Descp",
      note : "note",
      amount: 2324 ,
    }});
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]});
})

test('should setup add expense to database and store', (done) => {

  const store = createMockStore(authState);
  const expenseData = {
    description: "mouse",
    amount: 3333,
    note: "note",
    createdAt: 2323
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    
    return database.ref('users/'+uid+'/expenses/'+actions[0].expense.id).once('value');
    }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should setup add expense to database and store with default values', (done) => {

  const store = createMockStore(authState);
  const expenseData = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: ""
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    
    database.ref('users/'+uid+'/expenses/'+actions[0].expense.id).once('value').then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    })
    
  });
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  })
})

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore(authState);

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore(authState);
  const id = expenses[0].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id
    });
    return database.ref('users/'+uid+'/expenses/'+id).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should edit expense from firebase', (done) => {
  const store = createMockStore(authState);
  const id = expenses[0].id;
  const updates = {
    description: "updated"
  }

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates
    });
    return database.ref('users/'+uid+'/expenses/'+id).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().description).toBe("updated");
    done();
  });
});