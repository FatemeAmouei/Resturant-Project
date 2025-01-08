import React from "react";
import "./SuggestionfoodItem.css";

export default function SuggestionfoodItem(props: any) {
  return (
    <section>
      <div className="suggestionfood-container">
        <div className={`${props.className} suggestionfood-Item flex w-full`}>
          <div className="suggestionfood-text__section w-1/2 mt-20 ">
            <div
              className={`${props.textclassName} suggestionfood-text__container flex flex-col items-center justify-center`}
            >
              <p className="suggestionfood-title1 text-5xl mt-5 w-full">
                {props.title1}
              </p>
              <p className=" suggestionfood-title2 pb-8 text-5xl mt-5 w-full">
                {props.title2}
              </p>
              <p
                className={`${props.descclassName} suggestionfood-desc text-xl text-gray-500 leading-relaxed w-full justify-end`}
              >
                {props.desc}
              </p>
              <div
                className={`${props.btnclassName} flex justify-center items-center w-full`}
              >
                <button className=" px-9 py-3 text-lg font-medium text-black bg-white mt-10 ">
                  {props.btnright}
                </button>
                <button className="px-9 py-3 text-lg font-medium text-white bg-green-800 mt-10">
                  {props.btnleft}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${props.imgsclassName} suggestionfood-imgs flex justify-start`}
          >
            <img
              className="suggestionfood-img2 px-8 mt-20 "
              src={props.img2}
              alt="suggestionfoodImg2"
            />
            <img
              className="suggestionfood-img1 px-8 mt-10"
              src={props.img1}
              alt="suggestionfoodImg1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
