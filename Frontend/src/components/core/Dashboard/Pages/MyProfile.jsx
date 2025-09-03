import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user } = useSelector((state) => state.userDetail);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <h1>My Profile</h1>
      <div className="">
        <div>
          <img src={user?.image} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyProfile;
