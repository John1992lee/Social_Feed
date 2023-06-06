import React, { useState } from 'react';



const AddEntryForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewEntryProps(newEntry);
    }
    

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
               <label>Post</label>
                <input type="post" value={post} onChange={(event) => setPost(event.target.value)}/> 
                <button type='submit'>Create</button>
            </div>
        </form>
     );
}
 
export default AddEntryForm;