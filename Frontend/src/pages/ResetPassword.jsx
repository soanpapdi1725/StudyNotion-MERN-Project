import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { resetPasswordToken } from "../services/operations/authOperations";
import HighlightText from "../components/core/homepage/HighlightText";

const ResetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [onEmailSent, setOnEmailSent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPasswordToken(onEmailSent, setEmailSent, navigate));
  };
  return (
    <div className="flex lg:min-w-screen min-h-screen justify-center items-center text-richblack-5">
      {loading ? (
        <HashLoader size={40} color="#ffffff" loading={loading} />
      ) : (
        <div className="mx-auto w-11/12 max-w-max-content ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start md:w-[32%] mx-8 my-6 gap-8">
              <div className="flex flex-col text-start gap-2 w-full">
                <h1 className="text-3xl font-bold">
                  {" "}
                  {!emailSent ? "Reset Your Password" : "Check email"}{" "}
                </h1>
                <p className="w-full text-lg text-richblack-100 ">
                  {!emailSent ? (
                    `Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery`
                  ) : (
                    <div className="w-full">
                      We have sent the reset email to{" "}
                      <span className="font-edu-sa text-base bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6ffcb] bg-clip-text text-transparent">
                        {onEmailSent}
                      </span>
                    </div>
                  )}
                </p>
              </div>
              {!emailSent && (
                <form
                  onSubmit={handleOnSubmit}
                  method="post"
                  className="w-full flex flex-col gap-8"
                >
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="emailId">
                      Email Address <span className="text-pink-200">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="myemail@mail.com"
                      className="w-full shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] bg-richblack-800 text-pure-greys-25 h-12 px-2 py-1 rounded-lg text-lg outline-none"
                      onChange={(event) => {
                        setOnEmailSent(event.target.value);
                      }}
                      value={onEmailSent}
                    />
                  </div>
                  <button className="w-full shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] bg-yellow-50 rounded-lg hover:bg-yellow-100 text-richblack-900 px-2 py-2">
                    Reset Password
                  </button>
                </form>
              )}
              {emailSent && (
                <button
                  onClick={() => {
                    setEmailSent(false);
                  }}
                  type="submit"
                  className="w-full shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] bg-yellow-50 rounded-lg hover:bg-yellow-100 text-richblack-900 px-2 py-2"
                >
                  Resend email
                </button>
              )}
              <Link
                to={"/login"}
                className="flex flex-row group gap-3 items-center justify-start translate-x-0 active:-translate-x-10 transition-all ease-in-out duration-500"
              >
                <FaArrowLeftLong className="group-hover:-translate-x-1 duration-500 transition-all ease-in-out" />
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
