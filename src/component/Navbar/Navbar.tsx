import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <section className="w-full navbar-section">
        <nav className="w-full border-gray-200">
          <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-wrap items-center justify-left p-4 text-lg w-1/4">
              <button
                type="button"
                className="text-gray-500 hover:bg-gray-600 hover:text-gray-500 focus:ring-4 focus:ring-gray-500 rounded-lg py-2"
              >
                <div className="flex items-center text-center">
                  <span className=" text-white p-1 font-bold mr-5">
                    {" "}
                    0 تومان
                  </span>
                  <svg
                    className="navbar-left__iconShop"
                    width="28"
                    height="28"
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
                  </svg>
                  <span className=" text-white p-1 navbar-left__badge">0</span>
                </div>
              </button>

              <button
                type="button"
                className="text-gray-500 hover:bg-gray-600 hover:text-gray-900 focus:ring-4 focus:ring-gray-500 rounded-lg p-3"
              >
                <svg
                  className="navbar-left__iconUser"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 23 23"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between md:flex md:w-auto w-2/4 ">
              <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 border-gray-100 rounded-lg ">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-white hover:text-blue-200 "
                  >
                    ارتباط با ما
                  </a>
                </li>

                <li className="relative group">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full text-white rounded hover:text-blue-200 md:p-0 md:w-auto"
                  >
                    <svg
                      width="20"
                      height="20"
                      style={{ marginTop: "20px" }}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                    خدمات
                  </button>

                  <div
                    id="dropdownNavbar"
                    className="absolute hidden group-hover:block rounded-lg shadow w-44 z-10 bg-black"
                  >
                    <ul
                      className="text-md text-white text-right"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-3 hover:text-blue-200 hover:bg-gray-600"
                        >
                          سفارشات مجالس
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-3 hover:text-blue-200 hover:bg-gray-600"
                        >
                          سفارش عمده
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-3 hover:text-blue-200 hover:bg-gray-600"
                        >
                          غذاتو خودت بساز
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-white hover:text-blue-200 "
                  >
                    درباره ی ما
                  </a>
                </li>
              </ul>

              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse p-4"
              >
                <img
                  src="https://demo.i-wp.ir/woodland/food/wp-content/uploads/2017/06/wood-logo-white-reserve.svg"
                  className="h-8"
                  alt="Logo"
                />
              </a>

              <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 border-gray-100 rounded-lg">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-white hover:text-blue-200"
                  >
                    وبلاگ
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-white hover:text-blue-200"
                  >
                    فروشگاه
                  </a>
                </li>

                <li className="relative group">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar-right"
                    className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:text-blue-200 md:p-0 md:w-auto"
                  >
                    <svg
                      width="20"
                      height="20"
                      style={{ marginTop: "20px" }}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                    خانه
                  </button>

                  <div
                    id="dropdownNavbar-right"
                    className="absolute hidden group-hover:block rounded-lg shadow w-44 z-10 bg-black"
                  >
                    <ul
                      className="text-md text-white text-right bg-black-100"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-3 hover:text-blue-200 hover:bg-gray-600"
                        >
                          منو اصلی
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-3 hover:text-blue-200 hover:bg-gray-600"
                        >
                          سبدخرید
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-3 hover:text-blue-200 hover:bg-gray-600"
                        >
                          حساب کاربری من
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-end w-1/4 px-3 py-3 self-center text-center">
              <button
                type="button"
                className="text-gray-500 hover:bg-gray-600 hover:text-gray-900 focus:ring-4 focus:ring-gray-500 rounded-lg  "
              >
                <svg
                  className="mx-5 mt-4"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 23 23"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className=" text-white navbar-right__badge">0</span>
              </button>

              <button
                type="button"
                className="text-gray-500 hover:bg-gray-600 hover:text-gray-900 focus:ring-4 focus:ring-gray-500 rounded-lg p-2 "
              >
                <svg
                  className="mb-3 mx-3 mt-3"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 23 23"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
