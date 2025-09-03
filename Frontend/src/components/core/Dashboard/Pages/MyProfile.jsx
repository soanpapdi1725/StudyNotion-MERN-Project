import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user } = useSelector((state) => state.userDetail);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center text-white  ">
      <h1 className="text-4xl">My Profile</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <img
            loading="lazy"
            className="rounded-full"
            src={user?.image}
            alt=""
          />
          <div className="flex flex-col justify-between">
            {/* Name */}
            <h1>
              {user?.firstName} {user?.lastName}
            </h1>
            {/* Email */}
            <p>{user?.email}</p>
          </div>
        </div>
        {/* edit button */}
        <div>
          Edit
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
