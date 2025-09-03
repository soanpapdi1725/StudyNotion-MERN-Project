import { Route, Routes } from "react-router";
import Home from "./pages/Homes";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ProtectRoute from "./components/Common/ProtectRoute";
import ErrorPage from "./pages/Error404";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Navbar from "./components/Common/Navbar";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./components/core/Dashboard/Pages/MyProfile";
import Dashboard from "./pages/Dashboard";
import EnrolledCourses from "./components/core/Dashboard/Pages/EnrolledCourses";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />
        {/* AUTH LOGIN SIGNIN RESET-PASS UPDATE-PASS VERIY EMAIl */}
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
        <Route path="/signup/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        {/* ABOUT PAGE */}
        <Route path="/about" element={<AboutPage />} />
        {/* Contact us PAGE */}
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Dashboard page - Myprofile */}
        <Route
          path="/dashboard/my-profile"
          element={
            <Dashboard>
              <MyProfile />
            </Dashboard>
          }
        />
        <Route
          path="/dashboard/enrolled-courses"
          element={
            <Dashboard>
              <EnrolledCourses />
            </Dashboard>
          }
        />
        {/* ERROR PAGE */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
