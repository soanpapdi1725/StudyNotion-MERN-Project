import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Homes";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
