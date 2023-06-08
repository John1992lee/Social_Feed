import React, { useState } from 'react';
import './OnClick.css';

const OnClick = (props) => {

    const [onClickButton, setonClickButton] = useState('inactive');


    function OnClickBut() {

        if(onClickButton === 'inactive') {
            setonClickButton('active');
        }
        else {
            setonClickButton('inactive');
        }

    }

    return ( 
        <div>
            <button className={onClickButton} onClick={OnClickBut}>{props.message}</button>      
        </div>
     );
}
 
export default OnClick;
