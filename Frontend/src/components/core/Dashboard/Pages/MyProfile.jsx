import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FiEdit } from "react-icons/fi";
import Footer from "../../../Common/Footer";

const MyProfile = () => {
  const { user } = useSelector((state) => state.userDetail);

  const personalDetailsData = [
    {
      title: "First Name",
      value: user?.firstName,
      alternateValue: null,
    },
    {
      title: "Last Name",
      value: user?.lastName,
      alternateValue: null,
    },
    {
      title: "Email Id",
      value: user?.email,
      alternateValue: null,
    },
    {
      title: "Contact Number",
      value: user?.additionalDetails?.contactNumber,
      alternateValue: "Add Contact Number",
    },
    {
      title: "Gender",
      value: user?.additionalDetails?.gender,
      alternateValue: "Add Gender",
    },
    {
      title: "Date of birth",
      value: user?.additionalDetails?.dateOfBirth,
      alternateValue: "Add Date of birth",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center text-white my-20 gap-15 mx-auto w-11/12 max-w-[1000px]">
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
              <h1 className="text-xl sm:text-3xl font-bold">
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
            <h1 className="sm:text-3xl text-xl font-bold">About</h1>
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
          <div className="flex flex-col gap-4">
            <h1 className="text-xl sm:text-3xl font-bold">Personal Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 justify-between text-sm">
              {personalDetailsData.map((element, index) => {
                return (
                  <div key={index} className={`flex flex-col gap-1 ${index === 1 || index === 3 ||index ===  5 || index ===  7 ? "md:col-start-3" : "md:col-start-1"}`}>
                    <h1 className="text-richblack-300">{element.title}</h1>
                    <p className="text-richblack-25">{element.value || element.alternateValue}</p>
                  </div>
                );
              })}
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
