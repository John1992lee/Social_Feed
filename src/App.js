import React, { useState } from 'react';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import NavBar from './NavBar/NavBar';
import './App.css';
import PostList from './PostList/PostList';

function App() {
  const [entries, setEntries] = useState([])
 
 function addNewEntry(entry){
  let tempEntries =[entry, ...entries];
  setEntries(tempEntries);
 }
 
  return (
    <div>
      <div className='border-box'>
        <NavBar />
      </div>
      <br></br>
      <div class='container' className='center'>
        <CreatePostForm addNewEntryProps={addNewEntry}/>
      </div>
      <br></br>
      <div>
        <PostList newPost={entries}/>
      </div>
      <br></br>
    </div>
  );
}

export default App;
