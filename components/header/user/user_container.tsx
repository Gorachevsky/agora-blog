import React from "react";
import Modal from "./user_modal";
import Button from "./user_button";

const Container: React.FC<{ props: any }> = ({ props }) => {
  function hideModal() {
    props?.setVisible(false);
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
          className={`flex justify-end absolute top-0 right-0 ${
            props?.visible ? "w-screen" : "w-auto"
          }`}
        >
          {props?.visible && (
            <div
              className="h-screen w-0 md:w-7/12 lg:w-2/3 xl:w-auto"
              onMouseOver={hideModal}
            ></div>
          )}
          <div
            className={`${
              props?.visible
                ? "w-screen md:w-5/12 lg:w-1/3 xl:w-auto h-full lg:mt-4 lg:mr-5"
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
