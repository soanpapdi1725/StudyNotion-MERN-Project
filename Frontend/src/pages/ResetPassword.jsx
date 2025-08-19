import { useState } from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const ResetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [onEmailSent, setOnEmailSent] = useState(null);
  console.log(onEmailSent);

  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (event) => {};
  return (
    <div className="flex lg:min-w-screen min-h-screen justify-center items-center text-richblack-5">
      {false ? (
        <HashLoader size={40} color="ffffff" loading={loading} />
      ) : (
        <div className="mx-auto w-11/12 max-w-max-content ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start md:w-[32%] mx-8 my-6 gap-8">
              <div className="flex flex-col text-start gap-2 w-full">
                <h1 className="text-3xl font-bold">
                  {" "}
                  {!emailSent ? "Reset Your Password" : "Check email"}{" "}
                </h1>
                <p
                  style={{ whiteSpace: "pre-line", display: "block" }}
                  className="w-[95%] text-lg text-richblack-100 "
                >
                  {!emailSent
                    ? `Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery`
                    : `We have sent the reset email to\n${onEmailSent}`}
                </p>
              </div>
              {!emailSent && (
                <form method="post" className="w-full flex flex-col gap-8">
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
                    />
                  </div>
                  <button
                    onClick={() => {
                      setEmailSent(true);
                    }}
                    className="w-full shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] bg-yellow-50 rounded-lg hover:bg-yellow-100 text-richblack-900 px-2 py-2"
                  >
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
                className="flex flex-row gap-3 items-center justify-start translate-x-0 active:-translate-x-10 transition-all ease-in-out duration-500"
              >
                <FaArrowLeftLong />
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
