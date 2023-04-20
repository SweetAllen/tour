import React, {useState, useEffect} from 'react';
import CommonSection from '../shared/CommonSection';
import tourData from '../assets/data/tours'
import TourCard from '../shared/TourCard';
import Searchbar from '../shared/Searchbar';
import Newletter from '../shared/Newletter';
import { Container, Row, Col } from 'reactstrap';
import '../styles/tour.css'
const Tour = () => {
    const[pageCount,setPageCount] =useState(0)
    const[page,setPage] = useState(0)

    useEffect(()=>{
        const pages= Math.ceil(5/4)
        setPageCount(pages)
    },[page])
    return <>
    <CommonSection title={"All Tours"}/>
    <section>
        <Container>
            <Row>
                <Searchbar/>
            </Row>
        </Container>
    </section>
    <section className='pt-0'>
        <Container>
            <Row>
                {
                    tourData ?.map(tour => <Col lg='3' className='mb-4'><TourCard   tour={tour}/></Col>)
                }

                <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                       {[...Array(pageCount).keys()].map(number=>(
                        <span className={page===number ? "active_page": ""} key={number} onClick={()=> setPage(number)}>
                           {number +1}
                        </span>
                       ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <Newletter/>
    </>
}
export default Tour;