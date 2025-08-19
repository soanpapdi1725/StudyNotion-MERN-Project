import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

const ResetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const onEmailSent = useRef(null);
  const { loading } = useSelector((state) => state.auth);
  return (
    <div className="flex min-w-screen min-h-screen justify-center items-center text-richblack-5">
      {false ? (
        <HashLoader size={40} color="ffffff" loading={loading} />
      ) : (
        <div className="mx-auto w-11/12 max-w-max-content ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center w-[32%] gap-8">
              <div className="flex flex-col text-start w-full">
                <h1 className="text-4xl">
                  {" "}
                  {!emailSent ? "Reset Your Password" : "Check email"}{" "}
                </h1>
                <p className="w-[95%] text-richblack-100 ">
                  {!emailSent
                    ? `Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery`
                    : `We have sent the reset email to ${onEmailSent}`}
                </p>
              </div>
              <form method="post" className="w-full flex flex-col gap-2">
                <label htmlFor="emailId">
                  Email Address <span className="text-pink-200">*</span>
                </label>
                <input
                  type="email"
                  placeholder="myemail@mail.com"
                  className="w-full bg-richblack-800 text-pure-greys-25 h-12 px-2 py-1 rounded-lg text-lg outline-none"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
