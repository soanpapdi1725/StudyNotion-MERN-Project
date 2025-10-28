import { useState } from "react";
const ChangePasswordForm = () => {
  const [seePass_C, setSeePass_C] = useState(false);
  const [seePass_N, setSeePass_N] = useState(false);
  const [seePass_CN, setSeePass_CN] = useState(false);

  return (
    <form className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="CurrPassword">Current Password</label>
        <input
          id="CurrPassword"
          className="bg-richblack-700 h-10 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none   border-none text-lg px-2 py-2.5 rounded-lg "
          type={`${seePass_C ? "text" : "password"}`}
          placeholder="Enter Your Current Password"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="NewPassword">New Password</label>
        <input
          id="NewPassword"
          className="bg-richblack-700 h-10 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none   border-none text-lg px-2 py-2.5 rounded-lg "
          type={`${seePass_N ? "text" : "password"}`}
          placeholder="Enter Your New Password"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="CNPassword">Confirm New Password</label>
        <input
          id="CNPassword"
          className="bg-richblack-700 h-10 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none   border-none text-lg px-2 py-2.5 rounded-lg "
          type={`${seePass_CN ? "text" : "password"}`}
          placeholder="Confirm Your New Password"
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
