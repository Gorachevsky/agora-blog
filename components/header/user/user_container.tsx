import React from "react";
import Image from "next/image";
import styles from "../../../styles/components/User.module.css";
import Modal from "./user_modal";
import { IoCaretDown } from "react-icons/io5";

const Container: React.FC<{ props: any }> = ({ props }) => {
  function showModal() {
    props?.setVisible(true);
  }

  function hideModal() {
    props?.setVisible(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div
          className={`${props?.visible ? styles.button_active : styles.button}`}
          onMouseOver={showModal}
          onMouseLeave={hideModal}
        >
          {(props?.width >= 1024 || props?.visible) && (
            <p className={styles.name}>{props?.name}</p>
          )}
          <Image
            src={`${
              props?.image !== undefined ? props?.image : "/user-icon.png"
            }`}
            width={50}
            height={50}
            alt="Picture of the author"
            className={styles.image}
          />
          <IoCaretDown className={styles.dropdown} />
        </div>
        {props?.visible && <Modal props={props} />}
      </div>
    </div>
  );
};

export default Container;
