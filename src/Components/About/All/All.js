
import React,{useRef,useEffect}  from 'react';
import Roles from '../Roles/Roles';
import {TweenMax} from 'gsap';
import '../All/All.css';

function All(){
    let followItem =useRef(null);
    useEffect(()=>{
        TweenMax.from(
            followItem,{
                duration: 5,
                color:'transparent',
                 yoyo: true,
                fontSize: '10px',
                x: '-100',
                yoyo: true,
                ease: 'sine'
            }
        )
    })
    return(
        <>
      
        <div className='All'>
        <div className='all'>
           <div 
            ref={el=>{followItem=el}}  className='Follow-Us'>
<h4>Me2U Courier Services Got all Your Delivery Desires Covered!</h4>
<hr />

</div>
 
           </div>
           {/* <Roles />  */}
        </div>  

        </>
        
    )
}
export default All;