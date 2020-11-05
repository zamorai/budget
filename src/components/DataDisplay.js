import React from 'react'
import { useSelector } from 'react-redux'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'

export default function DataDisplay() {
  const data = useSelector(state => state.income)
  const incomeMoney = useSelector(state => state.money.income)
  const expenseMoney = useSelector(state => state.money.expense)

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div>
        Filters
      </div>
      <div className="w-1/2 bg-gray-100 shadow grid grid-cols-2 divide-x divide-gray-300 mt-2">
        <div className='mt-2'>
          <div className="flex justify-between">
            <span></span>
            <span className="ml-6">Income</span>
            <span className="text-green-500 mr-4 font-light">${incomeMoney}</span>
          </div>

          <div className="mt-4">
            <IncomeList/>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between">
            <span className="ml-4 text-red-500 font-light">${expenseMoney}</span>
            <span className="mr-6">Expense</span>
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
