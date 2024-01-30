import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import  './Navbar.css'
function Navbar() {
  return (
    <div>
        <div className='main-Navbar'>  
    <div className="Navbar">
       <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown">
        All Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cars</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mobile Phones</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Laptop</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className='d-flex link gap-3'>
      
    <div>Mobilephones</div>
    <div>Cars</div>
    <div>Motorcyles</div>
    <div>Houses</div>
    <div>Video-Audios</div>
    <div>Tablets</div>
    <div>Land & Plots</div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Navbar