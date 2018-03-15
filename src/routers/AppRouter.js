import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import HelpPage from '../components/HelpPage.js';
import LoginPage from '../components/LoginPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import PrivateRoute from './PrivateRoute.js';

export const history = createHistory();

const AppRouter = () => {
  return(
    <Router history={history} >
      <div>
        <Switch>
          <Route path="/" component={LoginPage}  exact={true} />          
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
};

export default AppRouter;
