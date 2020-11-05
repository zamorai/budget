import React from 'react';
import { useSelector } from 'react-redux';
import IncomeItem from './IncomeItem';

export default function IncomeList() {
  const incomes = useSelector(state => state.income)

  const renderItems = incomes.map(income => {
    return (
      <IncomeItem name={income.name} data={income.price} />
    )
  })

  return (
    <div className="divide-y divide-blue-100">
      {renderItems}
    </div>
  )
}
