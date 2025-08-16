import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import SliderTab from "../../Common/SliderTab";
import countrycode from "../../../data/countrycode.json";
import Button from "../../Common/Button";
import { ACCOUNT_TYPE } from "../../../utils/constants";

const SignupForm = ({ selectionTab }) => {
  const [currentTab, setCurrentTab] = useState(selectionTab[0]);
  const [eyeButton, setEyeButton] = useState(true);
  const [eyeButton2, setEyeButton2] = useState(true);
  const [selectedCode, setselectCode] = useState("+91");

  // signupForm Data and setting of Data and also function for handling on Submit
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    accountType: ACCOUNT_TYPE.STUDENT,
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  });
  const {
    firstName,
    lastName,
    accountType,
    password,
    confirmPassword,
    email,
    contactNumber,
  } = formData;

  // handle On Change
  const handleOnChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(formData)
  return (
    <form className="flex  flex-col gap-3 w-full" method="post">
      <div className="bg-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-lg flex flex-row gap-2 px-2 py-1 rounded-full w-fit">
        {selectionTab.map((element, index) => {
          return (
            <div>
              <SliderTab
                element={element}
                index={index}
                currentTab={currentTab}
                setMyData={setCurrentTab}
                style={"px-3 py-1 text-lg"}
              />
              <input
                type="hidden"
                onChange={handleOnChange}
                name="accountType"
                value={element}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-5">
        {/* email id */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">
              First Name <span className="text-pink-400">*</span>
            </p>
            <input
              type="text"
              className="bg-richblack-800 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
              placeholder="Enter First Name"
              name="firstName"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-base">
              Last Name <span className="text-pink-400">*</span>
            </p>
            <input
              type="text"
              className="bg-richblack-800 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]  text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
              placeholder="Enter First Name"
              name="lastName"
              required
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-base">
            Email Address <span className="text-pink-400">*</span>
          </p>
          <input
            type="email"
            className="bg-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]  w-full text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
            placeholder="Enter email Address"
            name="email"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <p className="text-base font-medium">
            Phone Number <span className="text-pink-400">*</span>
          </p>
          <div className="flex flex-row gap-5 w-full">
            <div className="md:w-[21%] max-w-[25%]">
              <select
                className="bg-richblack-800  scrollbar-track-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]  text-center text-semibold rounded-lg outline-none text-pure-greys-200 h-12 w-full"
                id="countryCode"
                required
                value={selectedCode}
                onChange={(event) => {
                  setselectCode(event.target.value);
                }}
              >
                <option className="bg-black" value="+91">
                  +91
                </option>
                {countrycode.map((country, index) => {
                  return (
                    <option key={index} value={country.code}>
                      {country.code}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="text"
              className="bg-richblack-800 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 w-full focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
              placeholder="1234567890"
              name="contactNumber"
              required
              onChange={handleOnChange}
            />
          </div>
        </div>
        {/* password and eye */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative w-full flex flex-col gap-1">
            <p className="text-base">
              Password <span className="text-pink-400">*</span>
            </p>
            <input
              type={`${eyeButton ? "password" : "text"}`}
              className="bg-richblack-800 text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg w-full"
              placeholder="Enter Password"
              name="password"
              required
              onChange={handleOnChange}
            />
            <div
              onClick={() => {
                setEyeButton(!eyeButton);
              }}
              className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-3.5  text-pure-greys-200"
            >
              {eyeButton2 ? <IoEye /> : <IoMdEyeOff />}
            </div>
          </div>
          <div className="relative w-full flex flex-col gap-1">
            <p className="text-base">
              Confirm Password <span className="text-pink-400">*</span>
            </p>
            <input
              type={`${eyeButton2 ? "password" : "text"}`}
              className="bg-richblack-800 text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg w-full"
              placeholder="Enter confirm Password"
              name="confirmPassword"
              required
              onChange={handleOnChange}
            />
            <div
              onClick={() => {
                setEyeButton2(!eyeButton2);
              }}
              className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-3.5  text-pure-greys-200"
            >
              {eyeButton ? <IoEye /> : <IoMdEyeOff />}
            </div>
          </div>
        </div>
      </div>

      <button className="mt-8 " type="submit">
        <Button active={true} linkto={""}>
          <div className="text-xl font-medium"> Create Account</div>
        </Button>
      </button>
    </form>
  );
};

export default SignupForm;
