import React from 'react'
import btn1 from '../images/app store.png';
import './Footer.css'
function Footer() {
  return (
    <>
         <div className='main-footer mt-3'> 
      <div className='d-flex footer pt-3'>
        <div>
          
        <ul>
          <li className='footer-bold'> POPULAR CATEGORIES</li>
          <li>Cars</li>
          <li>Flats for rent</li>
          <li>Mobile Phones</li>
          <li>Jobs</li>
        </ul>
        </div>
        <div>
          
        <ul>
          <li className='footer-bold'>TRENDING SEARCHES</li>
          <li>Bikes</li>
          <li>Watches</li>
          <li>Books</li>
          <li>Dogs</li>
        </ul>
        </div>
        <div>
          
        <ul>
          <li className='footer-bold'> ABOUT US</li>
          <li>About Dubizzle Group</li>
          <li>OLX Blog</li>
          <li>Contact Us</li>
          <li>OLX for Businesses</li>
        </ul>
        </div>
          
        <div>
        <ul>
          <li className='footer-bold'> OLX</li>
          <li>Help</li>
          <li>Sitemap</li>
          <li>Term of use</li>
          <li>privacy policy</li>
        </ul>
        </div>
        <div>
        <ul>
          <li className='footer-bold'> FOLLOW US</li>
        <div className='Footer-icon   '>
          <span><i className="fa-brands icon   fa-x-twitter"></i></span>
          <span><i className="fa-brands icon  fa-facebook-f"></i></span>
          <span><i className="fa-solid  icon fa-play"></i></span>
          <span><i className="fa-brands icon  fa-instagram"></i></span>
        </div>
        <div>
        <img src={btn1} width={'70px'}/>
        <img src={btn1} width={'70px'}/>
        <img src={btn1} width={'70px'}/>
          
        </div>
        </ul>
        </div>
      </div>
      </div>
      <div className='footer-bottom'>
            <div> 
             <span>Free Classifieds in Pakistan</span>  .2006-2024 OLX
            </div>
      </div>
    </>
  )
}

export default Footer