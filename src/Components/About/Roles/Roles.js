import React from 'react';
import '../Roles/Roles.css';

function Roles(){
    return(
<>
<div className='Roles'>
     <div className='Role1'>
         <div>
             <h2>We're motivated by the desire to achieve:</h2>
             <b>Vision</b><br />
             <p>To attain global recognition as an world's best courier 
                 delivery service with 100% customer satisfaction.</p>
             <b>Mission</b><br />
             <p>To provide a safe, reliable and quality delivery service 
                 that maximizes on satisfying the customer's needs.</p>

             <b>Core Values</b><br/>
             <ul className='core'>
                 <li>Intergrity</li>
                 <li>Quality</li>
                 <li>Teamwork</li>
             </ul>
         </div>
     </div>
     <div className='Role2'>
         
         <i class="fas fa-handshake fa-4x"></i>
     </div>
</div>
</>
    )
}
export default Roles;