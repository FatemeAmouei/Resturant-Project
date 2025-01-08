import React from "react";
import "./SectionimgsItem.css";

function SectionimgsItem(props: any) {
  return (
    <>
      <section className="SectionImgsItem-section w-full h-auto ">
        <a
          href="#"
          className={`${props.divClassName} ImgsItem relative block group overflow-hidden`}
        >
          <div className="relative">
            <img
              src={props.img}
              alt="img"
              className={`${props.ImgClassName} imgitem-img w-full `}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-500"></div>
          </div>
          <div className="imgitem-texts absolute inset-0 z-10">
            <div
              className={`${props.TextsClassName} absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-gray-300 z-10`}
            >
              <p
                className={`${props.subtitleClassName} text-2xl text-white-300 font-bold`}
              >
                {props.subtImgsItemitle}
              </p>
              <div className="flex flex-col items-center justify-around text-5xl font-bold text-white mt-5">
                <p className={`${props.title1ClassName} pb-6`}>
                  {props.title1}
                </p>
                <p className={props.title2ClassName}>{props.title2} </p>
              </div>
              <p className="img-desc text-md text-center px-8 py-5 text-xl font-medium">
                {props.desc}
              </p>

              {props.showButton && (
                <button
                  className="relative inline-flex items-center justify-center px-7 py-3 text-md font-medium
                 text-white bg-transparent border-gray-300 border-4 border-opacity-50 hover:border-opacity-100 z-20 mt-10"
                >
                  اطلاعات بیشتر
                </button>
              )}
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
export default SectionimgsItem;
