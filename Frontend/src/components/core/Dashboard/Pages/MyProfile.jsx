import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FiEdit } from "react-icons/fi";
import Footer from "../../../Common/Footer";

const personalDetailsData = [{
title: "Firstname",
value: `${}`
}]

const MyProfile = () => {
  const { user } = useSelector((state) => state.userDetail);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center text-white my-10 gap-15 mx-auto w-11/12 max-w-[1000px]">
        <h1 className="text-4xl">My Profile</h1>
        <div className="flex flex-row justify-between items-start w-full sm:items-center bg-richblack-800 py-10 sm:px-8 px-2  rounded-lg ">
          <div className="flex  items-center  flex-row sm:items-center gap-4">
            <img
              className="rounded-full aspect-square w-[78px]"
              src={user?.image}
              alt={`${user?.firstName}'s Image`}
            />
            <div className="flex flex-col w-full">
              {/* Name */}
              <h1 className="text-xl sm:text-3xl">
                {user?.firstName} {user?.lastName}
              </h1>
              {/* Email */}
              <p className="text-sm text-richblack-400 w-[50%]">
                {user?.email}
              </p>
            </div>
          </div>
          {/* edit button */}
          <Link
            to={"/dashboard/settings"}
            className="bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200 px-3 py-2.5 gap-2 flex items-center text-black font-edu-sa rounded-lg"
          >
            <span className="sm:block hidden">Edit</span>
            <FiEdit />
          </Link>
        </div>
        <div className="flex flex-row justify-between items-start sm:items-center gap-8 bg-richblack-800 py-10 px-2 sm:px-8 rounded-lg mt-">
          <div className="flex flex-col gap-2">
            <h1 className="sm:text-3xl text-xl">About</h1>
            <p className="text-sm text-richblack-400">
              {user?.additionalDetails?.about ||
                `Write Something About Yourself...`}
            </p>
          </div>
          <div>
            {/* edit button */}

            <Link
              to={"/dashboard/settings"}
              className="bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200 px-3 py-2.5 gap-2 flex items-center text-black font-edu-sa rounded-lg"
            >
              <span className="sm:block hidden">Edit</span>
              <FiEdit />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start gap-8 sm:items-center bg-richblack-800 py-10 px-2 sm:px-8 rounded-lg">
          {/* Personal Details */}
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-3xl">
              Personal Details
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3">

            </div>
          </div>
          {/* edit button */}
          <Link
            to={"/dashboard/settings"}
            className="bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200 px-3 py-2.5 gap-2 flex items-center text-black font-edu-sa rounded-lg"
          >
            <span className="sm:block hidden">Edit</span>
            <FiEdit />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default MyProfile;
