const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'SET_EXPENSES':
      return action.expenses;
    case 'EDIT_EXPENSE':
      return state.map((el) => {
          if(el.id === action.id){
            return {
              ...el,
              ...action.updates
            };
          }
          console.log("Not found");
          return el;
      });
    default:
      return state;
  }
}


