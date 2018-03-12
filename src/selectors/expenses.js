import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch =  startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy[0] === 'date'){
      if(sortBy[1] === 'high'){
        return a.createdAt < b.createdAt ? 1 : -1;        
      } else {
        return a.createdAt < b.createdAt ? -1 : 1;        
      }
    } else if (sortBy[0] === 'amount') {
       if(sortBy[1] === 'high'){
        return a.amount < b.amount ? 1 : -1;
      } else {
        return a.amount < b.amount ? -1 : 1;        
      }
    }
  });
};
