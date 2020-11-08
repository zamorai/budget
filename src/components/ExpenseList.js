import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList() {
  const expenses = useSelector(state => state.expense)

  const renderItems = expenses.map(expense => {
    return (
      <ExpenseItem key={expense.name} name={expense.name} data={expense.price} time={expense.time} />
    )
  })

  return (
    <div className="divide-y divide-gray-300">
      {renderItems}
    </div>
  )
}
