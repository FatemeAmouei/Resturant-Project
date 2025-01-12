import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import "./SingInModal.css";

interface SignInModalProps {
  showSignInModal: boolean;
  setShowSignInModal: (value: boolean) => void;
}

export function SignInModal({
  showSignInModal,
  setShowSignInModal,
}: SignInModalProps): JSX.Element {
  const [inputUserValue, setInputUserValue] = useState("");
  const [inputPassValue, setInputPassValue] = useState("");

  const EnterbtnHandeler = () => {
    console.log("enter shod");
  };
  return (
    <>
      <Dialog
        size="xs"
        open={showSignInModal}
        handler={setShowSignInModal}
        className=" modal-section bg-black shadow-none "
      >
        <Card className="w-full bg-black text-white mx-2 card-section">
          <CardBody className="flex flex-col gap-8">
            <div className="flex justify-between">
              <Typography
                variant="h4"
                color="blue-gray"
                className="my-5 text-3xl "
              >
                ورود{" "}
              </Typography>
              <button
                type="button"
                className="box-content rounded-none border-none "
                onClick={() => setShowSignInModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <Typography className="-mb-2 text-xl" variant="h6">
              نام کاربری یا آدرس ایمیل *{" "}
            </Typography>
            <Input
              size="lg"
              className="border-b-2 border-gray-500 "
              value={inputUserValue}
              onChange={(e) => setInputUserValue(e.target.value)}
            />

            <Typography className="-mb-2 text-xl" variant="h6">
              رمز عبور *{" "}
            </Typography>
            <Input
              size="lg"
              className="border-b-2 border-gray-500 "
              value={inputPassValue}
              onChange={(e) => setInputPassValue(e.target.value)}
            />
          </CardBody>
          <CardFooter className="pt-5">
            <Button
              variant="btn"
              className="sign-btn text-xl  text-white rounded-none"
              fullWidth
              onClick={() => EnterbtnHandeler()}
            >
              ورود{" "}
            </Button>

            <div className="flex justify-between items-center my-5 text-lg font-bold">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="sign-checkbox peer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="default-checkbox"
                className="peer-checked:text-blue-600 text-white"
              >
                مرا به خاطر بسپار{" "}
                <a href="" className="sign-forgotPass mr-14">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
            <div className="fooditem-divider w-full border-t border-gray-600 my-4"></div>

            <div className="flex flex-col justify-center items-center ">
              <div className="my-4">
                <svg
                  className="navbar-left__iconUser"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 23 23"
                >
                  <path
                    stroke="gray"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>

              <Typography
                variant="small"
                className="my-4 justify-center items-center text-xl font-bold"
              >
                هنوز حساب کاربری ندارید؟{" "}
              </Typography>
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="text-lg font-bold underline decoration-green-800 mb-5"
              >
                ایجاد حساب کاربری{" "}
              </Typography>
            </div>
            <div className="fooditem-divider w-full border-t border-gray-600 my-4"></div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
