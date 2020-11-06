const initalValues = []


export default (state = initalValues, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      const existsInState = state.some(item => item.name === action.payload.name);
      if (existsInState) {
        return state.map(item => {
         return item.name === action.payload.name ? {...item, price: item.price + action.payload.price} : item
        })
      }
      return [...state, action.payload]
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.name !== action.payload
      })
    case 'AMOUNT_FILTER':
      let sortedState = [...state]
      sortedState.sort(amountFilter)
      return sortedState
    default:
      return state
  }
}

// {
//   name: "Uber",
//   price: 1200
// },
// {
// name: "Amazon",
// price: 3200
// }

function amountFilter(a,b) {
  if (a.price > b.price) {
    return -1
  } 
  if (a.price < b.price){ 
    return 1
  }

  return 0
}