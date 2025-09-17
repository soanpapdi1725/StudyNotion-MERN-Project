import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Common/Footer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HashLoader } from "react-spinners";
import { changeProfileImage } from "../../../../services/operations/profileOperations";

const Settings = () => {
  const { user } = useSelector((state) => state.userDetail);
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
    if (!file) {
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
          <div className="flex sm:flex-row flex-col  items-center gap-4 bg-richblack-800 w-full py-10 px-8 rounded-lg">
            <div>
              <img
                className="rounded-full aspect-square w-[78px]"
                src={user?.image}
                alt={`${user?.firstName}'s image`}
              />
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <h1 className="sm:text-2xl text-xl">Change Profile Picture</h1>
              {/* buttons such as file or upload one */}
              <form
                className="flex flex-row gap-4 justify-center"
                onSubmit={handleSubmit(submitProfilePicture)}
              >
                <label
                  className="px-4 py-2 cursor-pointer text-lg font-semibold bg-richblack-700 border-[1px] border-richblack-100/10 text-white rounded-lg hover:bg-richblack-600 active:bg-richblack-500 duration-100 transition-all ease-in-out"
                  htmlFor="file"
                >
                  Select
                </label>
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

                {errors.message && (
                  <span className="text-pink-300 text-start text-sm">
                    Please Select image Only in jpg, jpeg, png formats
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
        {viewImagePreview && (
          <div className="absolute z-999 top-0 h-full w-full flex backdrop-blur-lg flex-row justify-center items-center">
            <img
              className="h-80 aspect-square -translate-x-1/2"
              src={imagePreview}
              alt="profile_preview"
            />

            <div
              className="absolute cursor-pointer flex flex-row justify-center items-center rounded-full h-8 w-8 top-4 bg-yellow-100 right-75"
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
