import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherimg from '../assets/images/weather.png'
import guideimg from '../assets/images/guide.png'
import customizationimg from '../assets/images/customization.png'

const servicesData =[

    {
        imgUrl: weatherimg,
        title:"Calculate Weather",
        desc:"Lorem ipsum dolor sit amet,consecturar adiepe;ggvlk slit"
    },
    {
        imgUrl: guideimg,
        title:"Best Tour Guide",
        desc:"Lorem ipsum dolor sit amet,consecturar adiepe;ggvlk slit"
    },
    {
        imgUrl: customizationimg,
        title:"Customization",
        desc:"Lorem ipsum dolor sit amet,consecturar adiepe;ggvlk slit"
    }


]

const Servicelist = () => {
    return <>
    {
        servicesData.map((item,index) =>
            <Col lg='3' key={index}>
                <ServiceCard item={item}></ServiceCard>
            </Col>
        )
    }
    </>
}
export default Servicelist;

