import React from "react";
import "./Sliderfooter.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Sliderfooter() {
  return (
    <>
      <div className="Sliderfooter-section__sliders mt-20 w-3/4 ml-72">
        <Swiper loop={true} slidesPerView={7} className="Sliderfooter-swiper">
          <SwiperSlide className="Sliderfooter-swiper-slide">
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-hay.png"
              alt="brand-hay"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Joseph-Joseph.png"
              alt="brand-Joseph"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-klober.png"
              alt="brand-klober"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="	https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Louis-Poulsen.png"
              alt="brand-Louis"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Magisso.png"
              alt="brand-Magisso"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Eva-Solo.png"
              alt="brand-Eva"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="	https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-alessi.png"
              alt="brand-alessi"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Eva-Solo.png"
              alt="brand-Eva-Solo"
            />
          </SwiperSlide>
          <SwiperSlide className="Sliderfooter-swiper-slide">
            {" "}
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-flos.png"
              alt="brand-flos"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
