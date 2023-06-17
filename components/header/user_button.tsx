import React from "react";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";

const Button: React.FC<{
  props: any;
  visible: boolean;
}> = ({ props, visible }) => {
  return (
    <div
      className={`w-full h-16 flex justify-end mr-4 cursor-pointer ${
        visible ? "bg-gray-600 rounded-t-xl" : ""
      }`}
    >
      <div className="my-auto mr-2">
        {props?.name ? <p>{props?.name}</p> : <p>Not conected</p>}
      </div>
      <div className="w-10 h-10 my-auto rounded-full bg-gray-600 border-2">
        <Image
          src={props?.image}
          width={100}
          height={100}
          alt="Picture of the author"
          className="rounded-full pointer-events-none	select-none"
        />
      </div>
      <IoCaretDown className="my-auto mx-2 mr-4" />
    </div>
  );
};

export default Button;
