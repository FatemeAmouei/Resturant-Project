import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sliderfooter from "../Sliderfooter/Sliderfooter";
import Shopheader from "../Shopheader/Shopheader";
import Sidebar from "./Sidebar/Sidebar";
import "./Store.css";

function Store() {
  return (
    <>
      <Navbar />
      <Shopheader />
      <section className="store-section flex flex-row-reverse justify-start items-center">
        <div className="store-sidebar flex-1">
          <Sidebar />
        </div>
        <div className="store-component flex-grow">component</div>
      </section>
      <Sliderfooter />
      <Footer />
    </>
  );
}

export default Store;
