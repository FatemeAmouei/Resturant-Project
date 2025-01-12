import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import "./BasketModal.css";

interface BasketModalProps {
  showBasketModal: boolean;
  setShowBasketModal: (value: boolean) => void;
}

export function BasketModal({
  showBasketModal,
  setShowBasketModal,
}: BasketModalProps): JSX.Element {
  const returnbtnHandeler = () => {
    console.log("back shod");
  };
  return (
    <>
      <Dialog
        size="xs"
        open={showBasketModal}
        handler={setShowBasketModal}
        className=" modal-section bg-black shadow-none "
      >
        <Card className="w-full bg-black text-white mx-2 card-section">
          <CardBody>
            <div className="flex justify-between">
              <Typography
                variant="h4"
                color="blue-gray"
                className="my-5 text-3xl "
              >
                سبدخرید{" "}
              </Typography>
              <button
                type="button"
                className="box-content rounded-none border-none "
                onClick={() => setShowBasketModal(false)}
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
          </CardBody>

          <div className="fooditem-divider w-full border-t border-gray-600"></div>

          <CardFooter className="flex flex-col justify-center items-center text-white font-bold text-lg mt-48 ">
            <p className="py-6">هیچ محصولی در سبد خرید نیست.</p>

            <Button
              variant="btn"
              className="basket-btn text-base text-white rounded-none"
              onClick={() => returnbtnHandeler()}
            >
              بازگشت به فروشگاه{" "}
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
