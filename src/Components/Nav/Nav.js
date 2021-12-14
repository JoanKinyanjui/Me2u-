import React,{useRef,useEffect}  from 'react';
import { navItems } from './navitems';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/nav.css';
import {TweenMax} from 'gsap';

function Nav(){

    let logoItem =useRef(null);
    useEffect(()=>{
        TweenMax.from(
            logoItem,{
                rotation: 720,
                duration: 8,
                repeat:-1,
                color:'blue',
                yoyo: true,
            }
        )
    })

    return(

  <div className='Nav'>
      <nav className='navbar'>
          <div className='Me2U'>
          <div className='me2u'>..M</div>
          <div className='me2u'>e</div>
          <div 
          ref={el=>{logoItem=el}}
          className='me2u yellow'>2</div>
          <div className='me2u'>U..</div>
          </div>
         
       
          <ul className='nav-items'>
                    {navItems.map((item,id)=>{
                        return(
                           <Link to={item.path} className={item.cName}> <li>{item.title}</li></Link>
                        )
                        }
                    )}
         </ul>

      </nav>
  </div>

    )
}
export default Nav;