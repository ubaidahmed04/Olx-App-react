import React from 'react'
import "./Header.css"
import { Input, Select, Space } from 'antd';
import {Dropdown} from 'react-bootstrap'
import Border from '../images/border remove.png'
import BlueLogo from '../images/blueLogo.png'
import BlackLogo from '../images/logoBlack.png'
import  {Link}  from 'react-router-dom';
function Header() {
  return (
    <div>
           <div className='head'>
                <div className='d-flex content pt-3 gap-4'>
                    <div className='d-flex olx gap-4'>
                        <img src={BlueLogo} width={"40px"} className='pl-4' />
                    </div>
                    <div className='motor d-flex'>
                        <i className="fa-solid fa-car"></i>
                        <span>MOTORS</span>
                    </div>
                    <div className='property d-flex'>
                        <i className="fa-solid fa-city"></i>
                        <span>PROPERTY</span>
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <img src={BlackLogo}  width={'150px'}  className='black-logo' />
                    </div>
                    <div className='location '>
                        <Select
                            defaultValue="lucy"
                            value="Pakistan"
                            style={{
                                width: '200px', // Full width on small screens
                                // maxWidth: '300px', // Limit width on larger screens
                                height: '50px',
                                border: '2px solid #002F34',
                                borderRadius: '10px',
                            }}
                            options={[
                                {
                                    value: 'Current location',
                                    label: 'Current location',
                                },
                            ]}
                        />
                    </div>
                    <div className='d-flex searchBar'> {/* Use flex-grow-1 for the input to take up remaining space */}
                        <input
                            type={"search"}
                            className='searchInput p-3 control  '
                            placeholder='Find Cars, Mobile Phones and More...'
                        />
                        <button className='search'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <span className='login'>Login</span>
                    <div className="sellBtn-con">
                    <img src={Border} width={"100px"} />
                        <div className="sell">
                        <i className="fa-solid fa-plus"></i>   <p  className='text-center mt-3'>SELL</p>
                        </div>
                    </div>
                </div>
            </div>

    </div>
   
  )
}

export default Header