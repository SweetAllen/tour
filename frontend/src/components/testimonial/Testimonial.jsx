import React from 'react'
import Slider from "react-slick";
import user1 from '../../assets/images/ava-1.jpg'
import user2 from '../../assets/images/ava-2.jpg'
import user3 from '../../assets/images/ava-3.jpg'


const Testimonial = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

            responsive: [
                 {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1, 
                        slidesToScroll: 1,
                        infinite: true,
                        dots:true,
                    },

                 },
                 {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1, 
                        slidesToScroll: 1,
                        
                    },
                 },
                
             
                
               
                
            ]
        
    }
  return (
    <Slider {...settings}>
      <div className='testimonial  py-4 px-3'>
      <p>
      What’s the first place you go to when trying to 
      find a product/service? That’s easy, it’s Google. 
      So, it’s also natural that Google is the best site 
      for online reviews. Google is especially significant 
      if you’re a local business, so make sure you spend
       time setting up your Google Business profile and making
        your business discoverable.
      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={user1} className='w-25 h-25 rounded-2' alt=''/>
        <div>
        <h6 className='mb-0 mt-3'>John Doe</h6>
        <p>Customer</p>
        </div>
      </div>
      </div>


      <div className='testimonial  py-4 px-3'>
      <p>
      What’s the first place you go to when trying to 
      find a product/service? That’s easy, it’s Google. 
      So, it’s also natural that Google is the best site 
      for online reviews. Google is especially significant 
      if you’re a local business, so make sure you spend
       time setting up your Google Business profile and making
        your business discoverable.
      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={user2} className='w-25 h-25 rounded-2' alt=''/>
          <div>
          <h6 className='mb-0 mt-3'>John Doe</h6>
        <p>Customer</p>
          </div>
      </div>
      </div>


      <div className='testimonial  py-4 px-3'>
      <p>
      What’s the first place you go to when trying to 
      find a product/service? That’s easy, it’s Google. 
      So, it’s also natural that Google is the best site 
      for online reviews. Google is especially significant 
      if you’re a local business, so make sure you spend
       time setting up your Google Business profile and making
        your business discoverable.
      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={user3} className='w-25 h-25 rounded-2' alt=''/>
         <div>
         <h6 className='mb-0 mt-3'>John Doe</h6>
        <p>Customer</p>
         </div>
      </div>
      </div>

      <div className='testimonial  py-4 px-3'>
      <p>
      What’s the first place you go to when trying to 
      find a product/service? That’s easy, it’s Google. 
      So, it’s also natural that Google is the best site 
      for online reviews. Google is especially significant 
      if you’re a local business, so make sure you spend
       time setting up your Google Business profile and making
        your business discoverable.
      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={user1} className='w-25 h-25 rounded-2' alt=''/>
        <div>
        <h6 className='mb-0 mt-3'>John Doe</h6>
        <p>Customer</p>
        </div>
      </div>
      </div>


      <div className='testimonial  py-4 px-3'>
      <p>
      What’s the first place you go to when trying to 
      find a product/service? That’s easy, it’s Google. 
      So, it’s also natural that Google is the best site 
      for online reviews. Google is especially significant 
      if you’re a local business, so make sure you spend
       time setting up your Google Business profile and making
        your business discoverable.
      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={user2} className='w-25 h-25 rounded-2' alt=''/>
          <div>
          <h6 className='mb-0 mt-3'>John Doe</h6>
        <p>Customer</p>
          </div>
      </div>
      </div>
    </Slider>
  )
}

export default Testimonial
