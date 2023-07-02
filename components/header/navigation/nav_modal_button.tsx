import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
      <div className="flex absolute top-0 left-0">
        <div
          className={`${
            props?.visible
              ? "w-0"
              : "ml-4 sm:ml-8 md:ml-12 mt-4 md:mt-6 m-auto text-4xl cursor-pointer"
          }`}
          onMouseOver={showModal}
        >
          {!props?.visible && <AiOutlineMenu />}
        </div>
        {props?.visible && (
          <div className="w-screen flex">
            <div className="h-screen w-screen md:w-5/12 bg-gray-600">
              <Modal props={props} />
            </div>
            <div
              className="w-auto md:w-7/12 h-screen"
              onMouseOver={hideModal}
            ></div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Button;
