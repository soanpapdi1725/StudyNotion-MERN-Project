import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import SliderTab from "../../Common/SliderTab";
import countrycode from "../../../data/countrycode.json";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSignUpData } from "../../../Slices/authSlice";
import { useNavigate } from "react-router";
import { sendotp } from "../../../services/operations/authOperations";

const SignupForm = ({ selectionTab }) => {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState(selectionTab[0]);
  const [eyeButton, setEyeButton] = useState(true);
  const [eyeButton2, setEyeButton2] = useState(true);
  const [selectedCode, setselectCode] = useState("+91");

  const dispatch = useDispatch();
  // signupForm Data and setting of Data and also function for handling on Submit
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  });
  const {
    firstName,
    lastName,
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
  const handleOnTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password Does not match");
    }

    const signUpData = {
      ...formData,
      accountType,
      contactNumber: `${selectedCode}${contactNumber}`,
    };
    console.log(signUpData);

    dispatch(setSignUpData(signUpData));
    // dispatch for send otp operation function
    dispatch(sendotp(email, navigate));
    handleOnTopPage();
    // reset values
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex  flex-col gap-3 w-full"
      method="post"
    >
      <div className="bg-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-lg flex flex-row gap-2 px-2 py-1 rounded-full w-fit">
        {selectionTab.map((element, index) => {
          return (
            <SliderTab
              element={element}
              key={index}
              currentTab={accountType}
              setMyData={setAccountType}
              style={"px-3 py-1 text-lg"}
            />
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
              value={firstName}
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
              value={lastName}
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
            value={email}
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
                value={selectedCode}
                onChange={(event) => {
                  setselectCode(event.target.value);
                  handleOnChange;
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
              value={contactNumber}
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
              value={password}
              onChange={handleOnChange}
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
              value={confirmPassword}
              onChange={handleOnChange}
            />
            <div
              onClick={() => {
                setEyeButton2(!eyeButton2);
              }}
              className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-3.5  text-pure-greys-200"
            >
              {eyeButton2 ? <IoEye /> : <IoMdEyeOff />}
            </div>
          </div>
        </div>
      </div>

      <button
        className="mt-8 px-4 py-2 rounded-lg w-full hover:bg-yellow-100 bg-yellow-50 text-richblack-900"
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
