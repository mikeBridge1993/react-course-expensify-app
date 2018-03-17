import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };

  render () {
    return (
      <div className="container-fluid  px-0">
        <div className="container-fluid d-flex justify-content-center p-4 summary">
        <p className="p-0 m-0 text-center">Create New Expense</p><br/>
        </div>   
        <ExpenseForm create={true} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);