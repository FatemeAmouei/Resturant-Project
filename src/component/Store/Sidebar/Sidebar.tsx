import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Sidebar.css";
import ShopHeaderCategori from "../../Shopheader/ShopHeaderCategori/ShopHeaderCategori";

export default function Sidebar() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000);

  const handleMinChange = (e) => {
    const value = Math.min(e.target.value, maxPrice);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(e.target.value, minPrice);
    setMaxPrice(value);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <>
      <div className="sidebar-section flex flex-col mr-40 ">
        <div className="categori-section flex flex-col shadow-lg text-right border-2">
          <h1 className="categori-title bg-gray-200 text-2xl font-medium py-4 px-8 m-6">
            CATEGORIES
          </h1>
          <div className="categori-item flex flex-col px-6 pb-8">
            <Link
              to={"/Store"}
              className="py-2 px-3 text-black opacity-50 hover:opacity-100 focus:opacity-100 text-lg"
            >
              آشپزی
            </Link>
            <Link
              to={"/Store"}
              className="py-2 px-3 text-black opacity-50 hover:opacity-100 focus:opacity-100 text-lg"
            >
              اسباب بازی
            </Link>
            <Link
              to={"/Store"}
              className="py-2 px-3 text-black opacity-50 hover:opacity-100 focus:opacity-100 text-lg"
            >
              بدون دسته بندی
            </Link>
            <Link
              to={"/Store"}
              className="py-2 px-3 text-black opacity-50 hover:opacity-100 focus:opacity-100 text-lg"
            >
              روشنایی
            </Link>
            <Link
              to={"/Store"}
              className="py-2 px-3 text-black opacity-50 hover:opacity-100 focus:opacity-100 text-lg"
            >
              ساعت
            </Link>
            <Link
              to={"/Store"}
              className="py-2 px-3 text-black opacity-50 hover:opacity-100 focus:opacity-100 text-lg"
            >
              لوازم جانبی
            </Link>
            <Link
              to={"/Store"}
              className="py-2 px-3 text-black opacity-50 hover:opacity-100 focus:opacity-100 text-lg"
            >
              مبلمان
            </Link>
          </div>
        </div>

        <div className="filterPrice-section flex flex-col shadow-lg text-right border-2 mt-10">
          <h1 className="categori-title bg-gray-200 text-2xl font-medium py-4 px-8 m-6">
            FILTER BY PRICE
          </h1>
          <div className="px-8">
            <div className="relative w-full">
              <input
                type="range"
                min="0"
                max="5000000"
                value={minPrice}
                onChange={handleMinChange}
                className="absolute inset-0 w-full h-2 bg-green-300 rounded-lg"
                style={{
                  zIndex: 2,
                  backgroundSize: `${(minPrice / 5000000) * 100}% 100%`,
                }}
              />
              <input
                type="range"
                min="0"
                max="5000000"
                value={maxPrice}
                onChange={handleMaxChange}
                className="absolute inset-0 w-full h-2 bg-blue-500 rounded-lg"
                style={{
                  zIndex: 1,
                  backgroundSize: `${(maxPrice / 5000000) * 100}% 100%`,
                }}
              />
            </div>

            <div className="flex justify-end items-center mt-8 font-bold text-lg">
              <span className="pr-4"> (تومان) </span>

              <span>
                {formatPrice(minPrice)} - {formatPrice(maxPrice)}
              </span>
              <span className="pl-4 text-gray-400"> :قیمت</span>
            </div>

            <button className="my-6  text-black opacity-70 py-2 px-4 font-bold text-lg">
              فیلتر
            </button>
          </div>
        </div>

        <div className="filterColor-section flex flex-col shadow-lg text-right border-2 mt-10 ">
          <h1 className="categori-title bg-gray-200 text-2xl font-medium py-4 px-8 m-6">
            FILTER BY COLOR
          </h1>
          <div className="px-8 text-xl font-medium">
            <div className="filtercolor-beigeGr flex justify-between items-center mb-5">
              <div className="left">
                <p className="border-2 px-5 py-0 rounded-full">1</p>
              </div>
              <div className="right flex justify-center items-center mb-5">
                <span>Beige</span>
                <div className="color-beige w-8 h-8 rounded-full ml-4"></div>
              </div>
            </div>

            <div className="filtercolor-blackGr flex justify-between items-center mb-5">
              <div className="left">
                <p className="border-2 px-5 py-0 rounded-full">1</p>
              </div>
              <div className="right flex justify-center items-center mb-5">
                <span>Black</span>
                <div className="color-black w-8 h-8 rounded-full bg-black ml-4"></div>
              </div>
            </div>

            <div className="filtercolor-brownGr flex justify-between items-center mb-5">
              <div className="left">
                <p className="border-2 px-5 py-0 rounded-full bg-slate-800">
                  1
                </p>
              </div>
              <div className="right flex justify-center items-center mb-5">
                <span>Brown</span>
                <div className=" color-brown w-8 h-8 rounded-full ml-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="products-section flex flex-col shadow-lg text-right border-2 mt-10 ">
          <h1 className="products-title bg-gray-200 text-2xl font-medium py-4 px-8 m-6">
            Products
          </h1>
          <div className="products-component flex flex-col justify-end pr-6 mb-5 pb-6">
            <ShopHeaderCategori
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-5.jpg"
              title="صندلی میزبان پلاستیکی"
              count="149,000 تومان"
              categoriClass="my-4 border-b-2 pb-6 "
              imgClass="products-img mx-4"
              textsClass="text-md font-bold"
              titleClass="product-title hover:opacity-40 w-full"
              countClass="product-price pt-3"
            />
            <ShopHeaderCategori
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-6.jpg"
              title="نمونه محصول متغیر"
              count="5,000 تومان – 15,000 تومان"
              categoriClass="my-4 border-b-2 pb-6 "
              imgClass="products-img mx-4"
              titleClass="product-title hover:opacity-40 w-full"
              countClass="product-price pt-3"
            />
            <ShopHeaderCategori
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3.jpg"
              title="صندلی چوبی کلاسیک"
              count="29,000 تومان"
              categoriClass="my-4 border-b-2 pb-6 "
              imgClass="products-img mx-4"
              textsClass="text-md font-bold"
              titleClass="product-title hover:opacity-40 w-full"
              countClass="product-price pt-3"
            />
            <ShopHeaderCategori
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-1.jpg"
              title="کاور چوبی آیفون 12 پرو مکس"
              count="399,000 تومان"
              discountcount="349,000 تومان"
              categoriClass="my-4 border-b-2 pb-6 "
              imgClass="products-img mx-4"
              textsClass="text-md font-bold"
              titleClass="product-title hover:opacity-40 w-full"
              countClass="product-price pt-3"
            />
            <ShopHeaderCategori
              img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-2.jpg"
              title="مبل راحتی زرد یک نفره"
              count="399,000 تومان"
              categoriClass="my-4 border-b-2 pb-6 "
              imgClass="products-img mx-4"
              textsClass="text-md font-bold"
              titleClass="product-title hover:opacity-40 w-full"
              countClass="product-price pt-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
