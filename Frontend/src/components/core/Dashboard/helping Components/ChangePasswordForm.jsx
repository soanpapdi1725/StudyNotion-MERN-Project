import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useDispatch } from "react-redux";
const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const [seePass_C, setSeePass_C] = useState(false);
  const [seePass_N, setSeePass_N] = useState(false);
  const [seePass_CN, setSeePass_CN] = useState(false);
  const {
    formState: { isSubmitSuccessful, errors },
    handleSubmit,
    reset,
    register,
  } = useForm();
  const handleOnSubmitPassChange = async (formData) => {

  };
  return (
    <form
      onSubmit={handleSubmit(handleOnSubmitPassChange)}
      className="w-full flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="CurrPassword">Current Password</label>
        <input
          id="CurrPassword"
          className="bg-richblack-700 h-10 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none   border-none text-md md:text-xl px-2 py-2.5 rounded-lg "
          type={`${seePass_C ? "text" : "password"}`}
          placeholder="Enter Your Current Password"
          name="currentPassword"
          {...register("currentPassword", {
            required: "Current Password is Required",
          })}
        />
        <button
          type="button"
          onClick={() => {
            setSeePass_C(!seePass_C);
          }}
          className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-1  text-pure-greys-200"
        >
          {seePass_C ? <IoEye /> : <IoMdEyeOff />}
        </button>
        {errors?.currentPassword && (
          <span className="text-pink-200 text-xs text-start ml-2">{errors?.currentPassword?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="NewPassword">New Password</label>
        <input
          id="NewPassword"
          className="bg-richblack-700 h-10 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none   border-none text-md md:text-xl px-2 py-2.5 rounded-lg "
          type={`${seePass_N ? "text" : "password"}`}
          placeholder="Enter Your New Password"
          name="newPassword"
          {...register("newPassword", { required: "New Password is Required" })}
        />
        <button
          type="button"
          onClick={() => {
            setSeePass_N(!seePass_N);
          }}
          className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-1  text-pure-greys-200"
        >
          {seePass_N ? <IoEye /> : <IoMdEyeOff />}
        </button>
        {errors?.newPassword && (
          <span className="text-pink-200 text-xs text-start ml-2">{errors?.newPassword?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="CNPassword">Confirm New Password</label>
        <input
          id="CNPassword"
          className="bg-richblack-700 h-10 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none   border-none text-md md:text-xl px-2 py-2.5 rounded-lg "
          type={`${seePass_CN ? "text" : "password"}`}
          placeholder="Confirm Your New Password"
          name="confirmPassword"
          {...register("confirmPassword", {
            required: "Re-enter your New password",
          })}
        />
        <button
          type="button"
          onClick={() => {
            setSeePass_CN(!seePass_CN);
          }}
          className="text-xl absolute right-3 top-1/2 -translate-y-1/2 my-1  text-pure-greys-200"
        >
          {seePass_CN ? <IoEye /> : <IoMdEyeOff />}
        </button>
        {errors?.confirmPassword && (
          <span className="text-pink-200 text-xs text-start ml-2">{errors?.confirmPassword?.message}</span>
        )}
      </div>
      <button
        className="self-end text-md md:text-xl bg-yellow-50 px-4 py-2 hover:bg-yellow-100 active:bg-yellow-100 rounded-lg text-richblack-900 h-12  font-semibold duration-100 transition-all ease-in-out"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default ChangePasswordForm;
