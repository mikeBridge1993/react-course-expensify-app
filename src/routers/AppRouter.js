import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route  path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;
