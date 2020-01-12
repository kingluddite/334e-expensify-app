/* eslint no-undef: 0 */ // --> OFF
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import PropTypes from 'prop-types';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else if (e.target.value === 'date') {
      this.props.sortByDate();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              placeholder="Search Expenses"
              className="text-input"
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          {/* END .input-group__item */}
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          {/* END .input-group__item */}
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="start"
              endDate={this.props.filters.endDate}
              endDateId="end"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          {/* END .input-group__item */}
        </div>
        {/* END .input-group */}
      </div>
      // END .content-container
    );
  }
}

ExpenseListFilters.propTypes = {
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  setTextFilter: PropTypes.func,
  sortByAmount: PropTypes.func,
  sortByDate: PropTypes.func,
  filters: PropTypes.object,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
