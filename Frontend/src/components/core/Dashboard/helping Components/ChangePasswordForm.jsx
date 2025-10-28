import { useState } from "react";
const ChangePasswordForm = () => {
  const [seePass_C, setSeePass_C] = useState(false);
  const [seePass_N, setSeePass_N] = useState(false);
  const [seePass_CN, setSeePass_CN] = useState(false);

  return (
    <form className="w-full">
      <div className="flex-col">
        <label htmlFor="CurrPassword">Current Password</label>
        <input
          id="CurrPassword"
          className="bg-richblack-500"
          type={`${seePass_C ? "text" : "password"}`}
          placeholder="Enter Your Current Password"
        />
      </div>
      <div className="flex-col">
        <label htmlFor="NewPassword">New Password</label>
        <input
          id="NewPassword"
          className="bg-richblack-500"
          type={`${seePass_N ? "text" : "password"}`}
          placeholder="Enter Your New Password"
        />
      </div>
      <div className="flex-col">
        <label htmlFor="CNPassword">Confirm New Password</label>
        <input
          id="CNPassword"
          className="bg-richblack-500"
          type={`${seePass_CN ? "text" : "password"}`}
          placeholder="Confirm Your New Password"
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
