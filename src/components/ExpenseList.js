import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList() {
  const incomes = useSelector(state => state.expense)

  const renderItems = incomes.map(income => {
    return (
      <ExpenseItem name={income.name} data={income.price} time={income.time} />
    )
  })

  return (
    <div className="divide-y divide-blue-100">
      {renderItems}
    </div>
  )
}
