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
    <li className="list-group-item mb-1 d-flex rounded expense-list-item">
        <span className="mr-3"><Link to={"/edit/" + this.props.id} >{this.props.description}</Link></span>
        <span className="mr-3 text-success ">{numeral(this.props.amount/100).format("$0,0.00")}</span>
        <span className="mr-3">{moment(this.props.createdAt).format("DD-MM-YYYY")}<i className="fa fa-calendar ml-1"></i></span>
    </li>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(undefined, mapDispatchToProps)(ExpenseListItem);



