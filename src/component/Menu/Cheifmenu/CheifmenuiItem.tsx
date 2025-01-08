import React from "react";
import "./Chiefmenuitem.css";

export default function Chiefmenuitem(props: any) {
  return (
    <section className="chiefmenuitem-component flex items-center justify-end relative">
      <div className="chiefmenuitem-img relative block group w-full text-2xl mt-10">
        <img src={props.img} alt="CheiMenuImg" />
      </div>

      <div className="chiefmenuitem-cover absolute inset-0 bg-black font-bold bg-opacity-50 flex flex-row-reverse items-center justify-center opacity-0 text-white ">
        <div className=" flex  flex-col items-center justify-between w-full h-20 mr-20">
          <h2 className=" chiefmenuitem-title text-2xl ">{props.title}</h2>
          <p className=" chiefmenuitem-price text-lg  mt-2">{props.price}</p>
          <button className="chiefmenuitem-btn relative inline-flex items-center justify-center px-9 py-3 text-xl font-medium text-white border-2 border-white hover:border-opacity-50 mt-2">
            <span> {props.btn}</span>
            <a href="basketshop" className="btn-icon mx-5 hidden">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 23 23"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>{" "}
            </a>
          </button>
        </div>

        <div className="menuitem-icons flex flex-col items-center justify-start w-1/5 h-full mt-10 text-whiter">
          <a href="favo">
            {" "}
            <svg
              className="m-2 hover:text-gray-500"
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 23"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="comprison">
            <svg
              className="m-2 hover:text-gray-500"
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 23"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </a>
          <a href="search">
            {" "}
            <svg
              className="m-2 hover:text-gray-500"
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 23"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
