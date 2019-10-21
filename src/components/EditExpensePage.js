import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      expense={expense}
      onSubmit={expenseFormObject => {
        dispatch(editExpense(expense.id, expenseFormObject));
        history.push('/');
      }}
    />
    <button
      onClick={() => {
        dispatch(removeExpense({ id: expense.id }));
        history.push('/');
      }}
    >
      Remove
    </button>
  </div>
);

EditExpensePage.propTypes = {
  expense: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
