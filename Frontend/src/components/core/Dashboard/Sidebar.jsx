import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authOperations";
import { useDispatch, useSelector } from "react-redux";
import SidebarLinks from "./SidebarLinks";
import { useNavigate } from "react-router";
import { VscSignOut } from "react-icons/vsc";
import { useState } from "react";
import ConfirmationModal from "../../Common/ConfirmationModal";
import { HashLoader } from "react-spinners";
const Sidebar = () => {
  const { user } = useSelector(
    (state) => state.userDetail
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const handleOnClickLogout = () => {
    setConfirmationModal({
      text1: "Are You Sure?",
      text2: "You will be logged out from your account",
      btn1Text: "logout",
      btn2Text: "Cancel",
      btn1Handler: () => dispatch(logout(navigate)),
      btn2Handler: () => setConfirmationModal(null),
    });
  };


  return (
    <div className="">
      <div className="lg:flex hidden flex-col min-w-[250px] gap-4 border-r-[1px] text-richblack-5 border-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((links) => {
            if (links.type && user?.accountType !== links.type) return null;
            return (
              <SidebarLinks
                key={links.id}
                name={links.name}
                iconName={links.icon}
                path={links.path}
              />
            );
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-11/12 bg-richblack-600">
          {" "}
        </div>
        <div className="flex flex-col">
          <SidebarLinks
            name={"Settings"}
            iconName={"VscSettingsGear"}
            path={"/dashboard/settings"}
          />
          <div className="w-full cursor-pointer" onClick={handleOnClickLogout}>
            <div className="grid grid-cols-4 w-full items-center justify-center py-3  hover:text-yellow-25 hover:bg-richblack-700 px-2 text-md">
              <VscSignOut className="text-xl w-full" />
              <span className="col-span-3 ">Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          !confirmationModal
            ? "hidden"
            : "backdrop-blur-xs text-white flex justify-center items-center absolute z-9999 top-0 w-full h-full"
        } `}
      >
        <div>
          {confirmationModal && (
            <ConfirmationModal modalData={confirmationModal} />
          )}
        </div>
      </div>
      {/* fixed mobile navigation */}
      <div className="lg:hidden fixed bottom-0 w-full bg-richblack-800 rounded-t-lg">
        <div className="flex flex-row justify-between">
          {sidebarLinks.map((links) => {
            if (links.type && user?.accountType !== links.type) return null;
            return (
              <SidebarLinks
                key={links.id}
                name={links.name}
                iconName={links.icon}
                path={links.path}
              />
            );
          })}
          <SidebarLinks
            name={"Settings"}
            iconName={"VscSettingsGear"}
            path={"/dashboard/settings"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
