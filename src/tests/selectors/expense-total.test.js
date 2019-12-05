import selectExpensesTotal from '../../selectors/expense-total.js';
import { expenses } from '../fixtures/expenses';

test('should return 0 if no expense', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(900);
});
//
test('should correctly add up multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(31400);
});
