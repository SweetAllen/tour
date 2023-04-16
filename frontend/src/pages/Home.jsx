import React from 'react';
import '../styles/home.css'
import { Row, Col, Container } from 'reactstrap';
import bagan from '../assets/images/bagan.jpeg'
import herovideo from '../assets/images/hero-video.mp4'
import heroimg02 from '../assets/images/hero-img02.jpg'
import shan from '../assets/images/shan.jpeg'
import mandalay from '../assets/images/mandalay.jpeg'
import Substitle from '../shared/Substitle';
import worldimg from '../assets/images/world.png'
import Searchbar from '../shared/Searchbar';
import Servicelist from '../services/Servicelist';
import FeaturedTourList from '../components/featured-tour/FeaturedTourList';
import experienceimg from '../assets/images/experience.png'
import MemoryImageGallery from '../components/gallery/MemoryImageGallery';
import Testimonial from '../components/testimonial/Testimonial.jsx';
import Newletter from '../shared/Newletter';
import Tour from './Tour';
import TourDetail from './TourDetail';
const Home = () => {
    return <>

    {/* hero section start */}
    <section>
        <Container>
            <Row>
                <Col>
                <div className='hero_content'>
                     <div className='hero_subtitle  d-flex  align-items-center'>
                        {/* <Substitle subtitle={'Know Before You Go'} /> */}
                        {/* <img src={worldimg} alt=''></img> */}
                     </div>
                     <h1>Travelling opens the door 
                        to creating{ " "} <span className='highlight'>  memories</span>
                     </h1>
                     <p>
                     Travel quotes are there to express the feeling you
                      experienced while traveling. Combine the best travel 
                      quotes with the power 
                     of an image and instantly let people have a taste of your travel 
                    
                     </p>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero_img-box'>
                       <img src={bagan} alt=''></img>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero_img-box mt-4'>
                    <img src={shan} alt=''></img>

                       {/* <video src={herovideo} alt='' controls></video> */}
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero_img-box mt-5'>
                       <img src={mandalay} alt=''></img>
                    </div>
                </Col>
            </Row>
            <Searchbar/>

        </Container>
    </section>
        {/* hero section start */}

     <section>
        <Container>
        <Row>
            <Col lg='3'>
                <h5 className='services_substitle'>What we serve</h5>
                <h2 className='services_title'>We offer our best services</h2>
            </Col>

            <Servicelist/>
        </Row>
        </Container>
     </section>

         {/* feature tour section start */}
          <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <Substitle subtitle={'Explore'}>

                        </Substitle>
                        <h2 className='featured_tour-title'>Our featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
          </section>
            {/* feature tour section end */}
            {/* experience session start */}
         <section>
            <Container>
                <Row>
                     <Col lg='6'>
                    <div className='experience_content'>
                        <Substitle subtitle={'Experience'}/>
                        <h2>
                         With our all experience <br/>we will serve you
                        </h2> 
                     <p>
                        "Lorem ipsum dolor sit amet,consecturar adiepe;ggvlk slit
                        <br/>
                        "Lorem ipsum dolor sit amet,consecturar adiepe;ggvlk slit
                        </p> 
                    </div>

                    <div className='counter_wrapper d-flex align-items-center gap-5'>
                      <div className='counter_box'>
                        <span>12k+</span>
                        <h6>successful trip</h6>
                      </div>
                      
                      <div className='counter_box'>
                        <span>2k+</span>
                        <h6>Regular Clients</h6>
                      </div>
                      
                      <div className='counter_box'>
                        <span>15</span>
                        <h6>Years experience</h6>
                      </div>
                      
                    </div>
                     </Col>
                  <Col lg='6'>
                    <div className='exoerience_img'>
                    <img src={experienceimg} alt=''></img>
                    </div>
                     </Col>
                </Row>
            </Container>
        </section> 
{/* experience section end */}
   {/* gallery section start */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Substitle subtitle={'Experience'}/>
                    <h2 className='gallery_title'>
                        Visit our customer tour gallery
                    </h2>
                    </Col>
                    <Col lg='12'>
                        <MemoryImageGallery/>
</Col>
                </Row>
            </Container>
        </section>
      {/* gallery section end*/}
      {/* testmonial section start*/}

       <section>
        <Container>
            <Row>
                <Col lg='12'>
                <Substitle subtitle={'Fans Love'}/>
                   <h2 className='testimonial_title'>
                     What our fans say about us
                   </h2>
                </Col>
                <Col lg='12'>
                    <Testimonial/>
                </Col>
            </Row>
        </Container>
       </section>
      {/* testmonial section end*/}
      {/* <TourDetail/> */}

<Newletter/>
<Tour/>
<TourDetail/>
    </>
}
export default Home;
