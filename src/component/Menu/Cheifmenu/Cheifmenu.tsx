import React from "react";
import "./Cheifmenu.css";
import Menutitle from "../Menutitle/Menutitle";
import Chiefmenuitem from "./CheifmenuiItem";

export default function Cheifmenu() {
  return (
    <section className="cheifmenu-section flex flex-col justify-center items-center">
      <div className="cheifmenu-top h-1/3 w-full">
        <Menutitle
          className="cheifmenu-section__title"
          subtitle="فقط برای شما"
          title="منوی سرآشپز رستوران"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        />
      </div>

      <div className="cheifmenu-bottom flex justify-center items-center h-3/4 w-3/4">
        <Chiefmenuitem
          img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3-600x600.jpg"
          title="نمونه محصول متغیر"
          price="هزارتومان 50"
          btn="انتخاب گزینه ها"
        />
        <Chiefmenuitem
          img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-6-600x600.jpg"
          title="نمونه محصول متغیر"
          price="هزارتومان 50"
          btn="انتخاب گزینه ها"
        />
        <Chiefmenuitem
          img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-5-600x600.jpg"
          title="نمونه محصول متغیر"
          price="هزارتومان 50"
          btn="انتخاب گزینه ها"
        />
      </div>
    </section>
  );
}
