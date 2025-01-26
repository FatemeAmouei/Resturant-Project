import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import "./Comments.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Menutitle from "../menu/Menutitle/Menutitle";
import Comment from "../Comments/Comment";

export default function Comments() {
  return (
    <section className="Comments-section bg-white flex flex-col justify-start">
      <Menutitle
        menutitleClassname="Comments-menutitle"
        className="Comments-section__title h-1/4"
        subtitle="نظرات مشتریان"
        title="از بازدید کنندگان ما"
      />
      <Swiper
        className="Comments-swiper w-2/3 h-3/4"
        loop={true}
        autoplay={true}
        modules={[Navigation, Scrollbar, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        slidesPerView={1}
        spaceBetween={10}
      >
        <SwiperSlide className="Comments-swiper-slide">
          <Comment
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع."
            userName="Google Inc - سارا رسولی"
          />
        </SwiperSlide>

        <SwiperSlide className="Comments-swiper-slide">
          <Comment
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع."
            userName="فرانت اند  - فاطمه عموئی"
          />
        </SwiperSlide>

        <SwiperSlide className="Comments-swiper-slide">
          <Comment
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع."
            userName=" مدیرسایت - علی محمدی"
          />
        </SwiperSlide>

        <SwiperSlide className="Comments-swiper-slide">
          <Comment
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع."
            userName="بک اند  -  زهرا حامدی فر"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
