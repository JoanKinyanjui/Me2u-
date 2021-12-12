import React from 'react';
import Nav from '../Nav/Nav';
import '../Styles/about.css';
import Company from './Company/Company';
import Roles from './Roles/Roles';
import AboutUs from './AboutUs/AboutUs';
import All from '../About/All/All'

function About(){
    return(
        <>
        <Nav />
        <All />
       
        <Company />
        <AboutUs />

  
       </>
    )
}
export default About;