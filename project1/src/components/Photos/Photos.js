import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import haircut1 from "../../img/haircut1.jpg";
import haircut2 from "../../img/haircut2.jpg";
import haircut3 from "../../img/haircut3.jpg";
import haircut4 from "../../img/haircut4.jpg";
import haircut5 from "../../img/haircut5.jpg";
import haircut6 from "../../img/haircut6.jpg";
import haircut7 from "../../img/haircut7.jpg";

function Photos() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-barlow-black uppercase'>our past work</h1>
      <p className='max-w-3xl text-center mb-12 font-work-sans px-4'>Here are some photos of some of our best work to give you a taste of what you'd get by coming down to Vintage Shears barbershop!</p>
      
      <div className='bg-white p-12 rounded-xl flex flex-col md:flex-row gap-4 w-5/6 lg:w-3/4'>
      <Carousel>
      <Carousel.Item>
        <img  src={haircut1} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={haircut2} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={haircut3} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={haircut4} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={haircut5} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={haircut6} alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={haircut7} alt=''/>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  )
}

export default Photos
