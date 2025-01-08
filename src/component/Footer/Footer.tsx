import React from "react";
import "./Footer.css";
import FooterItem from "./FooterItem/FooterItem";

export default function Footer() {
  return (
    <>
      <section className="footer-section bg-black text-white pr-5">
        <div className="footer-top flex justify-end items-center w-full h-4/5">
          <div className="footer-letf flex justify-around items-center w-2/5">
            <FooterItem
              title="فهرست فوتر"
              text1="پروفایل اینستاگرام"
              text2="کالکشن های جدید"
              text3="لباس زنانه"
              text4="تماس با ما"
              text5="آخرین اخبار"
              text6="سفارش پوسته"
            />
            <FooterItem
              title="لینک های مفید"
              text1="حریم خصوص"
              text2="استراد"
              text3="قوانین و مقررات"
              text4="تماس با ما"
              text5="اخرین اخبار"
              text6="نقشه سایت"
            />{" "}
            <FooterItem
              title="فروشگاه های ما"
              text1="تهران"
              text2="شیراز"
              text3="اصفهان"
              text4="مشهد"
              text5="یزد"
              text6="تبریز"
            />{" "}
          </div>

          <div className="footer-center w-1/5 flex flex-col justify-between text-right">
            <div className="mx-5 font-bold pb-4 text-2xl">
              <p>Recent Posts</p>
            </div>
            <div className="footer-center__top flex flex-col justify-around mx-5 items-end  text-lg">
              <div className=" flex flex-col justify-center">
                <p>طراحی داخلی مینیمال ژاپنی</p>
                <div className=" flex justify-center text-gray-400 text-lg">
                  <p className="pr-5">بدون دیدگاه</p>
                  <p>ژوئن 16, 2017</p>
                </div>{" "}
              </div>
            </div>

            <div className="footer-divider w-full border-t border-gray-700 my-4"></div>

            <div className="footer-center__bottom flex justify-end m-5 text-lg">
              <div className=" flex flex-col justify-center mx-5">
                <p>دکور داخلی جدید از خانم زرگر</p>

                <div className=" flex justify-center text-gray-400 text-lg">
                  <p className="pr-5">بدون دیدگاه</p>
                  <p>ژوئن 16, 2017</p>
                </div>
              </div>
              <div className="w-32 h-28">
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/blog-grid-11-75x60.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="footer-right flex flex-col justify-between w-1/5 text-right text-lg mr-56">
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/themes/woodmart/images/wood-logo-white.svg"
              alt=""
              className="footer-right__img w-2/3 pb-6"
            />
            <p className="pb-6">
              Condimentum adipiscing vel neque dis nam parturient orci at
              scelerisque neque dis nam parturient.
            </p>
            <p>451 Wall Street, UK, London</p>
            <p>Phone: (064) 332-1233</p>
            <p>Fax: (099) 453-1357</p>
          </div>
        </div>

        <div className="footer-divider w-full border-t border-gray-700 my-4"></div>

        <div className="footer-bottom flex justify-around items-center h-1/7 pt-4">
          <div className="footer-bottom__imgs">
            <img
              src="https://demo.i-wp.ir/woodland/food/wp-content/themes/woodmart/images/payments.png"
              alt="footer-bottom__imgs"
              className=""
            />
          </div>
          <div className="footer-bottom__text text-lg">
            <p>
              تمام حقوق برای <a href="#">وردپرس من</a> محفوظ است.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
