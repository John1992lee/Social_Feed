import React, { useState } from 'react';
import './DislikeButton.css';

    const DislikeButton = (props) => {
    const [dislikeButton, setdislikeButton] = useState('inactive');
    
    function DislikeButton() {

        if(dislikeButton === 'inactive') {
            setdislikeButton('active1');
        }
        else {
            setdislikeButton('inactive');
        }

    }

    return ( 
        <div>
            <button className={dislikeButton} onClick={DislikeButton}>{props.message}</button>      
        </div>
     );
} 
export default DislikeButton;