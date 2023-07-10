import React from "react";
import Modal from "./user_modal";
import Button from "./user_button";
import styles from "../../../styles/components/User.module.css";

const Container: React.FC<{ props: any }> = ({ props }) => {
  function hideModal() {
    props?.setVisible(false);
  }

  function showModal() {
    props?.setVisible(true);
  }

  return (
    <div className={styles.container}>
      {(!props?.hide || props?.width >= 768) && (
        <div
          className={`flex absolute top-0 right-0 ${
            props?.visible ? "w-screen lg:w-full" : "w-auto"
          }`}
        >
          {props?.visible && (
            <div
              className="h-screen w-0 md:w-7/12 lg:w-2/3"
              onMouseOver={hideModal}
            ></div>
          )}
          <div
            className={`${
              props?.visible
                ? "w-full md:w-5/12 lg:w-11/12 h-full lg:mt-4"
                : "lg:mt-2"
            }`}
            onMouseOver={showModal}
            onMouseLeave={hideModal}
          >
            <Button props={props} />
            {props?.visible && <Modal props={props} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
