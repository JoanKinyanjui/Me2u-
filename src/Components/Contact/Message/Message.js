import React from 'react';
import Mailer from '../Mailer';
import '../Message/Message.css';

function Message(){
return(
    <>
    <div className='Message'>
 <Mailer />
    </div>
    <div className='Contact'>
    <div className='contact'>

        <div className='contactus'>
            <a className='a' href='mailto:me2ucourierservices@gmail.com' ><h5>email:me2ucourierservices@gmail.com
</h5></a>
        </div>

        <div className='grid-container'>
            <div className='grid-item'>
                <div><a className='col-1' href=''><i className="fab fa-facebook fa-3x "></i></a></div>
                <div> <a className='col-1' href=''><i className="fab fa-instagram-square fa-3x "></i></a></div>
                <div> <a className='col-1'><i class="fab fa-twitter-square fa-3x"></i></a></div>

            </div>
        </div>

      
  </div>
  </div>
  </>
)
}
export default Message;