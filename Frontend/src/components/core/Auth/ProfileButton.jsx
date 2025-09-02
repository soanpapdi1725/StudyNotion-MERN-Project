import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, matchPath, useLocation, useNavigate } from "react-router";
import { AiOutlineCaretDown } from "react-icons/ai";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { VscSignOut, VscDashboard } from "react-icons/vsc";
import { logout } from "../../../services/operations/authOperations";
import { CgProfile } from "react-icons/cg";

const ProfileButton = () => {
  const { user } = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setOpen(false);
  });
  const matchRoutes = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const onClickLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <div className="h-fit hidden md:block" ref={ref}>
      <button
        className="relative lg:left-[2vw] overflow-visible"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* image and drop down wla div */}
        <div className="flex items-center gap-x-1">
          {/**src={user?.image} */}
          <img
            className="object-cover w-[30px] rounded-full aspect-square"
            src={user?.image}
            alt={`profileImage${user?.firstName}`}
          />
          <AiOutlineCaretDown
            className={`${
              open ? "rotate-180 " : "rotate-0"
            } duration-300 transition-all`}
          />
        </div>
      </button>

      <div className="absolute w-[250px] right-0 top-14">
        <div
          className={`flex flex-col divide-y-[2px] overflow-hidden ${
            open ? "translate-x-0" : "translate-x-full"
          } tran rounded-tl-none rounded-bl-lg divide-richblack-600 z-[999] border-[1px] ease-in-out border-richblack-700 bg-richblack-800 backdrop-blur-lg transition-all duration-400
          `}
        >
          <div className="flex flex-col ">
            <Link className="w-full" to={"/dashboard/my-profile"}>
              <div
                className={`grid grid-cols-4 w-full items-center justify-center py-3     px-2 text-md ${
                  matchRoutes("/dashboard/my-profile")
                    ? "bg-yellow-600 text-richblack-5 border-r-6 xl:border-r-20 border-yellow-25"
                    : "hover:text-yellow-25 hover:bg-richblack-700 text-richblack-100"
                } duration-200 transition-all transform-3d ease-in-out`}
              >
                <VscDashboard className="text-xl  w-full" />
                <span className="col-span-3 ">Dashboard</span>
              </div>
            </Link>
          </div>

          <div className="w-full cursor-pointer">
            <div
              onClick={onClickLogout}
              className="grid grid-cols-4 w-full items-center justify-center py-3 text-richblack-100 hover:text-yellow-25 hover:bg-richblack-700 px-2 text-md"
            >
              <VscSignOut className="text-xl w-full" />
              <span className="col-span-3 ">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
