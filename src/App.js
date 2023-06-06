import React, { useState } from 'react';
import DisplayEntries from './DisplayEntries/DisplayEnteries';
import AddEntryForm from './AddEntry/AddEntryForm';

function App() {
  const [entries, setEntries] = useState([{Name: '', Post: ''}])
 
 function addNewEntry(entry){
  let tempEntries =[entry, ...entries];
  setEntries(tempEntries);
 }
 
  return (
    <div>
      <h3>SocialFeed</h3>
      <AddEntryForm addNewEntryProps={addNewEntry}/>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
