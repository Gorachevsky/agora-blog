import React from "react";
import { useRouter } from "next/router";

export type ButtonProps = {
  title: string;
  path: string;
};

const Button: React.FC<{ props: ButtonProps }> = ({ props }) => {
  const router = useRouter();

  return (
    <div
      className="py-2 px-2 mx-4 my-auto hover:border-b-2 border-white cursor-pointer"
      onClick={() => router.push(props.path)}
    >
      {props.title}
    </div>
  );
};

export default Button;
