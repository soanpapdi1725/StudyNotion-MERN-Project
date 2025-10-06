import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Common/Footer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HashLoader } from "react-spinners";
import {
  changeProfileImage,
  removeProfileImage,
} from "../../../../services/operations/profileOperations";
import { MdDelete } from "react-icons/md";

const Settings = () => {
  const { user } = useSelector((state) => state.userDetail);
  const { firstName, lastName, additionalDetails } = user;
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [viewImagePreview, setViewImagePreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm();
  const handleOnChangePreview = (event) => {
    const file = event.target.files?.[0];
    if (!file || file.size >= 2 * 1024 * 1024) {
      setImagePreview(null);
      return;
    }
    const objectURL = URL.createObjectURL(file);
    setImagePreview(objectURL);
  };

  const submitProfilePicture = async (formData) => {
    const file = formData.newUserImage[0]; // Get the file from the FileList
    if (!file) {
      return;
    }
    // Create FormData object for file upload
    const uploadData = new FormData();
    uploadData.append("newUserImage", file);
    dispatch(changeProfileImage(uploadData, setLoading));
    setImagePreview(null);
  };
  const RemoveProfile = () => {
    dispatch(removeProfileImage(setLoading));
  };
  if (loading) {
    return (
      <div className="h-[calc(100vh-3.5rem)] flex justify-center items-center w-full">
        <HashLoader size={40} color="#ffffff" loading={loading} />
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col justify-center text-white my-20 gap-15 mx-auto w-11/12 max-w-[1000px]">
          <h1 className="text-4xl">Edit Profile</h1>
          <div className="flex flex-col gap-4 bg-richblack-800 w-full py-10 px-8 rounded-lg">
            <div className="flex sm:flex-row flex-col items-center gap-4">
              <div>
                <img
                  className="rounded-full aspect-square w-[78px]"
                  src={user?.image}
                  alt={`${user?.firstName}'s image`}
                />
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <h1 className="sm:text-2xl text-xl font-bold">
                  Change Profile Picture
                </h1>
                {/* buttons such as file or upload one */}
                <form
                  className="flex flex-row gap-4 flex-wrap justify-center items-center"
                  onSubmit={handleSubmit(submitProfilePicture)}
                >
                  {imagePreview ? (
                    <button
                      onClick={() => {
                        setImagePreview(null);
                      }}
                      className="px-4 py-2 cursor-pointer text-lg font-semibold bg-richblack-700 border-[1px] border-richblack-100/10 text-white rounded-lg hover:bg-richblack-600 active:bg-richblack-500 duration-100 transition-all ease-in-out"
                    >
                      Remove
                    </button>
                  ) : (
                    <label
                      className="px-4 py-2 cursor-pointer text-lg font-semibold bg-richblack-700 border-[1px] border-richblack-100/10 text-white rounded-lg hover:bg-richblack-600 active:bg-richblack-500 duration-100 transition-all ease-in-out"
                      htmlFor="file"
                    >
                      Select
                    </label>
                  )}

                  <input
                    id="file"
                    type="file"
                    name="newUserImage"
                    className="hidden"
                    accept=".jpg, .jpeg, .png"
                    placeholder="File"
                    {...register("newUserImage", {
                      onChange: handleOnChangePreview,
                      required: true,
                      validate: {
                        acceptedFormats: (files) =>
                          ["image/jpg", "image/jpeg", "image/png"].includes(
                            files[0]?.type
                          ) || "Only JPG/JPEG/PNG images are allowed",
                        fileSize: (files) =>
                          files[0]?.size <= 2 * 1024 * 1024 ||
                          "Max file should be 2 MB only",
                      },
                    })}
                  />
                  <button
                    className="bg-yellow-50 px-4 py-2 hover:bg-yellow-100 active:bg-yellow-100 rounded-lg text-richblack-900 h-12 text-lg font-semibold duration-100 transition-all ease-in-out"
                    type="submit"
                  >
                    Upload
                  </button>
                  {imagePreview && (
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        setViewImagePreview(true);
                      }}
                      className="bg-suar-50 px-4 py-2 hover:bg-suar-100 active:bg-suar-100 rounded-lg text-richblack-900 h-12 text-lg font-semibold duration-100 transition-all ease-in-out"
                    >
                      See Preview
                    </div>
                  )}
                  {!user.image.includes("dicebear") && (
                    <div
                      onClick={RemoveProfile}
                      className=" bg-richblack-700 font-bold text-3xl p-2 rounded-lg active:bg-richblack-800"
                    >
                      <MdDelete className="text-pink-300 active:text-pink-500 hover:text-pink-400 duration-150 transition-all ease-in-out" />
                    </div>
                  )}
                </form>
              </div>
            </div>

            {errors.newUserImage && (
              <span className="text-pink-300 text-center md:text-start text-sm">
                {errors.newUserImage.message || "Please Upload image"}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-4 bg-richblack-800 w-full py-10 px-8 rounded-lg">
            <h1 className="sm:text-2xl text-xl font-bold">
              Profile Information
            </h1>
            <form action="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {/* first name DOB Contact number */}
                <div className="flex flex-col gap-8">
                  {/* firstName */}
                  <div className="flex flex-col gap-3">
                    <label
                      className="text-xl text-pure-greys-50"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-xl rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xl text-pure-greys-50" htmlFor="dob">
                      Date of Birth
                    </label>
                    <input
                      value={additionalDetails.dateOfBirth}
                      id="dob"
                      type="date"
                      className=" shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-xl rounded-lg"
                    />
                  </div>
                </div>
                {/* Lastname Gender About */}
                <div>
                  <div className="flex flex-col gap-3">
                    <label
                      className="text-xl text-pure-greys-50"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-xl rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {viewImagePreview && (
          <div className="absolute z-999 top-0 h-full w-full flex backdrop-blur-lg flex-row   justify-center items-center">
            <img
              className="lg:-translate-x-20"
              src={imagePreview}
              alt="profile_preview"
              height={200}
            />

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
  }
};
export default Settings;
