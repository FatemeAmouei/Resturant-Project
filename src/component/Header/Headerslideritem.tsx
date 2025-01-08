import React from "react";
import "./Headerslideritem.css";

export default function Headerslideritem(props: any) {
  return (
    <section className="header-section">
      <a href="#" className="relative block group">
        <div className="header-section__img">
          <img
            src={props.img}
            alt="slider1"
            className=" headeritem-img w-full h-auto"
          />
        </div>
        <div className="absolute inset-0 z-10 mt-40">
          <div className="absolute inset-0 flex flex-col items-center justify-start bg-black/50 text-white z-10 mt-40">
            <p className="text-4xl">{props.subtitle}</p>
            <div className="flex flex-col items-center justify-around text-gray-300 text-8xl font-bold mt-20">
              <p className="pb-8">{props.title1}</p>
              <p>{props.title2} </p>
            </div>

            <button className="relative inline-flex items-center justify-center px-9 py-3 text-xl font-medium text-white bg-green-800 bg-opacity-80 rounded-lg hover:opacity-50 z-20 mt-20">
              {props.btn}
            </button>
          </div>
        </div>
      </a>
    </section>
  );
}
