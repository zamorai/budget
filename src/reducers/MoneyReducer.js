
const initialValues = {
  total: 0,
  income: 0,
  expense: 0
}

export default (state = initialValues, action) => {
  switch(action.type) {
    case "ADD":
      return {...state, total: state.total + action.payload}
    case "SUB":
      return {...state, total: state.total - action.payload}
    case "ADD_ITEM_TOTAL":
      return {...state, income: state.income + action.payload}
    case "SUB_ITEM_TOTAL":
      return {...state, income: state.income - action.payload}
    case "ADD_EXPENSE_TOTAL":
      return {...state, expense: state.expense + action.payload}
    case "SUB_EXPENSE_TOTAL":
      return {...state, expense: state.expense - action.payload}
    default:
      return state
  }
}