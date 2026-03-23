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
import EnrolledCourses from "./components/core/Dashboard/Pages/Student/EnrolledCourses";
import Settings from "./components/core/Dashboard/Pages/Settings";
import PurchaseHistory from "./components/core/Dashboard/Pages/Student/PurchaseHistory";
import PrivateRoute from "./components/Common/PrivateRoute";
import AddCourses from "./components/core/Dashboard/Pages/Instructor/AddCourse/AddCourses";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import Cart from "./components/core/Dashboard/Pages/Student/Cart/Cart";

const App = () => {
  const { user } = useSelector((state) => state.userDetail);
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
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
        {/* Dashboard Routes - */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Common pages */}
          {/* Dashboard page - Settings & My Profile page */}
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="settings" element={<Settings />} />

          {/* Dashboard page - EnrolledCourses */}

          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              {/* Dashboard page - PurchaseHistory */}
              <Route path="purchase-history" element={<PurchaseHistory />} />
              <Route path="cart" element={<Cart />} />
              <Route path="enrolled-courses" element={<EnrolledCourses />} />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="add-course" element={<AddCourses />} />
            </>
          )}
        </Route>

        {/* ERROR PAGE */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
