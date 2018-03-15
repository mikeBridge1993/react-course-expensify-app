import React from 'react';
import { connect } from 'react-redux';
import {startRemoveExpense} from '../actions/expenses';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export class ExpenseListItem extends React.Component {
  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.id});
  };

 render () {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex ExpenseListItem rounded">
          <span className="mr-auto text-secondary bold"><Link to={"/edit/" + this.props.id} >{this.props.description}</Link></span>
          <span className=" badge badge-pill badge-success mx-2">{numeral(this.props.amount/100).format("$0,0.00")}</span>
          <span className="badge badge-pill ml-auto badge-primary">{moment(this.props.createdAt).format("DD-MM-YYYY")}<i className="fa fa-calendar ml-1"></i></span>
      </div>
      <div>
      <button onClick={this.onRemove} className="delete-button  px-2 py-1"><i className="fa fa-times fa-1x delete-button--icon"></i></button>
      </div>
    </li>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(undefined, mapDispatchToProps)(ExpenseListItem);



