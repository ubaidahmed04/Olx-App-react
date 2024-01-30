import React from 'react'
import mainImg from '../images/Slider.jpg'
import { Carousel } from 'antd';
function Addvertisement() {
      
const imageStyle = {
    width: '100%',  
    maxHeight: '250px',  
    objectFit: 'cover',
     // position:'relative' ,
    
  };
  return (
    <div>
         <div className='img-fluid'> 
    
    <Carousel autoplay>
      <div>
        <img src={mainImg}   style={imageStyle}/>
      </div>
      <div>
      <img src={mainImg}   style={imageStyle}/>
      </div>
     </Carousel>
      </div>
    </div>
  )
}

export default Addvertisement