import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <div style={{ minHeight: '50vh', margin: '0 auto' }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
            alt="Slide 1"
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
            alt="Slide 2"
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Slide 3"
            
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
