import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './tour-card.css'; 
import calculateAvgRating from '../utils/avgRating';
const TourCard = ({tour}) => {

    const {id, title, city,  photo, price, featured, reviews} = tour;
      
    

    const {totalrating ,avgRating} =calculateAvgRating (reviews)
  
    
    return <div className='tour_card'>
       <Card>
        <div className='tour_img'>
         <img src={photo} alt='tour_img'></img>
{ featured &&  <span>Featured</span>}     
   </div>
       </Card>
        <CardBody>
            <div className='card_top d-flex  align-items-center justify-content-between'>
                <span className='tour_location d-flex align-item-center  gap-1'>

                <i class="ri-map-pin-line"></i> {city}
                </span>
                <span className='tour_rating d-flex align-item-center  gap-1'>

                <i class="ri-star-fill"></i>
                 {avgRating === 0 ? null :avgRating} 
                {totalrating === 0?  'Not rated' :(
                     <span>({reviews.length})</span>
) }
</span>
            </div>
            <h5 className='tour_title'>
                <Link to={`/tours/${id}`}>{id}</Link>
                
            </h5>
            <div className='card_bottom  d-flex align-items-center justify-content-between mt-3'>
                <h5>${price} <span>/per person</span></h5>
                <button className='booking_btn'>
                     <Link to={`/tours/${id}`}>
                     Book now</Link>
                </button>
            </div>
        </CardBody>
    </div>
        
    
}
export default TourCard;