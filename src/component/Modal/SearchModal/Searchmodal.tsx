import React, { useState } from "react";
import {
  TEModal,
  TEModalDialog,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";

import "./SearchModal.css";

interface SearchModalProps {
  showModal: boolean;
  setshowmodal: (value: boolean) => void;
}

export default function SearchModal({
  showModal,
  setshowmodal,
}: SearchModalProps): JSX.Element {
  const [inputSearchValue, setinputSearchValue] = useState("");

  return (
    <div>
      <TEModal show={showModal} setShow={setshowmodal}>
        <TEModalDialog
          size="fullscreen"
          className="TEModalDialog bg-black text-white  pointer-events-auto"
        >
          <TEModalHeader>
            <div className="flex items-center self-center w-full h-full">
              <button
                type="button"
                className="box-content rounded-none border-none pointer-events-auto"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="h-16 w-16"
                  onClick={() => setshowmodal}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="جستجو محصولات"
                value={inputSearchValue}
                onChange={(e) => setinputSearchValue(e.target.value)}
                className="m-4 w-full border p-10 text-center rounded-none border-none bg-black text-white font-bold focus:outline-none"
                autoFocus
              />
            </div>
          </TEModalHeader>
          <TEModalBody>
            <div>
              <p className="text-center text-white text-xl font-bold mt-10 pl-10">
                .برای دیدن محصولات که دنبال آن هستید تایپ کنید{" "}
              </p>
            </div>
          </TEModalBody>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
