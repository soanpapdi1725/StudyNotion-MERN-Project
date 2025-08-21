import { useState } from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

const VerifyEmail = () => {
  const { loading, signUpData } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  return (
    <div className="lg:w-screen h-screen text-richblack-5">
      {loading ? (
        <HashLoader size={40} color="#ffffff" loading={loading} />
      ) : (
        <div className="mx-auto flex items-center justify-center w-11/12 max-w-max-content">
          <div className="flex flex-col items-center gap-4 justify-start">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">Verify Email</h1>
              <p>
                A verification code has been sent to you. Enter the code below
              </p>
            </div>
            <form method="post"></form>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
