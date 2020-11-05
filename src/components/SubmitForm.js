import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, add, sub, addExpense, addItemTotal, addExpenseTotal } from '../actions';

export default function SubmitForm() {
  const[description, setDescription] = useState("");
  const[value, setValue] = useState("");
  const[selection, setSelection] = useState("+")

  const dispatch = useDispatch();


  const handleFormValidation = () => {

    if (description.length >=2 && value.length > 0 && value * 1 != NaN && parseInt(value) > 0) {
      handleFormSubmit()
    }

  }

  const uppercasedDescription = description.split(' ').map(word => {
    return word.slice(0,1).toUpperCase() + word.slice(1, word.length).toLowerCase()
  }).join(' ')


  const handleFormSubmit = () => {

  if (selection == "+") {    
    dispatch(addItem({name: uppercasedDescription, price: parseInt(value)}))
    dispatch(add(parseInt(value)));
    dispatch(addItemTotal(parseInt(value)))
  } else {
    dispatch(addExpense({name: uppercasedDescription, price: parseInt(value)}))
    dispatch(sub(parseInt(value))); 
    dispatch(addExpenseTotal(parseInt(value)))
  } 

    setDescription("")
    setValue("")

  }

  return (
    <div className="flex justify-center items-center mt-12">
      <div>
        <span className="mr-4">What</span>
        <input value={description} onChange={(e) => setDescription(e.target.value)} className="mr-4" type='text' />
        <span className="mr-4">$</span>
        <input value={value} onChange={(e) => setValue(e.target.value)} className="mr-4" type='text' placeholder="items" />
        <select onClick ={(e) => setSelection(e.target.value)} name="type">
          <option value ="+">+</option>
          <option value="-">-</option>
        </select>
        <button onClick={handleFormValidation} className="ml-4 px-4 py bg-red-200" type="submit">Add</button>
      </div>
    </div>
  )
}
