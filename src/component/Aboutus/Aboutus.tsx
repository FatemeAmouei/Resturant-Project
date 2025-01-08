import React, { useState } from "react";
import "./Aboutus.css";
import { FiPlay } from "react-icons/fi";

export default function Aboutus() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
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
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت.{" "}
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

      <div className="aboutus-bottom flex items-center justify-around ml-20 ">
        <div className="aboutus-video-container relative shadow-lg ml-40 bg-black-500">
          <iframe
            className="w-Full h-full aboutus-video-frame"
            title="پخش کننده ویدئو vimeo"
            src="https://player.vimeo.com/video/235215203?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            aria-label="پخش‌کننده ویدئوی Vimeo برای نمایش محتوای مرتبط"
          ></iframe>

          {!isPlaying && (
            <div
              className="aboutus-video-cover absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage: `url(https://demo.i-wp.ir//woodland//food//wp-content//uploads//2021//05//food-video-3.jpg)`,
              }}
              onClick={handlePlayVideo}
            >
              <button className="aboutus-video-btn text-white p-10 border-4 border-white border-opacity-60 rounded-full text-5xl items-center">
                <FiPlay />{" "}
              </button>
              <div className="aboutus-video-divdark absolute inset-0 bg-black bg-opacity-10"></div>
            </div>
          )}
        </div>

        <div className="aboutus-left flex flex-col items-center justify-center mt-20 mr-40 pr-24">
          <p className="aboutus-left__subtitle text-5xl font-bold mt-5 ">
            لذت ببرید{" "}
          </p>
          <h2 className="aboutus-left__title pb-8 text-6xl font-bold mt-5">
            ویدئوی با کیفیت از غذاها
          </h2>
          <p className="aboutus-left__text text-2xl text-gray-500 text-center leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع.
          </p>
          <div className="btn flex items-center justify-around w-1/2">
            <button className="px-9 py-3 text-xl font-bold rounded-lg border-2 border-transparent bg-clip-border hover:bg-gradient-to-r hover:from-green-900 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-green-400 z-20 mt-20">
              اطلاعات بیشتر{" "}
            </button>
            <button className=" px-9 py-3 text-xl font-bold text-white bg-green-800 z-20 mt-20 ">
              بیشتر بخوانید{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
