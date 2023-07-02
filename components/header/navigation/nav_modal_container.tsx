import React from "react";
import Link from "next/link";

const Container: React.FC<{ props: any }> = ({ props }) => {
  return (
    <div className="w-full flex justify-between border-black border-t">
      <div className="w-full p-4 border-black border-b-1">
        <Link href={"/resume"}>
          <div className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black">
            Resume
          </div>
        </Link>
        <Link href={"/docs"}>
          <div className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black">
            Docs
          </div>
        </Link>
        <Link href={"/blog"}>
          <div className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black">
            Blog
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="py-4 mb-2 text-center rounded-xl cursor-pointer hover:bg-black">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Container;
