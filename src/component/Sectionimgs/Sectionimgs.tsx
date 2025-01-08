import React from "react";
import "./Sectionimgs.css";
import SectionimgsItem from "./SectionimgsItem";

function Sectionimgs() {
  return (
    <>
      <section className="imgs-section flex items-start justify-center h-full">
        <div className="imgs-section__left ">
          <SectionimgsItem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/gallery-image-63.jpg"
            subtitle="چک کنید"
            title1="جدید "
            title2="قابل سفارش در فروشگاه "
            showButton={true}
            TextsClassName="left-texts"
            ImgClassName="imgs-section__leftImg "
            subtitleClassName="self-end pr-5"
            title1ClassName="self-end pr-5"
            title2ClassName="text-right pr-5"
          />
        </div>

        <div className="imgs-section__center">
          <div className="imgs-section__centerdiv flex flex-wrap justify-start">
            <div className="imgs-section__top flex flex-nowrap items-center justify-start">
              <SectionimgsItem img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-image-3.jpg " />
              <SectionimgsItem
                img="./img/blackimg.jpg"
                subtitle="برای سازمان ها"
                title1="منوی ناهار"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
              />
            </div>
            <div className="imgs-section__bottom flex flex-nowrap items-center justify-start">
              <SectionimgsItem
                img="./img/blackimg.jpg"
                subtitle="شخصی شما"
                title1="سبک زندگی"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
              />
              <SectionimgsItem img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-image-4.jpg" />
            </div>
          </div>
        </div>

        <div className="imgs-section__right">
          <SectionimgsItem
            img="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2021/05/food-image-6-768x768.jpg"
            subtitle="بهترین مزه ها تاکنون"
            title1="خوشمزه"
            title2="برای بیزینس ها"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            showButton={true}
            ImgClassName="right-Img"
          />
        </div>
      </section>
    </>
  );
}
export default Sectionimgs;
