import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, sub, subItemTotal } from '../actions';

export default function IncomeItem(props) {
  const dispatch = useDispatch();
  const totalMoney = useSelector(state => state.money.income);

  const handleDelete = () => {
    dispatch(deleteItem(props.name))
    dispatch(sub(props.data))
    dispatch(subItemTotal(props.data))
  }

  var percentage = Math.floor((props.data / totalMoney) * 100)

  var percentIntensity = percentage > 60 && percentage <= 100 ? "text-green-700" : percentage >= 30 && percentage <= 60 ? 'text-green-500' : 'text-green-300'

  return (
    <div className="flex justify-between bg-green-100 py-2">
      <div className="ml-6 flex items-center">
        <img onClick={handleDelete} className="w-5 h-5 cursor-pointer" src="./images/close-outline.svg" alt="delete income icon" />
      </div>
      <div className="flex-grow flex flex-col items-start ml-4">
        <span className="text-xl">{props.name}</span>
        <span className="text-xs text-gray-500">{props.time}</span>
      </div>
      <div className="flex flex-col items-center mr-8">
        <span className="text-xl">${props.data}</span>
        <span className={`text-xs ${percentIntensity}`}>{percentage}%</span>
      </div>

    </div>
  )
}
