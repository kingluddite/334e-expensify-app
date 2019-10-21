import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Desc: {description}</h3>
    </Link>

    <p>Amount: {amount} </p>
    <p>Created:{createdAt}</p>
  </div>
);

ExpenseListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number,
};

export default ExpenseListItem;
