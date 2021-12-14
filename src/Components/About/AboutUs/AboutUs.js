import React from 'react';
import '../AboutUs/AboutUs.css';
import { Grid } from '@material-ui/core';

function AboutUs(){
return(
    <>
    <h2 className='start1'>We Are Dedicated To Offer:</h2>
     <Grid  container className='Gallery'>

<div className='item'>

    <div className='caption'>
    <i class="fas fa-globe"></i>
   <b> Safe and reliable delivery service</b>  <br/>
We safely deliver goods from your location to your recipients's doorstep at very pocket-friendly prices. No need to leave your home especially at a time when we all need to be safe. Just download the app and send goods from the comfort of your home.


    </div>
 </div>
 <div className='item'>
   
    <div className='caption'>
    <i class="fas fa-globe"></i>
    <b> Fast and timely delivery.</b>  <br/>
Our delivery service is the fastest and most timely service you could use. No delays in transit. We have very reliable agents who help us get the goods to your destination in no time. Additionally, security for your goods is guaranteed..
    </div>
 </div>
 <div className='item'>

    <div className='caption'>
   
    <i class="fas fa-globe"></i>
    <b> Openness and accountability.</b> <br/>
At Me2U Courier Services Limited, we ensure communication between us, you, our customer and your recipient. We notify you and the recipient when the order leaves for delivery and when the recipient gets the good. We are open and we effectively track and communicate to you on the whereabouts of our goods.



    </div>
 </div>
 <div className='item'>
    
    <div className='caption'>
    <i class="fas fa-globe"></i>
    <b> Payment on delivery</b>  <br/>
Paymnet is done once the goods are at the recipient's doorstep, and the recipient has confirmed the state of the package.


    </div>
 </div>
 <div className='item'>
   
    <div className='caption'>
   
    <i class="fas fa-globe"></i>
    <b>  Bonuses and Discounts.</b>  <br/>
We award bonuses to users who refer friends to our app. We also award discounts to frequent users for every good they send in a day

    </div>
 </div>

</Grid>
    </>
)
}
export default AboutUs;