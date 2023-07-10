import React from "react";
import Link from "next/link";
import Logo from "./logo_agora";
import styles from "../../styles/components/Logo.module.css";

const Container: React.FC<{ animation: string }> = ({ animation }) => {
  if (animation === "header") {
    return (
      <div className={styles.header_container}>
        <Link href={"/"} title="Home">
          <Logo props={{ show_text: true }} />
        </Link>
      </div>
    );
  } else if (animation === "loader") {
    return (
      <div className="w-auto mx-auto my-auto flex justify-center">
        <div className="w-auto text-white">
          <div className="w-72">
            <Logo props={{ show_text: false }} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Logo Error</div>;
  }
};

export default Container;
