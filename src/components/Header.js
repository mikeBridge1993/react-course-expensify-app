import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink , withRouter } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header>
    <nav className="navbar navbar-expand-sm navbar-dark">
      <Link to="/" activeclassname="is-active" className="navbar-brand text-primary"><i className="fa fa-euro" aria-hidden="true"></i><span> Xpensify</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeclassname="is-active" className="nav-link"  to="/">Home <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeclassname="is-active" className="nav-link" to="/create">Create</NavLink>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Help
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/help">Custom Help</NavLink>
            </div>
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
