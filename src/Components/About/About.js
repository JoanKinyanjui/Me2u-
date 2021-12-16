import React from 'react';
import '../Styles/about.css';
import Company from './Company/Company';
import Roles from './Roles/Roles';
import Footer from '../Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Good from './Good';

function About(){
    return(
        <>
       <Good />
        <Company />
        <AboutUs />
        <Footer />

  
       </>
    )
}
export default About;