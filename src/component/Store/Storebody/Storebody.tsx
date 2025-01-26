import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Storebody.css";
import { Link } from "react-router-dom";
import { MdGridView } from "react-icons/md";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { MdOutlineCompareArrows } from "react-icons/md";

type ItemType = {
  id: number;
  img: string;
  title: string;
  price: string;
  category?: string;
  btn: string;
  text: string;
  discount?: number;
};

function Storebody(): JSX.Element {
  const items: ItemType[] = [
    {
      id: 1,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-6-600x600.jpg",
      title: "صندلی میزبان پلاستیکی",
      price: "تومان 149,000 ",
      category: "مبلمان",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },

    {
      id: 2,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-5-600x600.jpg",
      title: "نمونه محصول متغیر",
      price: "تومان 50,000 ",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },

    {
      id: 3,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3-600x600.jpg",
      title: "صندلی چوبی کلاسیک",
      price: "تومان 29,000 ",
      category: "مبلمان",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },

    {
      id: 4,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-6-600x600.jpg",
      title: "کاور چوبی آیفون 12 پرو مکس",
      price: "تومان 349,000 ",
      category: "لوازم جانبی",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
      discount: 11,
    },

    {
      id: 5,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-5-600x600.jpg",
      title: "نمونه محصول متغیر",
      price: "تومان 50,000 ",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },

    {
      id: 6,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3-600x600.jpg",
      title: "مبل راحتی زرد یک نفره",
      price: "تومان 339,000 ",
      category: "مبلمان",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },

    {
      id: 7,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-6-600x600.jpg",
      title: "لامپ بزرگ سالنی",
      price: "تومان 89,000 ",
      category: "روشنایی",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },

    {
      id: 8,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-5-600x600.jpg",
      title: "ساعت چوبی رومیزی",
      price: "تومان 199,000 ",
      category: "ساعت",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },
    {
      id: 9,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3-600x600.jpg",
      title: "چراغ سقفی شیشه ای مدرن",
      price: "تومان 599,000 ",
      category: "روشنایی",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },
    {
      id: 10,
      img: "https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/product-food-3-600x600.jpg",
      title: "چراغ شیشه ای سنتی",
      price: "تومان 750,000 ",
      category: "روشنایی",
      btn: "افزودن به سبدخرید",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ",
    },
  ];

  const [sortOrder, setSortOrder] = useState<string>("محبوبیت ");
  const [viewType, setViewType] = useState<"two" | "three" | "four">("three");
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [visibleItems, setVisibleItems] = useState<ItemType[]>(
    items.slice(0, 9)
  );
  const [filteredItems, setFilteredItems] = useState<ItemType[]>(items);

  const filterItems = (category: string) => {
    if (category) {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
      setVisibleItems(filtered.slice(0, itemsPerPage));
    } else {
      setFilteredItems(items);
      setVisibleItems(items.slice(0, itemsPerPage));
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOrder(value);

    let sortedItems = [...visibleItems];

    switch (value) {
      case "محبوبیت":
        setVisibleItems([...visibleItems]);
        return;

      case "امتیاز":
        sortedItems = sortedItems.sort();
        break;

      case "جدیدترین":
        sortedItems = sortedItems.sort((a, b) => b.id - a.id);
        break;

      case "ارزان ترین":
        sortedItems = sortedItems.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[تومان,\s]/g, ""));
          const priceB = parseInt(b.price.replace(/[تومان,\s]/g, ""));
          return priceA - priceB;
        });
        break;

      case "گران ترین":
        sortedItems = sortedItems.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[تومان,\s]/g, ""));
          const priceB = parseInt(b.price.replace(/[تومان,\s]/g, ""));
          return priceB - priceA;
        });
        break;

      default:
        break;
    }

    setVisibleItems(sortedItems.slice(0, itemsPerPage));
  };

  const handleViewChange = (type: "two" | "three" | "four") => {
    setViewType(type);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setVisibleItems(items.slice(0, value));
  };

  return (
    <>
      <section className="store-section flex flex-row-reverse justify-start items-center">
        <div className="store-sidebar">
          <Sidebar />
        </div>

        <div className="store-component">
          <div className="store-head flex justify-between items-center ml-40">
            <div className="sort-order mx-6">
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="p-4 border-b-4 text-lg font-medium text-right focus:outline-none focus:border-b-2 focus:border-green-800"
              >
                <option value="محبوبیت">مرتب‌سازی بر اساس محبوبیت</option>
                <option value="امتیاز">مرتب‌سازی بر اساس امتیاز</option>
                <option value="جدیدترین">مرتب‌سازی بر اساس جدیدترین</option>
                <option value="ارزان ترین">مرتب‌سازی بر اساس ارزان ترین</option>
                <option value="گران ترین">مرتب‌سازی بر اساس گران ترین</option>
              </select>
            </div>

            <div className="view-type flex items-center text-3xl opacity-40 text-black">
              <button
                onClick={() => handleViewChange("four")}
                className={`p-2 ${
                  viewType === "four" ? "opacity-100" : "opacity-40"
                }`}
              >
                <span className="four-icon">
                  <TfiLayoutGrid4 />
                </span>
              </button>
              <button
                onClick={() => handleViewChange("three")}
                className={`p-2 ${
                  viewType === "three" ? "opacity-100" : "opacity-40"
                }`}
              >
                <span className="three-icon">
                  <TfiLayoutGrid3 />
                </span>
              </button>
              <button
                onClick={() => handleViewChange("two")}
                className={`p-2 text-4xl ${
                  viewType === "two" ? "opacity-100" : "opacity-40"
                }`}
              >
                <span className="two-icon">
                  <MdGridView />
                </span>
              </button>
            </div>

            <div className=" flex justify-between items-center items-per-page mx-4 text-lg font-bold">
              <div className=" flex justify-between p-4 items-center w-1/2 text-gray-400">
                <a href="#" onClick={() => handleItemsPerPageChange(36)}>
                  <span className={itemsPerPage === 36 ? "text-black" : ""}>
                    36
                  </span>
                </a>
                <span className=" px-3">/</span>
                <a href="#" onClick={() => handleItemsPerPageChange(24)}>
                  <span className={itemsPerPage === 24 ? "text-black" : ""}>
                    24
                  </span>
                </a>
                <span className=" px-3">/</span>

                <a href="#" onClick={() => handleItemsPerPageChange(9)}>
                  <span className={itemsPerPage === 9 ? "text-black" : ""}>
                    9
                  </span>
                </a>
              </div>
              <label htmlFor="itemsPerPage">:نمایش</label>
            </div>

            <div className="filter-section flex justify-center items-center pb-8 w-1/6 text-lg">
              <nav className="flex mt-8" aria-label="Breadcrumb">
                <ol className="inline-flex justify-center ">
                  <li className="inline-flex items-center ">
                    <Link
                      to={"/store"}
                      className=" font-medium focus:text-gray-500"
                    >
                      فروشگاه
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className=" px-4">/</span>
                      <Link
                        to={"/"}
                        className="items-center font-medium focus:text-gray-500"
                      >
                        خانه
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="store-body">
            <div
              className={`storemenu-bottom absolute flex flex-wrap justify-center items-center ml-48  ${viewType}`}
            >
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="store-item flex flex-col justify-center items-center text-lg mt-5 px-10"
                >
                  <img src={item.img} alt={item.title} className="store-img" />
                  <span
                    className="item-discount rounded-full px-3 py-4 font-medium text-white text-md items-center text-center"
                    style={{
                      display: item.discount ? "inline-block" : "none",
                    }}
                  >
                    -{item.discount}%
                  </span>
                  <h2 className=" py-2 font-bold">{item.title}</h2>
                  <p className="text-green-900 font-bold">{item.price}</p>
                  <div className="moreInfo hidden justify-center items-center text-center bg-white w-full  shadow-sm">
                    <div className="bg-gray-300 h-0.5 w-full"></div>

                    <button
                      type="button"
                      className="text-gray-700 w-full items-end ml-3 my-2 text-4xl"
                    >
                      <MdOutlineCompareArrows />
                    </button>
                    <div className="bg-gray-300 h-0.5 w-full"></div>
                    <p className="storeItem-text text-gray-400 pt-4 mx-3">
                      {item.text}
                    </p>
                    <div className="icons flex justify-between items-center py-8">
                      <Link to={"/favorites"} className="flex items-center">
                        <button type="button" className="text-gray-900">
                          <svg
                            className=""
                            width="28"
                            height="28"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 23 23"
                          >
                            <path
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </button>
                      </Link>

                      <button className="storeitem-btn relative inline-flex items-center justify-center px-5 py-3 text-md text-white border-2 border-white hover:border-opacity-50 ">
                        <span> {item.btn}</span>
                        <a href="basketshop" className="btn-icon mx-5 hidden">
                          <svg
                            width="30"
                            height="30"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 23 23"
                          >
                            <path
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>{" "}
                        </a>
                      </button>

                      <button type="button" className="text-gray-500 ">
                        <svg
                          className=""
                          width="28"
                          height="28"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 23 23"
                        >
                          <path
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Storebody;
