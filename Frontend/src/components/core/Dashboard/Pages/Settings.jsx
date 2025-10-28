import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Common/Footer";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import ProfileInformation from "../helping Components/ProfileInformation";
import ChangeImageForm from "../helping Components/ChangeImageForm";

const Settings = () => {
  const { loading } = useSelector((state) => state.userDetail);
  const [imagePreview, setImagePreview] = useState(null);
  const [viewImagePreview, setViewImagePreview] = useState(false);

    return (
      <>
        <div className="flex flex-col justify-center text-white my-20 gap-15 mx-auto w-11/12 max-w-[1000px]">
          <h1 className="text-4xl">Edit Profile</h1>
          <ChangeImageForm
            setViewImagePreview={setViewImagePreview}
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
          />
          <div className="flex flex-col gap-4 bg-richblack-800 w-full py-10 px-8 rounded-lg">
            <h1 className="sm:text-2xl text-xl text-left md:text-left font-bold">
              Profile Information
            </h1>
            <ProfileInformation />
          </div>
          <div className="flex flex-col gap-4 bg-richblack-800 w-full py-10 px-8 rounded-lg">
            <h1 className="sm:text-2xl text-xl text-left md:text-left font-bold">
              Profile Information
            </h1>
            <ProfileInformation />
          </div>
        </div>
        {viewImagePreview && (
          <div className="absolute z-999 top-0 w-full  h-full  flex  backdrop-blur-lg flex-row   justify-center items-center">
            <div className="flex justify-center items-center  max-w-[500px]">
              <img
                className="lg:-translate-x-20 "
                src={imagePreview}
                alt="profile_preview"
                height={150}
              />
            </div>
            <div
              className="absolute cursor-pointer flex flex-row justify-center items-center rounded-full h-8 w-8 top-4 bg-yellow-100 right-5 lg:-translate-x-70"
              onClick={(event) => {
                event.stopPropagation();
                setViewImagePreview(false);
                console.log("clicked");
              }}
            >
              <RxCross1 />
            </div>
          </div>
        )}
      </>
    );
  
};
export default Settings;
