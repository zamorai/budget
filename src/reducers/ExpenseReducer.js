const initalValues = []


export default (state = initalValues, action) => {
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
    filteredState.sort(amountFilter)
    return filteredState
  default:
    return state;
}
}



function amountFilter(a,b) {
  if (a.price > b.price) {
    return -1
  } 
}