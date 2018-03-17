import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseHeader from './ExpenseHeader';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div className="container-fluid expenses px-0 bg-light">
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;