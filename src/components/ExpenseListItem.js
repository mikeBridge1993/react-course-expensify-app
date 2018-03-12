import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex ExpenseListItem rounded">
          <span className="mr-auto text-secondary bold"><Link to={"/edit/" + props.id} >{props.description}</Link></span>
          <span className=" badge badge-pill badge-success mx-2">{props.amount}<i className="fa fa-euro ml-1"></i></span>
          <span className="badge badge-pill ml-auto badge-primary">{moment(props.createdAt).format("DD-MM-YYYY")}<i className="fa fa-calendar ml-1"></i></span>
      </div>
      <div>
      <button onClick={e => props.dispatch(removeExpense({id: props.id}))} className="delete-button  px-2 py-1"><i className="fa fa-times fa-1x delete-button--icon"></i></button>
      </div>
    </li>
  );
}

export default ExpenseListItem;



