import React from "react";
import styles from "../../../styles/components/Navigation.module.css";
import Modal from "./nav_modal_container";
import Menu from "../../icons/menu";

const Button: React.FC<{ props: any }> = ({ props }) => {
  return props?.width < 1024 ? (
    <div className={styles.container}>
      <div
        className={`${props?.visible ? styles.layout_active : styles.layout}`}
      >
        {props?.visible ? (
          <>
            <div className={styles.modal_head}>
              <p className={styles.modal_head_text}>Content</p>
            </div>
            <Modal props={props} />
          </>
        ) : (
          <Menu
            props={{ visible: props?.visible, setVisible: props?.setVisible }}
          />
        )}
      </div>
    </div>
  ) : null;
};

export default Button;
