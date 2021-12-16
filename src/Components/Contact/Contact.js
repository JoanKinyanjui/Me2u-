import React, { useEffect, useState } from 'react';
import Message from '../Contact/Message/Message';
import Footer from '../Footer/Footer';
import Popup from './Popup/Popup';
import '../Styles/contact.css';

function    Contact(){

    const [timedPopup,setTimedPopup] =useState(false);
    useEffect( ()=>{
        setTimeout( ()=>{
            setTimedPopup(true);
        } ,3000 );
    },[]);

    return(
<div className='Contact'>
    <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
      <h2>Work With Us</h2><br/><br />
      <h3>Vist us    Now</h3><br/>
      <p>Elica Building ,Second Floor,suite 5. Thika,Kenya</p>
       </Popup>
       
       <Message />
       <Footer />
</div>
    )
}
export default Contact;