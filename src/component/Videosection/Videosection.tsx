import React from "react";
import "./Videosection.css";
import Video from "./video";

export default function Videosection() {
  return (
    <section className="video-section absolute w-full">
      <a href="#" className="relative block group">
        <div className="video-section__img relative z-1">
          <img
            src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/video-placeholder-3.jpg"
            alt="slider1"
            className=" videoitem-img object-cover"
          />
        </div>

        <div className=" videoitem-text absolute inset-0 z-10">
          <div className="absolute inset-0 flex flex-col items-center justify-start bg-black/50 text-white z-10 mt-20 font-bold">
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/Rosemary-93x65-1.png"
              alt="img"
              className=" videoitem-bargimg"
            />
            <p className="text-6xl pt-5">همراه ما باشید</p>
            <div className="flex flex-col items-center justify-around text-gray-300">
              <p className="text-7xl mt-10">
                رسانه ویدئویی رستوران را دنبال کنید
              </p>
              <p className=" text-xl mt-10">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>

        <div className="video-div flex justify-start items-center relative bg-white z-10 mt-20 ">
          <Video
            src="https://player.vimeo.com/video/235215203?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1"
            imgcover="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/video-placeholder-4.jpg"
          />
          <Video
            src="https://player.vimeo.com/video/235215203?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1"
            imgcover="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/video-placeholder-5.jpg"
          />
          <Video
            src="https://player.vimeo.com/video/235215203?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1"
            imgcover="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/video-placeholder-6.jpg"
          />
        </div>
      </a>
    </section>
  );
}
