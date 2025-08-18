import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Homes";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Navbar from "./components/Common/navbar";
import ProtectRoute from "./components/Common/ProtectRoute";
import Footer from "./components/Common/Footer";
import ErrorPage from "./pages/Error404";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectRoute>
              <LoginPage />
            </ProtectRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectRoute>
              <SignupPage />
            </ProtectRoute>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
