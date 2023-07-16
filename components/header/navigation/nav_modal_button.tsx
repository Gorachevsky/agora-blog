import React from "react";
import styles from "../../../styles/components/Navigation.module.css";
import Modal from "./nav_modal_container";
import Menu from "../../icons/menu";

const Button: React.FC<{ props: any }> = ({ props }) => {
  return props?.width < 1024 ? (
    <div className={styles.container}>
      {props?.visible ? (
        <Modal props={props} />
      ) : (
        <div className={styles.icon_container}>
          <Menu
            props={{ visible: props?.visible, setVisible: props?.setVisible }}
          />
        </div>
      )}
    </div>
  ) : null;
};

export default Button;
