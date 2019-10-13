import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// the js date way to create a new date
const date = new Date();

// the moment way
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({
      description,
    });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState({
      note,
    });
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({
        amount,
      });
    }
  };

  onDateChange = createdAt => {
    this.setState({ createdAt });
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          id="expenseDatePicker" // PropTypes.string.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          onChange={this.onNoteChange}
          value={this.state.note}
        />
        <button>Add Expense</button>
      </form>
    );
  }
}
