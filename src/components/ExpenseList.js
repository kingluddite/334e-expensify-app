import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {expenses.length === 0 ? (
        <div className="list-item list-item__message">
          <span>No Expenses</span>
        </div>
      ) : (
        expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  </div>
  // END .content-container
);

ExpenseList.propTypes = {
  expenses: PropTypes.array,
};

const mapStateToProps = state => ({
  expenses: selectedExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
