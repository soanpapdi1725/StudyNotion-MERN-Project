import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import dummyImage from "../../../assets/Images/dummyProfile.jpg";
import {AiOutlineCaretDown} from ""
const ProfileDropDown = () => {
  const { user } = useSelector((state) => state.userType);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <button
      className="relative"
      onClick={() => {
        setOpen(!open);
      }}
    >
      {/* image and drop down wla div */}
      <div className="flex flex-row items-center">
        {/**src={user?.image} */}
        <img className="object-cover w-[30px] rounded-full aspect-square" src={dummyImage} alt={`profileImage${user?.firstName}`} />
      </div>
      <AiOutlineCaretDown />
    </button>
  );
};

export default ProfileDropDown;
