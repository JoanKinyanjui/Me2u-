import React,{useRef,useEffect,useState}  from 'react';
import '../About/Good.css';
import Roles from '../About/Roles/Roles';
import {TweenMax} from 'gsap';

function Good () {
    let good =useRef(null);
    useEffect(()=>{
        TweenMax.from(
            good,{
                opacity : 0,
               duration:5,
                y: '-100'
            }
        )
    })
    return (
        <div className='Good'>
            <div className='Good-img'>
            <img  ref={el=>{good=el}}  className='Good-img' src='/images/good2.jpg'/>
            </div>
            <div className='habit'>
                <h3>ABOUT US</h3>
            <Roles />
            </div>
            
        </div>
    )
}
export default Good;