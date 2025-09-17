import React from "react";
import { Link } from "react-router";
import Footer from "../components/Common/Footer";
import { FiHome, FiSearch, FiBookOpen, FiUsers } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-suar-200/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Error Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual Elements */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
              {/* Floating 404 with Glitch Effect */}
              <div className="relative mb-8">
                <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-yellow-50 via-blue-100 to-suar-100 bg-clip-text text-transparent relative">
                  404
                </h1>
                {/* Glitch layers */}
                <h1 className="absolute top-0 left-0 text-9xl md:text-[12rem] font-black text-pink-200/20 transform translate-x-1 -translate-y-1">
                  404
                </h1>
                <h1 className="absolute top-0 left-0 text-9xl md:text-[12rem] font-black text-blue-200/20 transform -translate-x-1 translate-y-1">
                  404
                </h1>
              </div>

              {/* Floating Icons */}
              <div className="relative w-full max-w-md h-40 mb-8">
                <div className="absolute top-0 left-8 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center animate-bounce delay-100">
                  <FiSearch className="text-richblack-900 text-xl" />
                </div>
                <div className="absolute top-8 right-12 w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center animate-bounce delay-300">
                  <FiBookOpen className="text-richblack-900 text-sm" />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-suar-100 to-suar-200 rounded-xl flex items-center justify-center animate-bounce delay-500">
                  <FiUsers className="text-richblack-900 text-lg" />
                </div>
                <div className="absolute bottom-0 right-4 w-8 h-8 bg-gradient-to-br from-pink-100 to-pink-200 rounded-md flex items-center justify-center animate-bounce delay-700">
                  <div className="w-2 h-2 bg-richblack-900 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-richblack-5 mb-4 leading-tight">
                  Lost in the
                  <span className="bg-gradient-to-r from-yellow-50 to-yellow-200 bg-clip-text text-transparent">
                    {" "}
                    Learning{" "}
                  </span>
                  Universe?
                </h2>
                <p className="text-xl text-richblack-200 leading-relaxed mb-6">
                  Looks like this page took a detour through a black hole. But
                  hey, every great explorer gets lost sometimes!
                </p>
                <p className="text-lg text-richblack-300">
                  Let's get you back on track to your educational journey.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/"
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-50 to-yellow-100 text-richblack-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-50/25"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FiHome className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                    <span>Return Home</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="group bg-richblack-800 border-2 border-richblack-600 text-richblack-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-blue-200 hover:text-blue-100 hover:shadow-lg hover:shadow-blue-200/10"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>Go Back</span>
                    <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                      <div className="w-2 h-2 bg-current rounded-full transform group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Quick Navigation Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  to="/catalog"
                  className="group p-4 bg-richblack-800/50 border border-richblack-700 rounded-lg hover:border-blue-200/50 hover:bg-richblack-700/50 transition-all duration-300"
                >
                  <div className="text-blue-100 text-sm font-medium group-hover:text-blue-50">
                    Browse Courses
                  </div>
                </Link>
                <Link
                  to="/about"
                  className="group p-4 bg-richblack-800/50 border border-richblack-700 rounded-lg hover:border-suar-200/50 hover:bg-richblack-700/50 transition-all duration-300"
                >
                  <div className="text-suar-100 text-sm font-medium group-hover:text-suar-50">
                    About Us
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="group p-4 bg-richblack-800/50 border border-richblack-700 rounded-lg hover:border-yellow-200/50 hover:bg-richblack-700/50 transition-all duration-300"
                >
                  <div className="text-yellow-100 text-sm font-medium group-hover:text-yellow-50">
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
