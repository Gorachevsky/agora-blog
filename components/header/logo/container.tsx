import React from "react";
import { useRouter } from "next/router";
import Logo from "./agora_logo";

const Container: React.FC<{ props: any }> = ({ props }) => {
  const router = useRouter();

  return props?.width > 1024 ? (
    <div className="w-full ml-4 lg:ml-10 mr-8 2xl:w-1/12 flex text-white">
      <div
        className="w-20 mt-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Logo />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Container;
