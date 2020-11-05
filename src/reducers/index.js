import { combineReducers } from 'redux';
import ExpenseReducer from './ExpenseReducer';
import IncomeReducer from './IncomeReducer';
import MoneyReducer from './MoneyReducer';

export default combineReducers({
  income: IncomeReducer,
  money: MoneyReducer,
  expense: ExpenseReducer
})