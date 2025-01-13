import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogItem from "./BlogItem";
import Sliderfooter from "../Sliderfooter/Sliderfooter";

export default function Blog() {
  return (
    <>
      <div className="blog-section">
        <div className="blog-section__top flex flex-col justify-center items-center h-1/4 bg-black text-white text-center ">
          <h1 className="font-bold text-8xl "> بلاگ </h1>
        </div>
        <div className="blog-section__bottom flex justify-between w-3/4 ml-72 h-1/2 mt-36 ">
          <div className="blog-section__bottom flex justify-center items-center w-1/3 h-3/4">
            <BlogItem
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3-600x600.jpg"
              trendBtn="ترندهای طراحی"
              dateDay="16"
              dateMon="ژوئن"
              title=" حقیقت هایی درباره پرخوری"
              parag="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون..."
              endBtn="ادامه مطلب"
            />
          </div>
          <div className="blog-section__bottom flex justify-center items-center w-1/3 h-3/4">
            <BlogItem
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-6-600x600.jpg"
              trendBtn="ترندهای طراحی"
              dateDay="16"
              dateMon="ژوئن"
              title="برترین غذاهای جهان کدامند؟"
              parag="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون..."
              endBtn="ادامه مطلب"
            />
          </div>
          <div className="blog-section__bottom flex justify-center items-center w-1/3 h-3/4">
            <BlogItem
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-5-600x600.jpg"
              trendBtn="ترندهای طراحی"
              dateDay="14"
              dateMon="ژوئن"
              title="کدام رژیم سالمتر است؟"
              parag="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون..."
              endBtn="ادامه مطلب"
            />
          </div>
        </div>
        <Sliderfooter />
      </div>
    </>
  );
}
