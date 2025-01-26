import React from "react";
import "./Comment.css";

export default function Comment(props: any) {
  return (
    <section className="comment-component flex flex-col items-center justify-start">
      <img
        className="comment-img rounded-full "
        src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/wood-testimonials-placeholder.jpg"
        alt="userimg"
      />
      <h2 className=" comment-item text-lg text-gray-500 w-1/2 text-center pb-10">
        {props.comment}
      </h2>
      <p className=" comment-userName text-center text-lg font-bold text-green-900 ">
        {props.userName}
      </p>
    </section>
  );
}
