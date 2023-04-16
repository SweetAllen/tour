import React from 'react';
import './footer.css'
import { Containe, Row, Col, ListGroup, ListGroupItem, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
const links=[
    {
        path:"/home",
        display:"Home"
    },
    {
        path:"/about",
        display:"About"
    },
    {
        path:"/tours",
        display:"Tours"
    }
]

const links2=[
    {
        path:"/gallery",
        display:"Gallery"
    },
    {
        path:"/login",
        display:"Login"
    },
    {
        path:"/register",
        display:"Register"
    }
]
const Footer = () => {
    const year=new Date().getUTCFullYear()
  
    return (
        <footer className='footer'>
         <Container>
            <Row>
                <Col lg='3'>
                    <div className='logo'> 
                     <img src={logo} alt=""></img>
                     <p>Note that the development build is not optimized.</p>
                     <div className='social_links d-flex align-items-center gap-4'>
                        <span>
                            <Link to='#'><i class="ri-youtube-line"></i></Link>
                        </span>
                        <span>
                            <Link to='#'><i class="ri-github-fill"></i></Link>
                        </span>
                        <span>
                            <Link to='#'><i class="ri-facebook-fill"></i></Link>
                        </span>
                        <span>
                            <Link to='#'><i class="ri-instagram-line"></i></Link>
                        </span>
                       
                     </div>
                    </div>
                </Col>

                <Col lg='3'>
                    <h5 className='footer_link_title'>Discover</h5>
                    <ListGroup className='footer_quick-links'>

                        {
                            links.map((items,index)=>(
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                  <Link to={items.path}>{items.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h5 className='footer_link_title'>Quick Links</h5>
                    <ListGroup className='footer_quick-links'>

                        {
                            links2.map((items,index)=>(
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                  <Link to={items.path}>{items.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h5 className='footer_link_title'>Contacts</h5>
                    <ListGroup className='footer_quick-links'>

                        
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-map-pin-add-line"></i></span>
                                        Address:
                                    </h6>
                                    <p className='mb-6'>United State</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-mail-line"></i></span>
                                        Email
                                    </h6>
                                    <p className='mb-6'>aa@gmail.com</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-phone-fill"></i></span>
                                        Phone
                                    </h6>
                                    <p className='mb-6'>01123345</p>
                                </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg='12' className='text-center pt-5'>
                    <p className='copyright' >copyright {year}, design and develop by sweet.All right reserved</p>
                </Col>
            </Row>
         </Container>
        </footer>
    )
}
export default Footer;