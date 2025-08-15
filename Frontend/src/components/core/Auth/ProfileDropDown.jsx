import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
const ProfileDropDown = () => {
  const { user } = useSelector((state) => state.userType);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <button
      onClick={() => {
        setOpen(!open);
      }}
    >
      {/* image and drop down wla div */}
      <div></div>
    </button>
  );
};

export default ProfileDropDown;
