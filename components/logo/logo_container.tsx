import React from "react";
import Link from "next/link";
import Logo from "./logo_agora";

const Container: React.FC<{ animation: string }> = ({ animation }) => {
  if (animation === "header") {
    return (
      <div className="w-auto mx-auto lg:mx-0 -mt-1 sm:mt-0 md:mt-1 lg:mt-3 flex justify-center">
        <div className="w-auto text-white">
          <Link href={"/"}>
            <div className="w-20 mt-3 cursor-pointer">
              <Logo text={true} />
            </div>
          </Link>
        </div>
      </div>
    );
  } else if (animation === "loader") {
    return (
      <div className="w-auto mx-auto my-auto flex justify-center">
        <div className="w-auto text-white">
          <div className="w-60">
            <Logo text={false} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Logo Error</div>;
  }
};

export default Container;
