import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export type ButtonProps = {
  title: string;
};

const Button: React.FC<{ props: ButtonProps }> = ({ props }) => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const path = router.pathname;
  const { data: session, status } = useSession();

  return <div className="p-4">{props.title}</div>;
};

export default Button;