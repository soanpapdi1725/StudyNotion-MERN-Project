import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { HashLoader } from "react-spinners";
import Sidebar from "../components/core/Dashboard/Sidebar";
const Dashboard = () => {
  const { loading: authloading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.userDetail);

  if (profileLoading || authloading) {
    return (
      <div>
        <HashLoader
          size={40}
          color="#ffffff"
          loading={profileLoading || authloading}
        />
      </div>
    );
  }
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
