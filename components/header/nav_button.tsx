import React from "react";
import { useRouter } from "next/router";

export type ButtonProps = {
  title: string;
  path: string;
};

const Button: React.FC<{ props: ButtonProps }> = ({ props }) => {
  const router = useRouter();

  return (
    <div className="p-4" onClick={() => router.push(props.path)}>
      {props.title}
    </div>
  );
};

export default Button;
