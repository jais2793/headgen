import React from 'react';
import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function Carousel({carouselData}) {
  return (

    <div className="carousel-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '#swiper-button-next',
          prevEl: '#swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        {carouselData && carouselData?.map((item) => (
        <SwiperSlide className='!w-fit'>
          <img src={item?.path} className=''/>
        </SwiperSlide>
        ))}

    
      </Swiper>
        {/* <div className="slider-controler flex justify-center z-[99]">
          <div id="swiper-button-prev" className="swiper-button-prev slider-arrow">
          <IoIosArrowBack />
          </div>
          <div className="swiper-pagination"></div>
          <div id="swiper-button-next" className="swiper-button-next slider-arrow">
          <IoIosArrowForward />
          </div>
        </div> */}
      </div>
  );
}

export default Carousel;