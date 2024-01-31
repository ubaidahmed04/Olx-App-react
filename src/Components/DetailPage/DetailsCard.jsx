import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {   Rate } from 'antd';
import {Card,Carousel, Button,}from 'react-bootstrap';
import logo from '../images/logoBlack.png'


function DetailsCard() {

  const [Details,setDetails] = useState({})
  const params = useParams()
  const  userId  = params;
  console.log(userId)
  
useEffect(()=>{
  fetch(`https://dummyjson.com/products/${userId.id}`)
  .then((res) => res.json())
      .then((data) => {
        setDetails(data)    
        console.log(data)       
        
      })
      // console.log(data) 
      .catch(error => {
          console.error('Error fetching data:', error);
      });
},[])
  return (
    <>
       <div>
      {Details&& (
        // return(
        <div className='full-card'>
            <div className='lg-img'>
            <div className='img-fluid Slider'>
      <Carousel>
        {Details.images &&
          Details.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className='slider-img' />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
                <div className='card-2 p-2'>
                    <Card>
                <Card.Body variant='light'>
                  <div className='price-main'>
                    
                  <div className='price'>
                    <p>{Details.price}</p>
                  </div>
                  <div className='d-flex gap-3'>
                  <i class="fa-solid fa-share-nodes fa-lg"></i>
                  <i class="fa-regular fa-heart fa-lg"></i>
                  </div>
                  </div>
            <Card.Text className='product-name'>
               {Details.title}
            </Card.Text>
            <Card.Text className=' '>
               <span><i class="fa-solid fa-location-dot  "></i></span>
               <span className=''>karachi</span>
            </Card.Text>
          </Card.Body>
                </Card>
      
        </div>
        <div className='card-3 p-2'>
         
        <Card>

                <Card.Body variant='light'>
            <Card.Title className='bold'>  Details </Card.Title>
            <Card.Text>
              <div className='d-flex rate'>
              <div className=''>
              <span>Rating {Details.rating}</span>
              </div>
              <div>
              <span>
              <Rate defaultValue={3} allowClear={false} />
              </span>
              </div>
              </div>
            </Card.Text>
            <Card.Text>
                  
            <div className='table-responsive'>
  <table className='table'>
    <tbody>
      <tr className='brand'>
        <th className='bold'>Brand</th>
        <td className='pro'>{Details.title}</td>
        <th className='bold'>Price</th>
        <td className='pro'>{Details.price}</td>
        <th className='bold'>Stock</th>
        <td className='pro'>{Details.stock}</td>
      </tr>
    </tbody>
  </table>
</div>
                
            </Card.Text>
          </Card.Body>
                </Card>

        </div>


            </div>
            <div className='sm-div'>
                
              <div className='profile'>
            <Card className="text-center">
      <Card.Body>
        <div>
          <img src={logo}   className='profile-logo' />
        </div>

        <div>
      <Card.Title>{Details.title}</Card.Title>
        <Card.Title className='bold'>Description</Card.Title>
        <Card.Text>
           {Details.description}
        </Card.Text>
        <button   className='call-btn'><i className="fa-solid fa-comment-dots fa-lg"></i>chat</button>
        </div>
      </Card.Body>
    </Card>
    </div>

<div  className='pt-4'>
<Card className="text-center">
      <Card.Header className='bold'>Location</Card.Header>
      <Card.Body>
        <Card.Text className='light'>
        <i class="fa-solid fa-location-dot"></i>
         sadar,  Karachi  
        </Card.Text>
      </Card.Body>
    </Card>
</div>
            </div>
        </div>
)}
{/* )})} */}
    </div>
    </>
  )
}

export default DetailsCard