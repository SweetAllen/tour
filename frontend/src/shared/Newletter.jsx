import React from 'react';
import './newletter.css'
import { Container,Row,Col } from 'reactstrap';
import maletourist  from '../assets/images/male-tourist.png'
const Newletter = () => {
    return (
       <section className='newletter'> 
        <Container>
            <Row>
                <Col lg='6'>
                  <div className='newletter_content'>
                   <h2>What’s the first place you go to when trying to find a product/service? That’s easy, it’s Google. </h2>
                   <div className='newletter_input'>
                    <input type="email" placeholder='email'></input>
                    <button className='btn newletter_btn'>Subscribe</button>
                   </div>
                   <h6>qdcdcvvfdv</h6>
                  </div>
                </Col>
                <Col lg='6'>
                    <div className='newletter_img'>
                    <img src={maletourist} alt=''></img>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    );
}

export default Newletter;
