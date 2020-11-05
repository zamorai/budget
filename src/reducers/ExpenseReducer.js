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
  default:
    return state;
}
}