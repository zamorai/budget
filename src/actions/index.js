

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item
  }
}


export const addExpense = (item) => {
  return {
    type: 'ADD_EXPENSE',
    payload: item
  }
}

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  }
}

export const deleteExpense = (id) => {
  return {
    type: 'DELETE_EXPENSE',
    payload: id
  }
}

export const add = (value) => {
  return {
    type: 'ADD',
    payload: value
  }
}

export const sub = (value) => {
  return {
    type: 'SUB',
    payload: value
  }
}

export const addItemTotal = (value) => {
  return {
    type: 'ADD_ITEM_TOTAL',
    payload: value
  }
}

export const subItemTotal = (value) => {
  return {
    type: 'SUB_ITEM_TOTAL',
    payload: value
  }
}

export const addExpenseTotal = (value) => {
  return {
    type: 'ADD_EXPENSE_TOTAL',
    payload: value
  }
}

export const subExpenseTotal = (value) => {
  return {
    type: 'SUB_EXPENSE_TOTAL',
    payload: value
  }
}

export const dateFilter = () => {
  return {
    type: 'DATE_FILTER'
  }
}

export const amountFilter = () => {
  return{
    type: 'AMOUNT_FILTER'
  }
}