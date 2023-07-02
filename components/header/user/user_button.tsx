import React from "react";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import { FiX } from "react-icons/fi";

const Button: React.FC<{ props: any }> = ({ props }) => {
  function hideModal() {
    props?.setVisible(false);
  }

  return (
    <div
      className={`w-full flex py-3.5 md:py-6 pr-3 sm:pr-6 md:pr-9 lg:rounded-t-2xl ${
        props?.visible ? "bg-gray-600 lg:px-4 lg:py-4" : ""
      }`}
    >
      {props?.width < 768 && props?.visible && (
        <div className="w-auto flex justify-start pl-3 sm:pl-6">
          <FiX
            className="my-auto text-4xl cursor-pointer"
            onClick={hideModal}
          />
        </div>
      )}
      <div className="flex w-full justify-end cursor-pointer">
        {(props?.width >= 1024 || props?.visible) && (
          <div className="my-auto ml-4 mr-2 text-right">
            {props?.name ? <p>{props?.name}</p> : <p>Not connected</p>}
          </div>
        )}
        <div
          className={`w-10 h-10 my-auto rounded-full border-2 ${
            props?.visible ? "bg-gray-600" : ""
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
