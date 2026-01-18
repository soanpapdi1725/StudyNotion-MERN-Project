import { useSelector } from "react-redux";
import Footer from "../../../Common/Footer";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import ProfileInformationForm from "../SettingComponents/ProfileInformationForm";
import ChangeImageForm from "../SettingComponents/ChangeImageForm";
import SettingOutlet from "../SettingOutlet/SettingOutlet";
import ChangePasswordForm from "../SettingComponents/ChangePasswordForm";
import DeleteAccountComponent from "../SettingComponents/DeleteAccountForm";

const Settings = () => {
  const { user } = useSelector((state) => state.userDetail);
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
        {/* Change password layout will be visible to only those users who manually wrote their signup form  */}
        {/* will not be visible to google sign in users */}
        {user?.authProvider === "local" && (
          <SettingOutlet
            style={"bg-richblack-900"}
            heading={"Change Password"}
            children={<ChangePasswordForm />}
          />
        )}
        <DeleteAccountComponent />
      </div>
      {viewImagePreview && (
        <div className="absolute z-999 top-0 w-full  h-full  flex  backdrop-blur-lg flex-row   justify-center items-center">
          <div className="flex justify-center items-center  max-w-[500px]">
            <img
              className="lg:-translate-x-20 "
              src={imagePreview}
              alt="profile_preview"
              height={150}
              loading="lazy"
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
      <div className="w-full mt-28">
        <Footer />
      </div>
    </>
  );
};
export default Settings;
