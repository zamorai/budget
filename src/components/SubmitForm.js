import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, add, sub, addExpense, addItemTotal, addExpenseTotal } from '../actions';
import moment from 'moment';

export default function SubmitForm() {
  const[description, setDescription] = useState("");
  const[value, setValue] = useState("");
  const[selection, setSelection] = useState("+")

  const dispatch = useDispatch();

  const handleFormValidation = (e) => {
    e.preventDefault()
    if (description.length >=2 && value.length > 0 && value * 1 != NaN && parseInt(value) > 0) {
      handleFormSubmit(e)
    }

  }

  const uppercasedDescription = description.split(' ').map(word => {
    return word.slice(0,1).toUpperCase() + word.slice(1, word.length).toLowerCase()
  }).join(' ')


  const handleFormSubmit = (e) => {
   e.preventDefault()
  if (selection == "+") {    
    dispatch(addItem({name: uppercasedDescription, price: parseInt(value), time: moment().format("MMM Do YY hh:mm:ss a") }))
    dispatch(add(parseInt(value)));
    dispatch(addItemTotal(parseInt(value)))
  } else {
    dispatch(addExpense({name: uppercasedDescription, price: parseInt(value), time: moment().format("MMM Do YY")}))
    dispatch(sub(parseInt(value))); 
    dispatch(addExpenseTotal(parseInt(value)))
  } 

    setDescription("")
    setValue("")
    e.preventDefault()
  }

  return (
    <div className="flex justify-center items-center mt-12">
      <div>
        <span className="mr-2">Add Item</span>
        <form onSubmit={handleFormValidation}>
          <input value={description} onChange={(e) => setDescription(e.target.value)} className="mr-4 bg-gray-100 px-2 py-1 rounded placeholder-gray-500 placeholder-opacity-50 outline-none" placeholder="Item" type='text' />
          <span className="mr-2">Cost</span>
          <input value={value} onChange={(e) => setValue(e.target.value)} className="mr-4 bg-gray-100 px-2 py-1 rounded placeholder-gray-500 placeholder-opacity-50 outline-none" type='text' placeholder="Cost" />
          <select className="px-4 py-1 outline-none" onClick ={(e) => setSelection(e.target.value)} name="type">
            <option value ="+">+</option>
            <option value="-">-</option>
          </select>
          <button className="ml-4 px-4 py-1 rounded bg-gradient-to-r from-teal-400 to-blue-400 focus:outline-none" type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}
