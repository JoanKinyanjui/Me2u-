 import React  from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
 import '../Styles/home.css'
import Carousel from './Carousel/Carousel';
import How from './How/How';
 
 function Home(){
     return(
         <div className='Home'>
          <Nav />
          <Carousel />
          <How />
          <Footer />
         </div>
     )
 }
 export default Home;