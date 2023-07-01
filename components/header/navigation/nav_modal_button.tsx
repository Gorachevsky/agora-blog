import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Button: React.FC<{ props: any }> = ({ props }) => {
  return props?.width <= 1024 ? (
    <div className="ml-4 sm:ml-8 md:ml-12 mt-4 md:mt-6 text-white m-auto text-4xl cursor-pointer">
      <AiOutlineMenu />
    </div>
  ) : (
    <div></div>
  );
};

export default Button;
