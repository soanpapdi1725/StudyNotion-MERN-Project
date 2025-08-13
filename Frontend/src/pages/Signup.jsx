import { useState } from "react";
import backgroundZigZag from "../assets/Images/bghome.svg";
import signupImage from "../assets/Images/signup.webp";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Button from "../components/core/homepage/Button";

const SignupPage = () => {
  const selectionTab = ["Student", "Instructor"];
  const [currentTab, setCurrentTab] = useState(selectionTab[0]);
  const [eyeButton, setEyeButton] = useState(false);
  return (
    <div className="mx-auto w-11/12 max-w-max-content text-pure-greys-5">
      {/* main div */}
      <div className="flex flex-col lg:flex-row gap-15 justify-center my-24">
        {/* heading + login form */}
        <div className="flex flex-col lg:mx-15 items-start  gap-8 lg:w-[40%]">
          {/* heading and subheading */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold ">Welcome Back</h1>
            <div className="flex flex-col gap-0">
              <p className="text-pure-greys-400 text-[18px]">
                {" "}
                Discover your passions,
              </p>
              <span className="font-edu-sa text-base bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6ffcb] bg-clip-text text-transparent">
                Be Unstoppable
              </span>
            </div>
          </div>
          {/* login form */}
          <form action="" className="flex flex-col gap-3 w-[90%]" method="post">
            <div className="bg-richblack-800 text-lg flex flex-row gap-2 px-2 py-1 rounded-full w-fit">
              {selectionTab.map((element, index) => {
                return (
                  <div
                    className={`${
                      currentTab === element
                        ? "bg-richblack-900 text-pure-greys-5"
                        : "text-richblack-200"
                    }  rounded-full`}
                    onClick={() => {
                      setCurrentTab(element);
                    }}
                  >
                    <div className="px-6 py-1">{element}</div>
                    <input type="hidden" value={element} name="accountType" />
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-5">
              {/* email id */}
              <div className="w-full flex flex-col gap-1">
                <p className="text-base">:</p>
                <input
                  type="text"
                  className="bg-richblack-800 text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
                  placeholder="Enter email Address"
                  name="email"
                  required
                />
              </div>
              {/* password and eye */}
              <div className="relative w-full flex flex-col gap-1">
                <p className="text-base">Password:</p>
                <input
                  type={`${eyeButton ? "password" : "text"}`}
                  className="bg-richblack-800 text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg w-full"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
                <div
                  onClick={() => {
                    setEyeButton(!eyeButton);
                  }}
                  className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-3.5  text-pure-greys-200"
                >
                  {eyeButton ? <IoEye /> : <IoMdEyeOff />}
                </div>
              </div>
            </div>
            <a className="text-end text-blue-100 hover:underline active:underline" href="/reset-password-token">Forgot Password?</a>
            <button className="mt-8" type="submit">
              <Button active={true} linkto={""}>
                Sign in
              </Button>
            </button>
          </form>
        </div>
        {/* image and background zigZag */}
        <div>
          <div className="relative z-5">
            <img className="h-[420px]" src={signupImage} alt="" />
          </div>
          <div className="absolute z-0 translate-y-[-92%] translate-x-[3%]">
            <img src={backgroundZigZag} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
