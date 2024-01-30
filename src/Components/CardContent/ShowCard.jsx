import React from 'react'
import { Button, Card, Form, SplitButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Input, Select, Space ,Slider} from 'antd';
import './Card.css'
import CardProduct from './CardProduct'
function ShowCard() {
  return (
    <>
        
        <div className='d-flex'>
                <div className=' home' width={"28%"}>
                    <p className='light'>Home</p>
                    <h4 className='bold fw-700 h3'>
                        App In Pakistan
                    </h4>
                    <div>
                    <p className='bold h5'>Filter</p>  
                    </div>
                     <hr />
                    <h3 className='bold h5'>CATEGORIES</h3>
                    <div>
                    <span className='light'>All Categories</span>
                    </div>
                      <hr />
                    <h2 className='bold h5'>
                        LOCATIONS
                    </h2>
                    <span> <Select
                        defaultValue="lucy"
                        value="Pakistan"
                        style={{
                            width: 300,
                            height: 50,
                            border: '2px solid #002F34',
                            borderRadius: '10px',
                        }}
                        options={[
                            {
                                value: 'Current location',
                                label: 'Current location',
                            },

                        ]}
                    /></span> <br /> 
                    <h2 className='bold h5'>PAKISTAN</h2>
                    <p className='light'>Sindh(114)</p>
                    <p className='light'>Punjab(96)</p>
                    <p className='light'>Islamabad Capital Territory(14)</p>
                    <p className='light'>Khyber Pakhtunkhwa(11)</p>
                    <span>
                        <Form.Label className='h4'>Price</Form.Label>
                        <Form.Range />
                        {/* <Slider range controlSize='200px' defaultValue={[20, 50]}  /> */}

                    </span>    
                </div>
                <hr />
                <div width={"70%"} className='card-main-div'>
                    <div className='context d-flex  '>
                        <div className='bg-ads'>
                            <span className=''>1,302 ads</span>
                        </div>
                        <div className='view '>
                            <span>VIEW</span>
                            <span><i class="fa-solid fa-bars fa-lg"></i></span>
                            <span><i class="fa-solid fa-boxes-stacked fa-xl"></i></span>
                            <span className='line'></span>
                            <Dropdown as={ButtonGroup}>
                                <Button variant="light">SORT BY:</Button>

                                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Newly First</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Old First</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Recently Uploaded</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                    <hr/>
                          {/* <CardProduct/> */}

                
                </div>
            </div>

    </>
  )
}

export default ShowCard