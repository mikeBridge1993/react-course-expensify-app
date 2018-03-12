import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseHeader from './ExpenseHeader'

const ExpenseDashboardPage = () => (
  <div className="container-fluid expenses">
    <ExpenseHeader />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;