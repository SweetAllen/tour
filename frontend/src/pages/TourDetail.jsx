import React,{useRef,useEffect,useState} from 'react';
import '../styles/tourdetail.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import tourdata from '../assets/data/tours'
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking';
import Newletter from '../shared/Newletter';
const TourDetail = () => {
    const {id} = useParams();
    
    const tour=tourdata.find(tour=> tour.id === id)

    const{photo,title,desc,price,reviews,city,distance,maxGroupSize, address} =tour;
    const {totalrating, avgRating} =calculateAvgRating(reviews)

      
    //date format
    const option={day:"numeric", month:"long", year:"numeric"}


    const reviewMsgRef= useRef('');
    const {tourRating, setTourRating} = useState(null)


    //submit request to the server
    const submitHandler = e =>{
      e.preventDefault()
      const reviewText= reviewMsgRef.current.value
      alert(`${reviewText}, ${totalrating}`)
    }
    return (
      <>]
        <section>
         <Container>
            <Row>
               <Col lg='8'>
                <div className='tour_content'>
                   
                 <img src={photo} alt=''></img>
                 <div className='tour_info'>
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                  <span className='tour_rating d-flex align-item-center  gap-1'>

<i class="ri-star-fill" style={{color:"var(--secondary-color)"}}></i>
 {avgRating === 0 ? null :avgRating} 
{totalrating === 0?  'Not rated' :(
     <span>({reviews.length})</span>
) }
</span>               
<span>
<i class="ri-map-pin-user-fill"></i>{address}
</span>



   </div>
   <div className='tour_extra_detail'>
<span>
<i class="ri-map-pin-fill"></i>{city}

</span>
<span>
<i class="ri-wallet-3-line"></i>{price}

</span>
<span>
<i class="ri-wallet-3-line"></i>{distance} k/m

</span>
<span>
<i class="ri-group-line"></i>{maxGroupSize} people

</span>



</div>
<h5>Description</h5>
<p>{desc}</p>
                 </div>

                 {/* tour review section */}
                    <div className='tour_reviews mt-4'>
                     <h4>Reviews ({reviews ?.length} reviews)</h4>
                        <Form onSubmit={submitHandler}>
                            <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                             <span onClick={()=> setTourRating(1)}>
                               1 <i class="ri-star-fill"></i>
                                </span>
                             <span onClick={()=> setTourRating(2)}>
                               2 <i class="ri-star-fill"></i>
                                </span>
                             <span onClick={()=> setTourRating(3)}>
                               3 <i class="ri-star-fill"></i>
                                </span>
                             <span onClick={()=> setTourRating(4)}>
                               4 <i class="ri-star-fill"></i>
                                </span>
                             <span onClick={()=> setTourRating(5)}>
                               5 <i class="ri-star-fill"></i>
                                </span>

                            </div>
                            <div className='review_input'>
                                 <input type="text" ref={reviewMsgRef}    placeholder='Enter your thoughts'/>
                                 <button className='review_btn'>
                                    Submit
                                 </button>
                                
                            </div>
                        </Form>
                        <ListGroup className='user_reviews'>
                                  {
                                    reviews ?.map(review=>(
                                       <div className='review_item'>
                                         <img src={avatar} alt=''></img>

                                         <div className='w-100'>
                                         <div className='d-flex align-items-center justify-content-between'>
                                          <div>
                                          <h5>Minihib</h5>
                                                   <p>{new Date('01-18-2023').toLocaleDateString("en-us",option)}</p>

                                        </div>
                                        <span className='d-flex align-items-center'>
                                                5 <i class="ri-star-fill"></i>

                                                </span>
                                         </div>
                                         <p>Amazing tour</p>

</div>
</div>
                                                  
                                              

                                             
                                       
                                    ))
                                  }
                                 </ListGroup>
                    </div>
              {/* tour review section end*/}

                </div>
               </Col>
               <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating}/>
               </Col>
            </Row>
         </Container>
        </section>
        
      <Newletter/>
      </>
    )
}
export default TourDetail;