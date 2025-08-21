import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import OtpInput from "react-otp-input";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router";
import { sendotp, signupUser } from "../services/operations/authOperations";
import { GiBackwardTime } from "react-icons/gi";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const { loading, signUpData } = useSelector((state) => state.auth);
  if (!signUpData) {
    toast.error("Please Sign up first", { duration: 1500 });
    return <Navigate to={"/signup"} />;
  }
  const [otp, setOtp] = useState("");
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    contactNumber,
    accountType,
  } = signUpData;
  const dispatch = useDispatch();
  const handleOnSubmitOtp = (event) => {
    event.preventDefault();
    dispatch(
      signupUser(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        contactNumber,
        accountType,
        navigate
      )
    );
    setOtp("");
  };
  const navigate = useNavigate();
  const onResendClick = () => {
    dispatch(sendotp(email, navigate));
  };
  return (
    <div className="lg:w-screen flex items-center justify-center h-screen text-richblack-5">
      {loading ? (
        <HashLoader size={40} color="#ffffff" loading={loading} />
      ) : (
        <div className="mx-auto flex items-center justify-center w-11/12  max-w-max-content">
          <div className="flex flex-col items-center gap-4 justify-start mx-4">
            {/* title heading and subheading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Verify Email</h1>
              <p className="text-richblack-100">
                A verification code has been sent to you. Enter the code below
              </p>
            </div>
            {/* forms */}
            <form
              className="w-full flex flex-col gap-6 items-center"
              method="post"
              onSubmit={handleOnSubmitOtp}
            >
              <OtpInput
                containerStyle={"flex gap-4 w-full py-1 justify-center"}
                value={otp}
                numInputs={6}
                onChange={setOtp}
                inputStyle={"h-12 bg-richblack-800 text-lg rounded-md"}
                renderInput={(props) => <input {...props} />}
              />
              <button className="w-full bg-yellow-50 hover:bg-yellow-100 text-richblack-900 p-2.5 rounded-lg text-lg">
                Verify Email
              </button>
            </form>
            {/* back to login and resent button */}
            <div className="w-full h-5 flex justify-between">
              <Link
                to={"/login"}
                className="flex flex-row group gap-3 items-center justify-start translate-x-0 active:-translate-x-10 transition-all ease-in-out duration-500"
              >
                <FaArrowLeftLong />
                Back to Login
              </Link>
              <button
                className="text-blue-100  flex items-center gap-1 cursor-pointer"
                onClick={onResendClick}
              >
                <GiBackwardTime fontSize={20} />
                Resend it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
