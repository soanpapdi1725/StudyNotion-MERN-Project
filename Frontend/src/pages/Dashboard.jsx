import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { HashLoader } from "react-spinners";
import Sidebar from "../components/core/Dashboard/Sidebar";
const Dashboard = () => {
  const { loading: authloading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.userDetail);
  return (
    <div className="flex relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto  w-full">
        <div className="w-full">
          {profileLoading || authloading ? (
            <div className="flex justify-center items-center h-[80vh] overflow-hidden">
              <HashLoader
                size={40}
                color="#ffffff"
                loading={profileLoading || authloading}
              />
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
