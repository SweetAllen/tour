import React from 'react';
import './search-bar.css'
import { Alert, Col, Form, FormGroup } from 'reactstrap';
import { useRef } from 'react';
const Searchbar = () => {

const locationRef=useRef('')
const distanceRef=useRef(0)
const maxGroupRef=useRef(0)

const searchhandler =()=>{
    const location=locationRef.current.value
    const distance=distanceRef.current.value
    const maxGroup=maxGroupRef.current.value

    if(location=== '' || distance=== '' || maxGroup === ''){
        return alert("All field are required!")
    }

}
    return <Col lg='2'>
        <div className='search_bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                    <span>
                    <i class="ri-map-pin-line"></i>
                    </span>

                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going' ref={locationRef}></input>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form_group form_group-last'>
                    <span>
                    <i class="ri-map-pin-time-line"></i>  
                    </span>
                 <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance k/m' ref={distanceRef}></input>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form_group form_group-last'>
                    <span>
                    <i class="ri-group-line"></i>    
                    </span>
                    <div>
                        <h6>Max</h6>
                        <input type="number" placeholder='0' ref={maxGroupRef}></input>
                    </div>
                </FormGroup>
                <span className='search_icon' type='submit' onClick={searchhandler}>
                <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
    
}
export default Searchbar;