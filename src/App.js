import React, { useState } from 'react';
import DisplayEntries from './DisplayEntries/DisplayEntries';
import AddEntryForm from './AddEntry/AddEntryForm';
import './App.css';


function App() {
  const [entries, setEntries] = useState([])
 
 function addNewEntry(entry){
  let tempEntries =[entry, ...entries];
  setEntries(tempEntries);
 }
 
  return (
    <div>
      <div className='border-box'>
        <h3 style={{margin: '1em'}}>Social<span style={{color: 'grey'}}>Feed</span></h3>
      </div>
      <br></br>
      <div class='container' className='center'>
        <AddEntryForm addNewEntryProps={addNewEntry}/>
      </div>
      <br></br>
      <div class='container' className='display-form'>
        <DisplayEntries parentEntries={entries} />
      </div>
      <br></br>
    </div>
  );
}

export default App;
