import React from "react";
import "./Shopheader.css";
import ShopHeaderCategori from "./ShopHeaderCategori/ShopHeaderCategori";

export default function Shopheader() {
  return (
    <>
      <div className="shopheader-section flex flex-col justify-center items-center bg-black text-white ">
        <h1 className="font-bold text-8xl">فروشگاه </h1>

        <div className="shopheader-categories flex flex-row-reverse justify-between items-center mt-16">
          <ShopHeaderCategori title="بدون دسته بندی" count=" 1 محصول" />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/knives.svg"
            title="آشپزی"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/knives.svg"
            title="اسباب بازی"
            count="1محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/flower.svg"
            title="روشنایی"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/flower.svg"
            title="ساعت"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/chair.svg"
            title="لوازم جانبی"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/chair.svg"
            title="مبلمان"
            count=" 4 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
          />
        </div>
      </div>
    </>
  );
}
