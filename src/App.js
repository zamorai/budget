import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {add} from './actions';

import Header from './components/Header';
import TotalCounter from './components/TotalCounter';
import DataForm from './components/SubmitForm';
import DataDisplay from './components/DataDisplay';

export default function App() {
  // const count = useSelector(state => state.test);
  // const dispatch = useDispatch();


  return (
    <div className="bg-gray-200 min-h-screen">
      <Header/>
      <TotalCounter />
      <DataForm />
      <DataDisplay />
    </div>
  )
}


// <button onClick={() => dispatch(add())}>click</button>
// {count}