import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>This is from the dashboard component yo!</div>
);

const AddExpensePage = () => (
  <div>This is from the add expense component yo!</div>
);

const EditExpensePage = () => (
  <div>This is from the edit expense component yo!</div>
);

const HelpPage = () => <div>Help Page</div>;

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go to home page</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <li>
        <NavLink to="/" activeClassName="is-active" exact>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Create Expense
        </NavLink>
      </li>
      <li>
        <NavLink to="/edit" activeClassName="is-active">
          Edit Expense
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </li>
    </nav>
  </header>
);

const routes = (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);
ReactDOM.render(routes, document.getElementById('root'));
