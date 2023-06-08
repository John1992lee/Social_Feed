import React, { useState } from 'react';
import './AddEntry.css';


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
            <div class='row'>
                <label for='name' class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="name" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <br></br>
                <label for='post' class="col-sm-2 col-form-label">Post</label>
                <div class="col-sm-10">
                    <textarea type="post" value={post} style={{'height': '100px'}} onChange={(event) => setPost(event.target.value)}/>
                    <button type='submit' class='btn btn-primary btn-lg float-end btn-sm' style={{'margin-top': '1em'}}>Create</button>
                </div>
            </div>
        </form>
     );
}
 
export default AddEntryForm;