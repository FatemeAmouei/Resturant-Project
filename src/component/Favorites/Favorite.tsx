import React from "react";
import "./Favorite.css";
import { Link } from "react-router-dom";
import Sliderfooter from "../Sliderfooter/Sliderfooter";
import { MdFavoriteBorder } from "react-icons/md";

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

        <div className="favorite-section__bottom h-3/4 flex flex-col justify-center items-center">
          <MdFavoriteBorder className=" favorite-icon opacity-20 h-full mt-28" />
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

          <Sliderfooter />
        </div>
      </div>
    </>
  );
}
