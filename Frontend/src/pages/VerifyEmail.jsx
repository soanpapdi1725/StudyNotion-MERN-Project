import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import OtpInput from "react-otp-input";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router";
import { sendotp, signupUser } from "../services/operations/authOperations";
import { GiBackwardTime } from "react-icons/gi";
import toast from "react-hot-toast";
import Footer from "../components/Common/Footer";

const VerifyEmail = () => {
  const { loading, signUpData } = useSelector((state) => state.auth);
  if (!signUpData) {
    toast.error("Please Register first", { duration: 2000 });
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
    <div>
    <div className="lg:w-screen flex items-center justify-center h-screen text-richblack-5">
      {loading ? (
        <div className="h-screen flex items-center">
          {" "}
          <HashLoader size={40} color="#ffffff" loading={loading} />
        </div>
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
              {" "}
              <div>
                <OtpInput
                  containerStyle={
                    "flex gap-2 sm:gap-3 md:gap-4 w-full py-1 justify-center"
                  }
                  value={otp}
                  numInputs={6}
                  onChange={setOtp}
                  renderInput={(props) => (
                    <input
                      {...props}
                      placeholder="-"
                      className="h-10 w-8 sm:h-12 sm:w-10 md:w-12 bg-richblack-800 text-sm sm:text-lg text-center text-white border border-richblack-600 rounded-md outline-none shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]"
                      style={{
                        minWidth: "32px",
                        width: "clamp(32px, 8vw, 48px)",
                      }}
                    />
                  )}
                />
              </div>
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
    <div className="w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default VerifyEmail;
