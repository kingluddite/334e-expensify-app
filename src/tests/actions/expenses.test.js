import uuid from 'uuid';
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

// const id = uuid();

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {
    description: 'test desc',
    note: 'test note',
    amount: 123,
    createdAt: 123456,
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'test desc',
      note: 'test note',
      amount: 123,
      createdAt: 123456,
    },
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'test desc',
    note: 'test note',
    amount: 100500,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
