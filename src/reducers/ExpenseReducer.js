const initalValues = []


const ExpenseReducer = (state = initalValues, action) => {
switch(action.type) {
  case 'ADD_EXPENSE':
    const existsInState = state.some(item => item.name === action.payload.name);
    if (existsInState) {
      return state.map((item) => {
        return item.name === action.payload.name ? {...item, price: item.price + action.payload.price} : item
     })
    }
    return [...state, action.payload]
  case 'DELETE_EXPENSE':
    return state.filter(item => {
     return item.name !== action.payload
    })
  case 'AMOUNT_FILTER': 
    let filteredState = [...state]
    filteredState.sort(amountFilterAsc)
    return filteredState
  default:
    return state;
}
}

export default ExpenseReducer;

function amountFilterAsc(a,b) {
  if (a.price > b.price) {
    return -1
  } 
} 
