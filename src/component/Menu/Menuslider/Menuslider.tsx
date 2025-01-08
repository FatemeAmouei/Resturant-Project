import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import "./menuslider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Menutitle from "../Menutitle/Menutitle";
import Menuitem from "../Menuslider/Menuitem";

export default function Menuslider() {
  return (
    <section className="menuslider-section bg-white flex flex-col justify-center m-0 ">
      <Menutitle
        className="menuslider-section__title"
        subtitle="منوی پیشنهادی ما"
        title="غذاهای ویژه رستوران"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      />
      <Swiper
        className="menu-swiper w-3/4"
        loop={true}
        autoplay={true}
        modules={[Navigation, Scrollbar, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        slidesPerView={3}
        spaceBetween={0}
      >
        <SwiperSlide className="menu-swiper-slide ">
          <Menuitem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-6-600x600.jpg"
            title="خوراک مرغ ایتالیایی"
            price="500,000 تومان 230,000- تومان"
          />
        </SwiperSlide>

        <SwiperSlide className="menu-swiper-slide">
          <Menuitem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-4-600x600.jpg"
            title="استیک مرغ با دورچین"
            price="890,000 تومان"
          />
        </SwiperSlide>

        <SwiperSlide className="menu-swiper-slide">
          <Menuitem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-5-600x600.jpg"
            title="  خوراک  "
            price="350,000 تومان"
          />
        </SwiperSlide>

        <SwiperSlide className="menu-swiper-slide">
          <Menuitem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-2-600x600.jpg"
            title=" ماهی سرخ شده با سس مخصوص"
            price="420,000 تومان"
          />
        </SwiperSlide>

        <SwiperSlide className="menu-swiper-slide">
          <Menuitem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-1-600x600.jpg"
            title="استیک"
            price="951,000 تومان"
          />
        </SwiperSlide>

        <SwiperSlide className="menu-swiper-slide">
          <Menuitem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3-600x600.jpg"
            title="استیک ماهی با دورچین"
            price="351,000 تومان"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
