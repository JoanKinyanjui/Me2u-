
   
import React from 'react';
import '../How/How.css';
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core'

function How (){
    return(
        <>
        <div className='How'>

            <div className='How1'>
                <div className='Keep'>
            <p>In Our Committment To Keep You Safe We Are Offerring Affordable Delivery Services From DOORSTEP To DOORSTEP .<br/>
            Hassle free</p>
            </div>
            <div className='Card' >
                <b>He's How:</b>
                
                    <p>1.Create An Account on Me2U App</p><br/>
                    <p>2.Key The Destination Of Your Package</p><br/>
                    <p>3.Submit Your Request and Wait For Our Guy To Come To You</p>
        <CardActions>
            <Button>Get App</Button>
        </CardActions>
            
        </div>
        
             </div>

            <div className='How2'>
                 <img className='how2' src= '/images/guy5.png'/>
            </div>
        </div>
        <div className='Start-Working'>
            <div className='working'>
            <h2>Start Working With Us?</h2>
            <Button>Register Now</Button>
            </div>
        </div>
    <div className='Limited'>
        <div className='limited'>
            <h5>At Me2U Courier Services Limited:</h5>
<p>We offer a professional, friendly, cheap and reliable courier delivery service from your doorstep to your recipient's doorstep.</p>
        </div>
        <div className='limited-img'>
            <img className='guy2' src='/images/guy2.jpg'/>
        </div>
    </div>

        </>
    )
}
export default How;