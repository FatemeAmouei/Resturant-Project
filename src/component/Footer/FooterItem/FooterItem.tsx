import React from "react";

export default function FooterItem(props: any) {
  return (
    <>
      <section className="footerItem-section p-6 m-7">
        <div className="footerItem-top flex flex-col justify-center text-right text-xl font-bold">
          <p className="footer-left__title pb-6">{props.title}</p>
          <div className="footer-left__text1 text-gray-400">
            <p className="pb-3">{props.text1}</p>
            <p className="pb-3">{props.text2}</p>
            <p className="pb-3">{props.text3}</p>
            <p className="pb-3">{props.text4}</p>
            <p className="pb-3">{props.text5}</p>
            <p className="pb-3">{props.text6}</p>
          </div>
        </div>
      </section>
    </>
  );
}
