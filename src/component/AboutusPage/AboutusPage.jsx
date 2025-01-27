import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import "./AboutusPage.css";

function AboutusPage() {
  return (
    <>
      <Navbar />

      <section className="aboutus-section flex flex-col">
        <div className="aboutus-top flex justify-center mt-20">
          <div className="aboutus-left flex flex-col items-center justify-center w-1/2 mt-40">
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/Rosemary-93x65-1.png"
              alt=""
            />
            <p className="aboutus-left__subtitle text-3xl mt-5 text-green-900 ">
              به وب سایت ما خوش آمدید
            </p>
            <h2 className=" aboutus-left__title pb-8 text-5xl font-bold mt-5">
              درباره رستوران ما
            </h2>
            <p className="aboutus-left__text text-2xl text-gray-500 text-center leading-relaxed px-28">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت.{" "}
            </p>
            <img
              className="mt-5"
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/elementor/thumbs/food-signature-qlq8fb95stuzmv5ebjnsko81ppx49gnpc0u6u2ydh2.png"
              alt=""
            />
          </div>

          <div className="aboutus-right w-1/2 mr-10">
            <div className="flex justify-start">
              <img
                className="px-8 mt-10 h-1/2"
                src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/elementor/thumbs/food-image-2-qlq8fb98ugvvxlv7hi7nvc8oqfpea1avixft2q673k.jpg"
                alt=""
              />
              <img
                className="px-8 mt-20 h-1/2"
                src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/elementor/thumbs/food-image-1-qlq8fb98ugvvxlv7hi7nvc8oqfpea1avixft2q673k.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutusPage;
