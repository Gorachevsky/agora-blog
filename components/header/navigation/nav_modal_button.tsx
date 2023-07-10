import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import Modal from "./nav_modal_container";

const Button: React.FC<{ props: any }> = ({ props }) => {
  function showModal() {
    props?.setVisible(true);
  }

  function hideModal() {
    props?.setVisible(false);
  }

  return props?.width < 1024 ? (
    <div className="relative w-2/5">
      <div className="absolute top-0 left-0">
        <div
          className={`${
            props?.visible
              ? "w-screen md:w-5/12 py-3.5 md:py-6 pr-3 pl-6 sm:pr-6 md:pr-9 bg-gray-600"
              : "ml-4 sm:ml-8 md:ml-12 mt-4 md:mt-6 m-auto text-4xl cursor-pointer"
          }`}
          onClick={showModal}
        >
          {!props?.visible ? (
            <div>
              <AiOutlineMenu />
            </div>
          ) : (
            <div className="flex justify-between md:justify-center">
              <div className="align-middle my-auto ml-4 text-xl">Menu</div>
              {props?.width < 768 && props?.visible && (
                <div className="w-auto flex justify-start pl-3 sm:pl-6">
                  <FiX
                    className="my-auto text-4xl cursor-pointer z-20"
                    onClick={hideModal}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        {props?.visible && (
          <div className="w-screen flex">
            <div className="h-screen w-screen md:w-5/12 bg-gray-600">
              <Modal props={props} />
            </div>
            <div
              className="w-auto md:w-7/12 h-screen"
              onClick={hideModal}
            ></div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Button;
