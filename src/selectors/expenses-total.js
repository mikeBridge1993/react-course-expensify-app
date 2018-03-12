export default  (expenses) => {
  let totalExpenses = 0;

  if(expenses){
    expenses.map((el) => {
      totalExpenses += el.amount;
    });
  }
  
  return totalExpenses;
}
