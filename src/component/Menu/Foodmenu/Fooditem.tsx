import React from "react";
import "./fooditem.css";

export default function Fooditem(props: any) {
  return (
    <section className="fooditem-component flex items-center justify-end mx-2 my-8">
      <div className="fooditem-left flex flex-col items-center justify-center text-right">
        <div className="fooditem-left__top flex items-center justify-between w-full text-2xl h-16 mr-20">
          <p className=" fooditem-price font-bold text-green-900 ml-20">
            {props.price}
          </p>
          <h2 className=" fooditem-item font-bold text-black">{props.title}</h2>
        </div>

        <div className="fooditem-divider w-full border-t border-gray-300 my-4"></div>

        <div className="fooditem-left__bottom">
          <p className=" fooditem-desc text-right text-lg text-gray-400 pr-20 mr-5">
            {props.desc}{" "}
          </p>
        </div>
      </div>

      <div className="fooditem-right flex flex-col items-center justify-center mr-9">
        <img
          src={props.img}
          alt="img"
          className="fooditem-img w-40 h-40 absolute"
        />
      </div>
    </section>
  );
}
