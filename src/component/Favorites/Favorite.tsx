import React from "react";
import "./Favorite.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Favorite() {
  return (
    <>
      <div className="favorite-section">
        <div className="favorite-section__top flex flex-col justify-center items-center h-1/4 bg-black text-white text-center ">
          <h1 className="font-bold text-8xl ">علاقه مندی </h1>

          <nav className="flex mt-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center">
              <li className="inline-flex items-center">
                <Link
                  to={"/favorites"}
                  className=" text-sm font-medium hover:text-gray-500"
                >
                  علاقه مندی
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-xl px-4">/</span>
                  <Link
                    to={"/"}
                    className="items-center text-sm font-medium hover:text-gray-500"
                  >
                    خانه
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="favorite-section__bottom h-3/4">
          <div className="favorite-section__texts flex flex-col justify-end items-center h-3/4">
            <h1 className="font-bold text-6xl pb-8">
              .این لیست علاقه مندی خالی است
            </h1>
            <p className="text-gray-600 text-xl py-1">
              You don't have any products in the wishlist yet.
            </p>
            <p className="text-gray-600 text-xl py-1">
              You will find a lot of interesting products on our "Shop" page.
            </p>
            <button
              type="button"
              className="favorite-btn text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-bold text-lg px-10 py-4 my-6 focus:outline-none"
            >
              بازگشت به فروشگاه
            </button>
          </div>

          <div className="favorite-section__sliders h-1/4 w-3/4 mt-28 ml-72">
            <Swiper loop={true} slidesPerView={7} className="favorite-swiper">
              <SwiperSlide className="favorite-swiper-slide">
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-hay.png"
                  alt="brand-hay"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Joseph-Joseph.png"
                  alt="brand-Joseph"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-klober.png"
                  alt="brand-klober"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="	https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Louis-Poulsen.png"
                  alt="brand-Louis"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Magisso.png"
                  alt="brand-Magisso"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Eva-Solo.png"
                  alt="brand-Eva"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="	https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-alessi.png"
                  alt="brand-alessi"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-Eva-Solo.png"
                  alt="brand-Eva-Solo"
                />
              </SwiperSlide>
              <SwiperSlide className="favorite-swiper-slide">
                {" "}
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/brand-flos.png"
                  alt="brand-flos"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
