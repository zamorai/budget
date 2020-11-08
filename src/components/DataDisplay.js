import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList';
import {amountFilter} from '../actions';

export default function DataDisplay() {
  const incomeMoney = useSelector(state => state.money.income)
  const expenseMoney = useSelector(state => state.money.expense)

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="ml-6 flex items-center w-3/4">
        <img className="w-5 h-5 mr-4" src="./images/filter-outline.svg" alt="filter icon"/> 
        <span>Sort by:</span>
        <div className="ml-4">
          <span className="cursor-pointer text-gray-100 bg-blue-700 px-3 py-1 rounded shadow">Date</span>
          <span onClick={() => dispatch(amountFilter())} className="cursor-pointer text-gray-100 ml-2 bg-blue-700 px-2 py-1 rounded shadow">Amount</span>
        </div>
      </div>
      <div className="w-3/4 bg-gray-100 shadow grid grid-cols-2 divide-x divide-gray-400 mt-2 custom-height rounded overflow-y-scroll custom-scroll"> 
        <div className='mt-2'>
          <div className="flex justify-between sticky"> 
            <span></span>
            <span className="ml-6 text-gray-700 border-b border-gray-400">Income</span>
            <span className="text-green-500 mr-4 font-light">${incomeMoney}</span>
          </div>

          <div className="mt-4">
            <IncomeList/>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between">
            <span className="ml-4 text-red-500 font-light">${expenseMoney}</span>
            <span className="mr-6 text-gray-700 border-b border-gray-400">Expense</span>
            <span></span>
          </div>
          
          <div className="mt-4">
            <ExpenseList/>
          </div>
        </div>
      </div>
    </div>
  )
}
