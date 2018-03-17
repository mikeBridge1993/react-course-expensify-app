import React from 'react';
import { connect } from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push("/");
  };

  render () {
    return (
      <div className="container-fluid px-0">
        <div className="container-fluid d-flex justify-content-center p-4 summary">
        <p className="p-0 m-0 text-center">Edit Expense</p><br/>
        </div>   
        <ExpenseForm expense={this.props.expense} create={false} onSubmit={this.onSubmit}/>
        <div className="container-fluid col-10 offset-1">
          <button onClick={this.onRemove}
            className="btn ml-0 btn-danger mt-2 ml-2 btn-edit">
            Delete Expense</button> 
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
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);