import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Common/Footer";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import ProfileInformationForm from "../helping Components/ProfileInformationForm";
import ChangeImageForm from "../helping Components/ChangeImageForm";
import SettingOutlet from "../SettingOutlet/SettingOutlet";
import ChangePasswordForm from "../helping Components/ChangePasswordForm";

const Settings = () => {
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
        <SettingOutlet
          heading={"Profile Information"}
          children={<ProfileInformationForm />}
        />
        <SettingOutlet
          style={"bg-richblack-900"}
          heading={"Change Password"}
          children={<ChangePasswordForm />}
        />
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
