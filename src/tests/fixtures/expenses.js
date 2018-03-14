import moment from 'moment';

const expenses = [
  {
    id: "1",
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: "2",
    description: 'Car',
    note: '',
    amount: 10095,
    createdAt: moment(0).valueOf()
  }, {
    id: "3",
    description: 'Card',
    note: '',
    amount: 2323,
    createdAt: moment(0).valueOf()
  }
]

export default expenses;