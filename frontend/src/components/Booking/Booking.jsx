import React ,{useState}from 'react';
import { Form, FormGroup, ListGroup, ListGroupItem,Button } from 'reactstrap';
import './booking.css'
import { useNavigate } from 'react-router';
const Booking = ({tour,avgRating}) => {

    const {price,reviews} =tour
    const navigate=useNavigate()
    const [credential,setCredential]= useState (
        {
            userid:'01',
            userEmail:'example@gmail.com',
            fullName:'',
            phone:'',
            guestSize:1,
            bookAt:''
        }
    )
    const handleChange = e =>{
        setCredential(prev=>({...prev,[e.target.id]:e.target.value}))
        // setCredential(prev=>({...prev,[e.target.id]:e.target.value} ))
    }

    const serviceFee= 10;
    const totalAmount=Number(price) * Number(credential.guestSize) + Number(serviceFee)
    //send data to the server
    const handleClick = e =>{
        e.preventDefault()
        navigate("/thank-you")
    }
    return (
        <div className='booking'>
            <div className='booking_top d-flex align-items-center justify-content-between'>
             <h3>${price} <span>/per person</span></h3>
             <span className='tour_rating d-flex align-item-center'>

<i class="ri-star-fill" style={{color:"var(--secondary-color)"}}></i>
 {avgRating === 0 ? null :avgRating}  ({reviews?.length})

</span>               
            </div>

            {/* booking form start  */}
           <div className='booking_form'>
              <h5>Information</h5>
              <Form className='booking_info_form' onSubmit={handleClick}>
                  <input type='text' placeholder='full name' id="fullName" required onChange={handleChange}>
                  </input>
              </Form>
              <Form className='booking_info_form'>
                  <input type='number' placeholder='phone' id="phone" required onChange={handleChange}>
                  </input>
              </Form>
              <Form className='d-flex align-items-center gap-3'>
                  <input type='date' placeholder='full name' id="bookAt" required onChange={handleChange}>
                  </input>
                  <input type='number' placeholder='full name' id="guestSize" required onChange={handleChange}>
                  </input>
              </Form>
           </div>
       
                        {/* booking form end  */}

                        {/* booking bottom */}
           <div className='booking_bottom'>
                   <ListGroup>
                     <ListGroupItem className='border-0 px-0'>
                         <h5 className='d-flex align-items-center gap-1'>${price}<i class="ri-close-fill"></i> 1 person</h5>
                         <span>${price}</span>
                     </ListGroupItem>
                     <ListGroupItem className='border-0 px-0'>
                         <h5>Service Charge</h5>
                         <span>$10</span>
                     </ListGroupItem>
                     <ListGroupItem className='border-0 px-0 total'>
                         <h5>Total</h5>
                         <span>${totalAmount}</span>
                     </ListGroupItem>
                   </ListGroup>
                   <Button className='primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
           </div>
        </div>
    );
}

export default Booking;
