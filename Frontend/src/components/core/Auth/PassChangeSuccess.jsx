import React from "react";
import { Link } from "react-router";

const PassChangeSuccess = ({ email }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[45%] gap-4">
        <h1 className="text-3xl font-semibold text-richblack-5">
          Reset complete!
        </h1>
        <p className="text-richblack-100 text-lg">
          Password Changed Successfully! We have sent an email to{" "}
          <span className="font-edu-sa text-base bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6ffcb] bg-clip-text text-transparent">
            sy239370@gmail.com
          </span>{" "}
          to confirm
        </p>
        <Link to={"/login"} className="bg-yellow-50 hover:bg-yellow-100 rounded-lg text-lg text-richblack-900 px-2 py-2 text-center">
          Return to Login
        </Link>
      </div>
    </div>
  );
};

export default PassChangeSuccess;
