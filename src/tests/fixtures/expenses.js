import moment from 'moment';

export const expenses = [
  {
    id: '1',
    description: 'Gas',
    note: '',
    amount: 900,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Dry Cleaning',
    note: '',
    amount: 500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'Rent',
    note: '',
    amount: 30000,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
];
