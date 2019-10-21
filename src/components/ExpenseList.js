import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    {expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)}
  </div>
);

ExpenseList.propTypes = {
  expenses: PropTypes.array,
};

const mapStateToProps = state => ({
  expenses: selectedExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
