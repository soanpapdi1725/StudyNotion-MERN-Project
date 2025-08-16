import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import dummyImage from "../../../assets/Images/dummyProfile.jpg";
import { AiOutlineCaretDown } from "react-icons/ai";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { NavbarLinks } from "../../../data/navbar-links";

const subLinks = [
  {
    title: "MERN",
    links: "/catalog/MERN",
  },
  {
    title: "Python",
    links: "/catalog/Python",
  },
];
const ProfileButton = () => {
  const { user } = useSelector((state) => state.userType);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setOpen(false);
  });
  return (
    <button
      ref={ref}
      className="relative lg:-right-10 overflow-visible"
      onClick={() => {
        setOpen(!open);
      }}
    >
      {/* image and drop down wla div */}
      <div className="flex items-center gap-x-1">
        {/**src={user?.image} */}
        <img
          className="object-cover w-[30px] rounded-full aspect-square"
          src={dummyImage}
          alt={`profileImage${user?.firstName}`}
        />
        <AiOutlineCaretDown
          className={`${
            open ? "rotate-180 " : "rotate-0"
          } duration-300 transition-all`}
        />
      </div>
      {open && (
        <div
          className={`absolute h-screen flex flex-col top-[154%] w-screen -translate-x-[100%] lg:translate-x-0 lg:left-0 divide-y-[1px] overflow-hidden rounded-tl-none rounded-bl-md divide-richblack-700 z-[999] border-[1px] ease-in-out border-richblack-700 bg-richblack-800 transition-all duration-400 lg:w-[258px]
          `}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Link
            className="w-full"
            to={"/dashboard/my-profile"}
            onClick={() => {
              setOpen(false);
            }}
          >
            <div className="flex flex-row w-full justify-center items-center gap-x-3 py-3 text-richblack-100 hover:text-yellow-25 hover:bg-richblack-700 px-2 text-md">
              <VscDashboard className="text-xl" />
              DashBoard
            </div>
          </Link>
          <div className="w-full" onClick={() => {}}>
            <div className="w-full gap-x-3 items-center justify-center px-2 py-3 flex text-richblack-100 hover:text-yellow-25 hover:bg-richblack-700 text-md ">
              <VscSignOut className="text-xl" />
              Logout
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default ProfileButton;
