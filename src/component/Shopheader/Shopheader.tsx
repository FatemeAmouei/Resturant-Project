import React from "react";
import "./Shopheader.css";
import ShopHeaderCategori from "./ShopHeaderCategori/ShopHeaderCategori";
interface ShopHeaderProps {
  onFilter: (category: string) => void;
}

const Shopheader: React.FC<ShopHeaderProps> = ({ onFilter }) => {
  return (
    <>
      <div className="shopheader-section flex flex-col justify-center items-center bg-black text-white ">
        <h1 className="font-bold text-8xl">فروشگاه </h1>

        <div className="shopheader-categories flex flex-row-reverse justify-between items-center mt-16">
          <ShopHeaderCategori
            title="بدون دسته بندی"
            count=" 1 محصول"
            onClick={() => onFilter("")}
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/knives.svg"
            title="آشپزی"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
            onClick={() => onFilter("آشپزی")}
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/knives.svg"
            title="اسباب بازی"
            count="1محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
            onClick={() => onFilter("اسباب بازی")}
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/flower.svg"
            title="روشنایی"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
            onClick={() => onFilter("روشنایی")}
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/flower.svg"
            title="ساعت"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
            onClick={() => onFilter("ساعت")}
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/chair.svg"
            title="لوازم جانبی"
            count=" 1 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
            onClick={() => onFilter("لوازم جانبی")}
          />
          <ShopHeaderCategori
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/chair.svg"
            title="مبلمان"
            count=" 4 محصول"
            categoriClass="categori-section"
            imgClass="categori-img"
            textsClass="categori-section__texts"
            titleClass="categori-texts__title"
            onClick={() => onFilter("مبلمان")}
          />
        </div>
      </div>
    </>
  );
};
export default Shopheader;
