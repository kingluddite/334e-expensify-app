import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = ({ dispatch, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expenseFormObject => {
        dispatch(addExpense(expenseFormObject));
        history.push('/');
      }}
    />
  </div>
);

AddExpensePage.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

export default connect()(AddExpensePage);
