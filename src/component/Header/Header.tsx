import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Autoplay from "swiper";

import "./Header.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Headerslideritem from "./Headerslideritem";
import wow from "wow.js";

export default function Header() {
  return (
    <section className="header-section">
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={2000}
        modules={[Navigation, Scrollbar]}
        navigation={true}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          const activeSlide = document.querySelector(
            ".swiper-slide-active img"
          );
          if (activeSlide) {
            activeSlide.style.animation =
              "zoomAnimation 3s ease-in-out forwards";
            setTimeout(() => {
              Swiper.autoplay.start();
            }, 1000);
          }
        }}
        className="header-swiper"
      >
        <SwiperSlide className="header-swiper-slide">
          <Headerslideritem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/slider-food-13.jpg"
            subtitle="این اثر هنری منظره‌ای از ایده‌ها است"
            title1="عالی برای تابستان"
            title2="منوی ناهار"
            btn="مشاهده منوی ما"
          />
        </SwiperSlide>
        <SwiperSlide className="header-swiper-slide">
          <Headerslideritem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/slider-food-18.jpg"
            subtitle="این اثر هنری منظره‌ای از ایده‌ها است"
            title1="غذا های اصیل ایتالیاتی"
            title2="برای رویدادهای شما "
            btn="مشاهده منوی ما"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
