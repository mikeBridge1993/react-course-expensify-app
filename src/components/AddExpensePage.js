import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };

  render () {
    return (
      <div className="container-fluid expenses">
        <div className="container-fluid expenses">
          <hr className="my-0 py-2"/>
          <h1 className="display-4 my-0 py-3">Create New Expense</h1>
          <hr className="mt-2 py-2"/>
          <p className="lead">New expense:</p>  
        </div>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);