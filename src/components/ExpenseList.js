import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList() {
  const incomes = useSelector(state => state.expense)

  const renderItems = incomes.map(income => {
    return (
      <ExpenseItem name={income.name} data={income.price} />
    )
  })

  return (
    <div>
      {renderItems}
    </div>
  )
}
