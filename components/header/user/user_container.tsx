import React from "react";
import Modal from "./user_modal";
import Button from "./user_button";

const Container: React.FC<{ props: any }> = ({ props }) => {
  function hideModal() {
    if (props?.width > 768) {
      props?.setVisible(false);
    }
  }

  function showModal() {
    props?.setVisible(true);
  }

  return (
    <div className="w-full flex relative">
      {props?.status === "loading" ? (
        <p className="p-4 px-8">Validating session...</p>
      ) : (
        <div
          className={`absolute top-0 right-0 z-20 ${
            props?.visible ? "w-screen md:w-2/5 lg:w-auto ml-2 h-full" : ""
          }`}
          onMouseOver={showModal}
          onMouseLeave={hideModal}
        >
          <Button
            props={props}
            visible={props?.visible}
            setVisible={props?.setVisible}
            width={props?.width}
          />
          {props?.visible && <Modal props={props} />}
        </div>
      )}
    </div>
  );
};

export default Container;
