import React from "react";

const SettingOutlet = ({ children, heading, style = null }) => {
  return (
    <div
      className={`flex flex-col gap-4  w-full py-10 px-8 rounded-lg ${
        style ? style : " bg-richblack-800"
      }`}
    >
      <h1 className="sm:text-2xl text-xl text-left md:text-left font-bold">
        {heading}
      </h1>
      {children}
    </div>
  );
};

export default SettingOutlet;
