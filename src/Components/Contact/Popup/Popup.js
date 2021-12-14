import React from 'react';
import '../Popup/Popup.css';

function Popup(props){
    return(props.trigger) ? (
        
            <div className='Popup'>
            <button className='inner-btn' onClick={()=> props.setTrigger(false)}>close</button>
            {props.children}
            </div>
       
    ): '';
}
export default Popup;