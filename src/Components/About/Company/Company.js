import { Button } from '@material-ui/core';
import React from  'react';
import '../Company/Company.css';

function Company(){
    return(
<>
<h2 className='start'>Company Info</h2>
<div className='Company'>
   <div className='company-1'>
    <img className='company-img' src='/images/delivery2.jpg'/>
    <div className='text-company' >
      <p> <b>Who's deliverying </b>  <br />
We’re building a culture within Me2U that emphasizes doing the right thing, for service providers and employees. 
Anyone Can SignUp to work with Us provided you have an identification card and the means of delivery

.

</p>
    </div>
   </div>
   <div className='company-1'>
   <img  className='company-img' src='/images/diversity.jpg'/>
   <div className='text-company' >
    <p>  <b>Getting diversity right </b>  <br />
It’s our goal to create a workplace that is inclusive and reflects the diversity
 of the cities we serve—where everyone can be their authentic self, and where that
  authenticity is celebrated as a strength. By creating an environment where
   people from every background can thrive, we’ll make Me2U a better company—for our employees and our customers.



</p>
    </div>
   </div>
   <div className='company-1'>
   <img className='company-img' src='/images/integrity1.jpg'/>
   <div className='text-company' >
   <p> <b>Acting with integrity </b>  <br />
Me2U Ethics & Compliance Program Charter outlines our commitment
 to integrity at the highest levels within the company. Transparency is critical
  to an ethical culture; we achieve this through our Integrity Helpline and suite 
  of scalable and effective compliance initiatives.



</p>
    </div>
  </div>
</div>
<div className='Start-Working'>
            <div className='working'>
            <h2>Start Working With Us?</h2>
            <Button>Register Now</Button>
            </div>
        </div>
</>
    )
}
export default Company;