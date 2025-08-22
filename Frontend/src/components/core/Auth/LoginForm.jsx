import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../../services/operations/authOperations";
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
  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col gap-3 w-[90%]"
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
  );
};

export default LoginForm;
