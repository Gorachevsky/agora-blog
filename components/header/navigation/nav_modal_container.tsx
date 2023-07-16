import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/Navigation.module.css";

const Container: React.FC<{ props: any }> = ({ props }) => {
  function hideModal() {
    //props?.setVisible(false);
  }

  return (
    <div className={styles.modal} onMouseLeave={hideModal}>
      <div className={styles.modal_head}>Menu</div>
      <div className={styles.modal_link}>
        <Link href={"/resume"}>
          <div className={styles.modal_link_button}>Resume</div>
        </Link>
        <Link href={"/docs"}>
          <div className={styles.modal_link_button}>Docs</div>
        </Link>
        <Link href={"/blog"}>
          <div className={styles.modal_link_button}>Blog</div>
        </Link>
        <Link href={"/contact"}>
          <div className={styles.modal_link_button}>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Container;
