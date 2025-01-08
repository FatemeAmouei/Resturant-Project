import React from "react";
import "./Suggestionfood.css";
import SuggestionfoodItem from "./SuggestionfoodItem";

export default function Suggestionfood() {
  return (
    <section className="suggestionfood-section flex flex-col ">
      <div className="suggestionfood-top h-1/2">
        <SuggestionfoodItem
          className="suggestionfood-bottom1"
          imgsclassName="flex-row-reverse"
          textclassName="suggestionfood-top__text"
          btnclassName="suggestionfood-top__btn1"
          descclassName="suggestionfood-top__desc1"
          title1="خوش طعم"
          title2="غذاهای ایتالیایی اصیل"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود."
          btnleft="بیشتر بخوانید"
          btnright=" کلیک کنید"
          img1="https://demo.i-wp.ir/woodland/food/wp-content/uploads/elementor/thumbs/food-meat-img-l-qlq8fb98ugvbh0ix5fj7c8eocl9705boxfxz1rn820.jpg"
          img2="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-meat-img-s.jpg"
        />
      </div>

      <div className="suggestionfood-bottom h-1/2">
        <SuggestionfoodItem
          className="suggestionfood-bottom2"
          textclassName="suggestionfood-bottom__text"
          btnclassName="suggestionfood-top__btn2"
          descclassName="suggestionfood-top__desc2"
          title1="صدف های امریکایی"
          title2="درشت با طبخ فوق العاده"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود."
          btnleft="اطلاعات بیشتر "
          btnright=" کلیک کنید"
          img1="https://demo.i-wp.ir/woodland/food/wp-content/uploads/elementor/thumbs/gallery-image-43-qlq8fb98ugvvxlv7hi7nvc8oqfpea1avixft2q673k.jpg"
          img2="https://demo.i-wp.ir/woodland/food/wp-content/uploads/elementor/thumbs/gallery-image-44-qlq8fb98ugvbh0ix5fj7c8eocl9705boxfxz1rn820.jpg"
        />
      </div>
    </section>
  );
}
