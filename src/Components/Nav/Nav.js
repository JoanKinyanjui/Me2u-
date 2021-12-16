import React,{useRef,useEffect}  from 'react';
import { navItems } from './navitems';
import {Link} from 'react-router-dom';
import '../Styles/nav.css';
import {TweenMax} from 'gsap';
import{Dropdown, Navbar} from 'react-bootstrap';

function Nav(){


    let logoItem =useRef(null);
    useEffect(()=>{
        TweenMax.from(
            logoItem,{
                rotation: 720,
                duration: 8,
                repeat:-1,
                color:'rgb(255, 208, 0)',
                boxShadow:'rgb(255, 208, 0)',
                 yoyo: true,
                fontSize: '80px'
            }
        )
    })

    return(

  <div className='Nav'>
      <Navbar className='navbar' fixed='top'>
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
         <Dropdown className='Dropdown'>
  <Dropdown.Toggle className='Toggle'>
  </Dropdown.Toggle>

  <Dropdown.Menu className='Toggle1'>
      {navItems.map((item,id)=>{
          return(
              <Dropdown.Item >
                    <Link to={item.path} className={item.cName}> <li>{item.title}</li></Link>
              </Dropdown.Item>
          )
      }
      )}

  </Dropdown.Menu>
   
  
</Dropdown>

      

      </Navbar>
      </div>

    )
}
export default Nav;