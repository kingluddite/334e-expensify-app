import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensifye</h1>
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
    </nav>
  </header>
);

export default Header;
