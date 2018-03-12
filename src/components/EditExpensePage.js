import React from 'react';
import { connect } from 'react-redux';
import {editExpense, removeExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push("/");
  };

  render () {
    return (
      <div className="container-fluid expenses">
        <div className="container-fluid expenses">
        <hr className="my-0 py-2"/>
        <h1 className="display-4 my-0 py-3">Edit Expense</h1>
        <hr className="mt-2 py-2"/>
        <p className="lead">Expense:</p>  
        </div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
        <div className="container-fluid expenses">
          <button onClick={this.onRemove}
            className="btn ml-0 btn-danger mt-2">
            Delete</button>
          
        </div>
      </div>
      
    );
  };
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
        return expense.id === props.match.params.id;
      }
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);