import React from "react";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import { FiX } from "react-icons/fi";

const Button: React.FC<{
  props: any;
  visible: boolean;
  setVisible: any;
  width: number;
}> = ({ props, visible, width, setVisible }) => {
  function hideModal() {
    setVisible(false);
  }

  return (
    <div
      className={`w-full flex py-3.5 md:py-5 px-3 sm:px-6 md:px-9 ${
        visible ? "bg-gray-600" : ""
      } ${width! > 1024 ? "rounded-t-2xl" : ""}`}
    >
      {width <= 768 && visible && (
        <div className="w-auto flex justify-start">
          <FiX
            className="my-auto text-4xl cursor-pointer"
            onClick={hideModal}
          />
        </div>
      )}
      <div className="flex w-full justify-end cursor-pointer">
        {(width > 1024 || visible) && (
          <div className="my-auto ml-4 mr-2">
            {props?.name ? <p>{props?.name}</p> : <p>Not connected</p>}
          </div>
        )}
        <div
          className={`w-10 h-10 my-auto rounded-full border-2 ${
            visible ? "bg-gray-600" : ""
          }`}
        >
          <Image
            src={`${
              props?.image !== undefined ? props?.image : "/user-icon.png"
            }`}
            width={100}
            height={100}
            alt="Picture of the author"
            className="rounded-full pointer-events-none	select-none"
          />
        </div>
        <IoCaretDown className="my-auto ml-2 text-xl" />
      </div>
    </div>
  );
};

export default Button;
