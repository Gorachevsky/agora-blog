import React from "react";
import { FiX } from "react-icons/fi";

const Container: React.FC<{ props: any }> = ({ props }) => {
  function hideModal() {
    props?.setVisible(false);
  }

  return (
    <div className="flex">
      modal
      {props?.width < 768 && props?.visible && (
        <div className="w-auto flex justify-start pl-3 sm:pl-6">
          <FiX
            className="my-auto text-4xl cursor-pointer"
            onClick={hideModal}
          />
        </div>
      )}
    </div>
  );
};

export default Container;
