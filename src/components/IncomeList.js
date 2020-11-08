import React from 'react';
import { useSelector } from 'react-redux';
import IncomeItem from './IncomeItem';

export default function IncomeList() {
  const incomes = useSelector(state => state.income)

  const renderItems = incomes.map(income => {
    return (
      <IncomeItem key={income.name} name={income.name} data={income.price} time={income.time} />
    )
  })

  return (
    <div className="divide-y divide-gray-300">
      {renderItems}
    </div>
  )
}
