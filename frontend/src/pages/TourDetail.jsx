import React from 'react';
import '../styles/tourdetail.css'
import { Container, Row, Col } from 'reactstrap';
import tourdata from '../assets/data/tours'
import { useParams } from 'react-router-dom';
const TourDetail = () => {
    const {id} =useParams()
    console.log(typeof(id))
    const tour=tourdata.find(tour=> tour.id === "01")
    console.log("tour",tour)
    // const tour= tourdata.find(tour=> tour.id === id)
//desture properties from tour object
// const {title} = tour
// console.log(tour)
    const{photo,title,desc,price,reviews,city,distance,maxGroupSize} =tour;
    
    return (
        <section>
         <Container>
            <Row>
               <Col lg='8'>
                <div className='tour_content'>
                   
                 <img src={photo} alt=''></img>
                 <div className='tour_info'>
                  <h2>{title}</h2>
                 </div>
                </div>
               </Col>
            </Row>
         </Container>
        </section>
    )
}
export default TourDetail;