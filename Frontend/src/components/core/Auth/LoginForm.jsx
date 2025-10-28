import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  googleLogin,
  login,
} from "../../../services/operations/authOperations";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../Config/firebaseConfig";
const LoginForm = () => {
  const [eyeButton, setEyeButton] = useState(false);
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginFormData;
  const handleOnChange = (event) => {
    setLoginFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  // Handle on Submit function
  const dispatch = useDispatch();
  const handleOnSubmit = (event) => {
    event.preventDefault();

    // dispatch login email, pass and navigate
    dispatch(login(email, password, navigate));
  };
  const handleOnGoogleAuthLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const userData = {
        email: user.email,
        googleId: user.providerData[0].uid,
        image: user.photoURL,
      };
      dispatch(
        googleLogin(userData.email, userData.googleId, userData.image, navigate)
      );
    } catch (error) {
      console.log("Error while logging in with google");
    }
  };
  return (
    <div className="w-full flex flex-col gap-6">
      <form
        onSubmit={handleOnSubmit}
        className="flex w-full flex-col gap-3"
        method="post"
      >
        <div className="flex flex-col gap-5">
          {/* email id */}
          <div className="w-full flex flex-col gap-1">
            <p className="text-base">Email Address:</p>
            <input
              type="email"
              className="bg-richblack-800 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
              placeholder="Enter email Address"
              name="email"
              value={email}
              required
              onChange={handleOnChange}
            />
          </div>

          {/* password and eye */}
          <div className="relative w-full  flex flex-col gap-1">
            <p className="text-base">Password:</p>
            <input
              type={`${eyeButton ? "password" : "text"}`}
              className="bg-richblack-800 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg w-full"
              placeholder="Enter Password"
              name="password"
              required
              value={password}
              onChange={handleOnChange}
            />
            <button
              type="button"
              onClick={() => {
                setEyeButton(!eyeButton);
              }}
              className="text-xl absolute right-3 top-1/2 -translate-y-1/2 mt-3.5  text-pure-greys-200"
            >
              {eyeButton ? <IoEye /> : <IoMdEyeOff />}
            </button>
          </div>
        </div>
        <a
          className="text-end font-extralight text-blue-100 hover:underline active:underline"
          href="/reset-password"
        >
          Forgot Password?
        </a>
        <button
          className="mt-8 px-4 py-2 rounded-lg w-full hover:bg-yellow-100 bg-yellow-50 text-richblack-900"
          type="submit"
        >
          Sign in
        </button>
      </form>
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-16 bg-pure-greys-600"></div>
            <span className="text-pure-greys-400 text-sm">Or login with</span>
            <div className="h-[1px] w-16 bg-pure-greys-600"></div>
          </div>
          <button
            onClick={handleOnGoogleAuthLogin}
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

export default LoginForm;
