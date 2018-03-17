import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink , withRouter } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header>
    <nav className="navbar navbar-expand-sm navbar-dark">
      <Link to="/dashboard" activeclassname="is-active" className="navbar-brand text-secondary  "><span>Xpensify</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeclassname="is-active" className="nav-link"  to="/dashboard">Dashboard <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeclassname="is-active" className="nav-link" to="/create">Create</NavLink>
          </li>
        </ul>
        <button onClick={props.startLogout} className=" btn btn-danger btn-logout">Logout</button>
      </div>
    </nav>
  </header>
);



const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Header)) 
