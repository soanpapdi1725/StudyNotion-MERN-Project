import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import dummyImage from "../../../assets/Images/dummyProfile.jpg";
import { AiOutlineCaretDown } from "react-icons/ai";
const ProfileButton = () => {
  const { user } = useSelector((state) => state.userType);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <button
      className="relative overflow-visible"
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
        <AiOutlineCaretDown />
      </div>
      <div
        className={`absolute top-[154%] left-0 divide-y-[1px] overflow-hidden rounded-tl-none rounded-bl-md divide-richblack-700 h-screen lg:w-[4000px] z-[999] border-[1px] ease-in-out border-richblack-700 bg-richblack-800 transition-all ${
          open ? "translate-x-full" : "translate-x-0"
        }  duration-400 transform-3d`}
        onClick={(event) => {
          event.stopPropagation;
        }}
      ></div>
    </button>
  );
};

export default ProfileButton;
