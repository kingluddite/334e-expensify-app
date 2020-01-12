import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends Component {
  // (no-undef)
  // eslint-disable-next-line
  onSubmit = expense => {
    // use push
    // attach then callback
    // dispatch action
    // redirect
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
          {/* END .content-container */}
      </div>
      {/* END .page-header */}
      <div className="content-container">
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
      {/* END .content-container */}
      </>
    );
  }
}

AddExpensePage.propTypes = {
  history: PropTypes.object,
  startAddExpense: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
