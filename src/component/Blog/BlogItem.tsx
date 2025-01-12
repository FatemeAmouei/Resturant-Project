import React, { useState } from "react";
import "./BlogItem.css";
import { RiTelegramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

export default function blogItem(props: any) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <div className="blogItem-section w-1/4 absolute group hover:shadow-xl mt-20 ">
        <div className="blogItem-section__img w-full">
          <a href="">
            <img src={props.img} alt="" className="blogItem-img " />
          </a>
        </div>

        <div className="blogItem-section__text text-center mx-5">
          <div className="blog-date flex flex-col relative bg-white py-2 text-xl text-black font-bold w-1/6">
            <span className="">{props.dateDay}</span>
            <span className="">{props.dateMon}</span>
          </div>
          <button
            type="button"
            className="blog-trend__btn text-white font-bold text-lg px-2 py-1 relative"
          >
            {props.trendBtn}
          </button>
          <div className="blog-texts relative">
            <h1 className="font-bold text-2xl text-black pb-2">
              {props.title}
            </h1>

            <div className="menuitem-icons cursor-pointer flex items-center justify-between text-black w-1/2 ml-32 text-lg font-bold">
              <div className="userIcon flex items-center opacity-30">
                <span className="px-3">توسط</span>
                <svg
                  className="blog-iconUser"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 23 23"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>

              <div className="msgIcon flex items-center">
                <span className="AdminIcon px-3  opacity-30 hover:opacity-40">
                  Admin
                </span>
                <svg
                  className="blog-iconShop mt-1 opacity-30 hover:opacity-40"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
                  />
                </svg>
              </div>

              <div
                className="flex items-center text-center relative"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
              >
                <svg
                  className="blog-iconShare mt-1 opacity-30 hover:opacity-40"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="12" r="2" stroke="black" strokeWidth="2" />
                  <circle cx="18" cy="6" r="2" stroke="black" strokeWidth="2" />
                  <circle
                    cx="18"
                    cy="18"
                    r="2"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7.5 11.5L16.5 6.5M7.5 12.5L16.5 17.5"
                  />
                </svg>

                <div
                  role="tooltip"
                  className={`tooltip relative z-10 w-40 ${
                    tooltipVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  } inline-block px-3 py-2 text-2xl text-white transition-opacity duration-300 `}
                >
                  <div className="tooltio_icons flex flex-row-reverse justify-around items-center">
                    <RiTelegramLine />
                    <FaLinkedinIn />
                    <FaPinterestP />
                    <FiTwitter />
                    <SlSocialFacebook />
                  </div>
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <p className="text-black opacity-50 text-xl py-1">{props.parag}</p>

            <button
              type="button"
              className="blog-btn font-bold text-lg px-10 my-6 relative"
            >
              {props.endBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
