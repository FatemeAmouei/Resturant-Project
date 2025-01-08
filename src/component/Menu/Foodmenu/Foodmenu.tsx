import React from "react";
import "./Foodmenu.css";
import Menutitle from "../Menutitle/Menutitle";
import Fooditem from "../Foodmenu/Fooditem";

export default function Foodmenu() {
  return (
    <section className="foodmenu-section bg-white flex flex-col justify-center">
      <div className="my-20">
        <Menutitle
          className="foodmenu-section__title"
          subtitle="منوی رستوران"
          title="پیشنهادات جدید ما"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        />
      </div>

      <div className="foodmenu-botton bg-white flex flex-wrap items-center">
        <div className="foodmenu-botton__left flex flex-col justify-center w-1/2 ">
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-1.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان  "
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-4.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-6.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-8.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
        </div>
        <div className="foodmenu-botton__right flex flex-col justify-center w-1/2 ">
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-2.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-3.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-5.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
          <Fooditem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-menu-7.jpg"
            title="پیتزا قارچ و پنیر با استیک تکه ای"
            price="69000 تومان"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          />
        </div>
      </div>
    </section>
  );
}
