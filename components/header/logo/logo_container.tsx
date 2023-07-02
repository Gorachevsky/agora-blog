import React from "react";
import Link from "next/link";
import Logo from "./logo_agora";

const Container: React.FC<{ props: any }> = ({ props }) => {
  return (
    <div className="w-auto mx-auto lg:mx-0 -mt-1 sm:mt-0 md:mt-1 lg:mt-3 flex justify-center">
      <div className="w-auto text-white">
        <Link href={"/"}>
          <div className="w-20 mt-3 cursor-pointer">
            <Logo />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Container;
