import emailjs from 'emailjs-com';
import React from 'react';;

function Mailer(){
    //  function sendEmail(e){
    //      e.preventtDefault();

    //      emailjs.send()
    //  }
    return(
    <>
    <div>  <h2 style={{marginTop:'2rem' , marginBottom:'2rem', border:'none'}}>Contact Form</h2></div>
    <div className='container ' 
    style={{marginTop:'50px',
            width:'100%'}}>
      
    <form
    // onSubmit={sendEmail}
    style={{margin:'25px 7px 10px 30px'}}>
        <input name='name' type='text' placeholder='Name:' className='form-control' style={{margin:'30px'}}/>

        <input name='email' input='user-email' placeholder='Email:' style={{margin:'30px'}} className='form-control'/>
        <textarea name='text' rows='9' placeholder='Message......' style={{margin:'30px'}} className='form-control'/>
        <input type='submit' value='Send' style={{padding :'0px 20px'}} className='form-contol btn btn-primary'/>
    </form>
    </div>
    </>
    )
}
export default Mailer;