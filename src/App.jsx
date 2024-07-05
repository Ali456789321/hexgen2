import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';

import { Autoplay } from 'swiper/modules';
import Nav from './Nav';
import Footer from './Footer';

import img1 from "./assets/logo1.jpg"
import img2 from "./assets/logo2.png"
import img3 from "./assets/logo4.png"
import img4 from "./assets/logo5.png"
import img5 from "./assets/logo6.png"
import img6 from "./assets/logo7.png"


export default function App() {
  return (
    <>
    <Nav/>
    <div className='container'>
      <h1>Our Partners</h1>
    <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
        modules={[Autoplay]}
        className="mySwiper"
      >
  <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
      </Swiper>
    </div>
     <Footer/>
    </>
  );
}

