import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user } = useSelector((state) => state.userDetail);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center text-white">
      <h1>My Profile</h1>
      <div className="">
        <div className="flex flex-row">
          <img src={user?.image} alt="" />
          <div className="flex flex-col">
            {/* Name */}
            <h1>{user?.firstName}</h1>
            {/* Email */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyProfile;
