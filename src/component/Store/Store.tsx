import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sliderfooter from "../Sliderfooter/Sliderfooter";
import Shopheader from "../Shopheader/Shopheader";
import "./Store.css";
import Storebody from "./Storebody/Storebody";

function Store(): JSX.Element {
  return (
    <>
      <Navbar />
      <Shopheader />
      <Storebody />
      <Sliderfooter />
      <Footer />
    </>
  );
}

export default Store;
