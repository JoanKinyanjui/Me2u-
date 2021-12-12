import  React from 'react';
import '../Carousel/Carousel.css';

function Carousel(){
return(
    <>
    <div className="Carousel">
     <div className='carousel'><img  className='carousel-img' src='/images/happy2.jpg'/></div>
     <div  className='carousel'><img   className='carousel-img' src='/images/happy1.jpg'/></div>
     <div  className='carousel'><img   className='carousel-img' src='/images/happy.jpg'/></div>
    </div>
    <div className='jumbotron'>
        <h6 className='h6'>
            The Most Reliable Delivery Service Provider
        </h6>
    </div>
    </>
)
}
export default Carousel;