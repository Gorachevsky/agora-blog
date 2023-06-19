import React from "react";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import { FiX } from "react-icons/fi";

const Button: React.FC<{
  props: any;
  visible: boolean;
  width: number;
}> = ({ props, visible, width }) => {
  return (
    <div
      className={`w-full h-14 flex justify-stretch sm:mt-2 md:mt-4 ${
        visible ? "bg-gray-600 rounded-t-xl" : ""
      }`}
    >
      {width <= 768 && visible && (
        <div className="w-full flex justify-start">
          <FiX className="ml-2 my-auto text-4xl cursor-pointer" />
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
            src={props?.image}
            width={100}
            height={100}
            alt="Picture of the author"
            className="rounded-full pointer-events-none	select-none"
          />
        </div>
        <IoCaretDown className="my-auto ml-2 text-xl mr-3 sm:mr-5 md:mr-9" />
      </div>
    </div>
  );
};

export default Button;
