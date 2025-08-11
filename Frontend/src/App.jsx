import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Homes";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
};

export default App;
