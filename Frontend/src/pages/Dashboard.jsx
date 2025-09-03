import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { HashLoader } from "react-spinners";
import Sidebar from "../components/core/Dashboard/Sidebar";
import ConfirmationModal from "../components/Common/ConfirmationModal";
const Dashboard = () => {
  const { loading: authloading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.userDetail);
  const handleModalData = (data) => {
    console.log(data);
    return data;
  };
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
    <div className="flex  relative min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto bg-blue-200 mx-auto w-11/12 max-w-[1000px] py-10 px-10">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
