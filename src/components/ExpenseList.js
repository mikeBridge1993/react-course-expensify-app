import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => {
  return (
    <div className="container-fluid expenses">  
      <ul className="list-group my-2 py-2">
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

