import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => {
  return (
    <div className="container-fluid col-10 offset-1">
      <ul className="list-group mb-2 pb-0 d-flex align-items-center">
        <li className="list-group-item rounded expense-list-header">
            <span className="mr-3">Expense</span>
            <span className="mr-3">Amount</span>
            <span className="mr-3">Date</span>
        </li>
      {props.expenses.map((el) => {
          return <ExpenseListItem key={el.id} {...el} createdAt={el.createdAt} />
      })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);

