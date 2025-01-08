import React from "react";
import "./Menutitle.css";

export default function Menutitle(props: any) {
  return (
    <section className="menutitle-section flex flex-col">
      <div className="menutitle-left flex flex-col items-center justify-center">
        <p className="menutitle-left__subtitle text-3xl mt-20 text-green-900 ">
          {props.subtitle}
        </p>
        <h2 className=" menutitle-left__title pb-8 text-5xl font-bold mt-5">
          {props.title}
        </h2>
        <p className=" menutitle-left__text text-center text-xl text-gray-500 w-1/3  leading-relaxed">
          {props.desc}
        </p>
      </div>
    </section>
  );
}
