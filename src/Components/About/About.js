import React from 'react';
import '../Styles/about.css';
import Company from './Company/Company';
import Roles from './Roles/Roles';
import AboutUs from './AboutUs/AboutUs';
import Good from './Good';

function About(){
    return(
        <>
       <Good />
        <Company />
        <AboutUs />

  
       </>
    )
}
export default About;