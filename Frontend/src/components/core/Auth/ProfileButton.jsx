import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { AiOutlineCaretDown } from "react-icons/ai";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { logout } from "../../../services/operations/authOperations";

const ProfileButton = () => {
  const { user } = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  const onClickLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <div ref={ref}>
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
      {open && (
        <div className="absolute h-screen right-0 top-[10vh] xl:top-[7.9vh] sm:w-[248px] hidden sm:block">
          <div
            className={`flex flex-col h-screen  divide-y-[1px] overflow-hidden rounded-tl-none rounded-bl-md divide-richblack-700 z-[999] border-[1px] ease-in-out border-richblack-700 bg-richblack-800 transition-all duration-400
          `}
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
            <div className="w-full cursor-pointer">
              <div
                onClick={onClickLogout}
                className="w-full gap-x-3 items-center justify-center px-2 py-3 flex text-richblack-100 hover:text-yellow-25 hover:bg-richblack-700 text-md "
              >
                <VscSignOut className="text-xl" />
                Logout
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
