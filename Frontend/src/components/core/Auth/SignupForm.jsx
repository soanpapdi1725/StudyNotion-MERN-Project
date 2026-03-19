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
import {
  googleSignUp,
  sendotp,
} from "../../../services/operations/authOperations";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../../../Config/firebaseConfig";

const SignupForm = ({ selectionTab }) => {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState(selectionTab[0]);
  const [eyeButton, setEyeButton] = useState(true);
  const [eyeButton2, setEyeButton2] = useState(true);
  const [selectedCode, setselectCode] = useState("");

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
  const handleOnGoogleAuth = async () => {
    // signInWithPopup is the function which helps in opening the pop up after click
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      console.log(user);
      const [firstName, ...rest] = user.displayName.split(" ");
      const lastName = rest.join(" ");
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        googleId: user.providerData[0].uid,
        image: user.photoURL,
        contactNumber: `${selectedCode}${!user.phoneNumber && ""}`,
        accountType: accountType,
      };
      dispatch(
        googleSignUp(
          userData.firstName,
          userData.lastName,
          userData.email,
          userData.googleId,
          userData.image,
          userData.contactNumber,
          userData.accountType,
          navigate
        )
      );
    } catch (error) {
      console.log("Error while getting response from Google signUp", error);
      console.log(window.location.hostname);
    }
  };
  return (
    <div className="w-full flex flex-col gap-6">
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

        <div className="w-full  flex flex-col gap-5">
          {/* firstName id */}
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
            <div className="flex  flex-col gap-1">
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
              <button type="button"
                onClick={() => {
                  setEyeButton(!eyeButton);
                }}
                className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-3.5  text-pure-greys-200"
              >
                {eyeButton ? <IoEye /> : <IoMdEyeOff />}
              </button>
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
              <button type="button"
                onClick={() => {
                  setEyeButton2(!eyeButton2);
                }}
                className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-3.5  text-pure-greys-200"
              >
                {eyeButton2 ? <IoEye /> : <IoMdEyeOff />}
              </button>
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
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-16 bg-pure-greys-600"></div>
            <span className="text-pure-greys-400 text-sm">
              Or Register with
            </span>
            <div className="h-[1px] w-16 bg-pure-greys-600"></div>
          </div>
          <button
            onClick={handleOnGoogleAuth}
            className="flex items-center justify-center gap-3 w-full max-w-xs px-6 py-3 bg-white hover:bg-richblack-50 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-richblack-900 font-medium text-sm group-hover:text-gray-900">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
