import React from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authOperations";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import SidebarLinks from "./SidebarLinks";
const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.userDetail
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  if (profileLoading || authLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <HashLoader
          size={40}
          loading={profileLoading || authLoading}
          color="#ffffff"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="flex min-w-[222px] gap-4 border-r-[1px] border-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10">
        <div className="flex flex-col ">
          {sidebarLinks.map((links) => {
            if (links.type && user?.accountType !== links.type) return null;
            return (
              <sidebarLinks
                key={links.id}
                name={links.name}
                iconName={links.icon}
                path={links.path}
              />
            );
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-11/12 bg-richblack-600">
          <div className="flex flex-col">
            <SidebarLinks name={"Settings"} iconName={"VscSettingsGear"} path={"/dashboard/settings"} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
