import React from 'react';
import { connect } from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  return (
    <div className="container-fluid expenses mb-2">
    <span className="badge badge-success mr-5 p-2 w-100">Viewing {props.totalCount} {props.totalCount === 1 ? "expense": "expenses"} totalling {numeral(props.totalAmount/100).format("$0,0.00")}</span> <br/>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  
  return {
    totalAmount: getTotalExpenses(visibleExpenses),
    totalCount: state.expenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

