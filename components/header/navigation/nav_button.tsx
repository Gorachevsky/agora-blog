import React from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/components/Navigation.module.css";

export type ButtonProps = {
  title: string;
  path: string;
};

const Button: React.FC<{ props: ButtonProps }> = ({ props }) => {
  const router = useRouter();

  return (
    <div className={styles.button} onClick={() => router.push(props.path)}>
      {props.title}
    </div>
  );
};

export default Button;
