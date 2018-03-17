import React from 'react';
import { connect } from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  return (
    <div className="container-fluid d-flex justify-content-center p-4  summary">
    <p className="p-0 m-0 text-center">Viewing <span>{props.totalCount} </span>{props.totalCount === 1 ? "expense": "expenses"} totalling  <span>{numeral(props.totalAmount/100).format("$0,0.00")}</span></p> <br/>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  
  return {
    totalAmount: getTotalExpenses(visibleExpenses),
    totalCount: visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

