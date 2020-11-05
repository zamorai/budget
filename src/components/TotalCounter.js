import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalCounter() {
  const money = useSelector(state => state.money.total)

  let color = money >= 0 ? 'text-green-500' : 'text-red-500'

  return (
    <div className="flex justify-center items-center mt-24">
      <span className={`text-4xl font-light ${color}`}>${numberWithCommas(money)}</span>
    </div>
  )
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}