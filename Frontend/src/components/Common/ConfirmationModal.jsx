import React from "react";
import IconButton from "./IconButton";

const ConfirmationModal = ({ modalData }) => {
  return (
    <div className="flex justify-center items-center w-fit bg-richblack-800 rounded-lg">
      <div className="flex flex-col gap-4 px-4 my-4">
        <div className="flex flex-col ">
          <p>{modalData.text1}</p>
          <p className="text-richblack-500">{modalData.text2}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          {/* IconButtons */}
          <IconButton
            OnClickButton={modalData?.btn1Handler}
            text={modalData?.btn1Text}
            customClasses={
              "hover:bg-yellow-50 hover:text-richblack-800"
            }
          ></IconButton>
          <IconButton
            OnClickButton={modalData?.btn2Handler}
            text={modalData?.btn2Text}
            customClasses={
              "hover:bg-pink-50 hover:text-richblack-800 text-white bg-pink-300"
            }
          ></IconButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
