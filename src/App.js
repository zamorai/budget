import React from 'react';

import Header from './components/Header';
import TotalCounter from './components/TotalCounter';
import DataForm from './components/SubmitForm';
import DataDisplay from './components/DataDisplay';
import Graphs from './components/Graphs';
import SupportIcons from './components/SupportIcons'

export default function App() {
  // const count = useSelector(state => state.test);
  // const dispatch = useDispatch();


  return (
    <div className="bg-gray-200 pb-4 min-h-screen">
      <Header/>
      <TotalCounter />
      <DataForm />
      <DataDisplay />
      <Graphs />
      <SupportIcons />
    </div>
  )
}


// <button onClick={() => dispatch(add())}>click</button>
// {count}