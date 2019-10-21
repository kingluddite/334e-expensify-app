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
  // static propTypes = {
  //   j
  // }

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      descError: '',
      amtError: '',
    };
  }

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

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        amount,
      });
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState({
        descError: 'Please provide description',
      });
    } else {
      this.setState({
        descError: '',
      });
    }

    if (!this.state.amount) {
      this.setState({
        amtError: 'Please provide amount',
      });
    } else {
      this.setState({
        amtError: '',
      });
    }
    // console.log('form submitted');
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount) * 100,
      note: this.state.note,
      createdAt: this.state.createdAt.valueOf(),
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.descError && <p>{this.state.descError}</p>}
        {this.state.amtError && <p>{this.state.amtError}</p>}
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
