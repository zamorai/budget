import React from 'react'
import { useSelector } from 'react-redux'

export default function SupportIcons() {
  const incomeData = useSelector(state => state.income)
  const expenseData = useSelector(state => state.expense)

  const length = Math.max(incomeData.length, expenseData.length)

  return (
    <div className="custom-scroll_icon">
      {length >= 6 ? (
        <div>
        <div className="mb-1 custom-left custom-dot-1"><img className="h-1 w-1" src="./images/ellipse.svg" alt="dot icon" /></div>
        <div className="mb-1 custom-left custom-dot-2"><img className="h-1 w-1" src="./images/ellipse.svg" alt="dot icon" /></div>
        <div className=" custom-left custom-dot-3"><img className="h-1 w-1" src="./images/ellipse.svg" alt="dot icon" /></div>
        <div className="custom-arrow"><img className="h-4 w-4" src="./images/chevron-down-outline.svg" alt ="arrow icon" /></div>
        </div>
      ) : ""}

    </div>
  )
}
