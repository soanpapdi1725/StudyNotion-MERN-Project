import { HashLoader } from "react-spinners";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, Navigate, useLocation } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import toast from "react-hot-toast";
import PassChangeSuccess from "../components/core/Auth/PassChangeSuccess";
import { resetPasswordDone } from "../services/operations/authOperations";
import Footer from "../components/Common/Footer";

const passInstructions = [
  "One Lowercase Character",
  "One Special Character",
  "One Uppercase Character",
  "8 Characters minimum",
  "One Number",
];
const UpdatePassword = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passData, setPassData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = passData;
  const handleOnChangePassword = (event) => {
    setPassData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const [responseEmail, setResponseEmail] = useState(null);
  const handleOnSubmitPassword = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password Not matching");
    }
    try {
      const email = await dispatch(
        resetPasswordDone(password, confirmPassword, token)
      );
      setResponseEmail(email);
    } catch (error) {}

    setPassData({
      password: "",
      confirmPassword: "",
    });
  };

  if (setResponseEmail) {
    location.pathname = "/update-password";
  }
  return (
     <div>
    <div className="flex lg:min-w-screen min-h-screen justify-center items-center text-richblack-5">
      {responseEmail ? (
        <PassChangeSuccess email={responseEmail} />
      ) : loading ? (
        <div className="h-screen flex items-center">
          {" "}
          <HashLoader size={40} color="#ffffff" loading={loading} />
        </div>
      ) : (
        <div className="mx-auto w-11/12 max-w-max-content flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-6 ">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Choose New Password</h1>
              <p className="text-lg text-richblack-100">
                Almost done. Enter your new password and youre all set.
              </p>
            </div>
            <form
              onSubmit={handleOnSubmitPassword}
              className="w-full flex flex-col gap-8"
              method="post"
            >
              <label
                htmlFor="password"
                className="flex flex-col gap-2 relative"
              >
                <p className="text-richblack-5">
                  New Password <span className="text-pink-100">*</span>
                </p>
                <input
                  id="password"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleOnChangePassword}
                  className="w-full outline-none h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] bg-richblack-800 rounded-lg text-lg px-2 py-1"
                  placeholder="Enter New Password"
                />
                <div
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-xl text-richblack-50 absolute right-3 top-1/2 -translate-y-1/2 mt-3.5"
                >
                  {!showPassword ? <IoEye /> : <IoMdEyeOff />}
                </div>
              </label>
              <label
                htmlFor="confirmPassword"
                className="flex flex-col gap-2 relative"
              >
                <p className="text-richblack-5">
                  Confirm New Password <span className="text-pink-100">*</span>
                </p>
                <input
                  id="confirmPassword"
                  value={confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handleOnChangePassword}
                  className="w-full outline-none h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] bg-richblack-800 rounded-lg text-lg px-2 py-1"
                  placeholder="Confirm New Password"
                />
                <div
                  onClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  className="text-xl text-richblack-50 absolute right-3 top-1/2 -translate-y-1/2 mt-3.5"
                >
                  {!showConfirmPassword ? <IoEye /> : <IoMdEyeOff />}
                </div>
              </label>
              {/* Check Marks for a password should be */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {passInstructions.map((instruction, index) => {
                    return (
                      <div
                        className="text-suar-100 flex items-center gap-1 text-sm"
                        key={index}
                      >
                        <FaCheck />
                        <p>{instruction}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                className="w-full bg-yellow-50 py-2 rounded-lg text-lg font-medium px-2 text-richblack-900"
                type="submit"
              >
                Reset Password
              </button>
            </form>
            <Link
              to={"/login"}
              className="flex flex-row group gap-3 items-center justify-start translate-x-0 active:-translate-x-10 transition-all ease-in-out duration-500"
            >
              <FaArrowLeftLong />
              Back to Login
            </Link>
          </div>
        </div>
      )}
     </div>
     <div className="w-screen">
          <Footer />
        </div>
    </div>
  );
};

export default UpdatePassword;
