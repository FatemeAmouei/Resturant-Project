import React from "react";
import "./ShopHeaderCategori.css";
import { Link } from "react-router-dom";

interface CategoriProps {
  img?: string;
  title: string;
  count: string;
  onClick: () => void;
  imgClass?: string;
  categoriClass?: string;
  textsClass?: string;
  titleClass?: string;
  countClass?: string;
}

export default function ShopHeaderCategori(props: CategoriProps) {
  return (
    <>
      <div
        className={`flex flex-row-reverse items-center ml-6 ${props.categoriClass}`}
        onClick={props.onClick}
      >
        <div className="categori-section__img items-center">
          <Link to={"/"} className="items-center">
            <img
              src={props.img}
              alt={props.title}
              className={`${props.imgClass}`}
            />
          </Link>
        </div>
        <div className={`flex flex-col text-right text-xl ${props.textsClass}`}>
          <p className={` font-bold relative inline-block ${props.titleClass}`}>
            {props.title}
          </p>
          <p className={`text-gray-400 pt-1 ${props.countClass}`}>
            {props.count}
          </p>
        </div>
      </div>
    </>
  );
}
