import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseHeader from './ExpenseHeader';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div className="container-fluid expenses">
    <ExpenseHeader />
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;