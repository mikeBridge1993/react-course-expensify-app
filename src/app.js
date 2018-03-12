import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense , removeExpense, editExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters';
import { SingleDatePicker } from 'react-dates';
import getVisibleExpenses from './selectors/expenses';
import moment from 'moment';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'react-dates/initialize';


const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 5000, createdAt: 1212}));

store.dispatch(addExpense({description: "Gas Bill", amount: 5000, createdAt: 7200}));
store.dispatch(addExpense({description: "Gas Turbine", amount: 5000, createdAt: 2323}));
store.dispatch(addExpense({description: "Gas Leakage", amount: 3232, createdAt: 3434}));
store.dispatch(addExpense({description: "Var Leakage", amount: 3232, createdAt: 232}));

console.log(moment().startOf('month'));


// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
const jsx = (
  <Provider store={store}>
    <AppRouter />    
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
