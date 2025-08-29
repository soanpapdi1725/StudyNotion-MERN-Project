import React from "react";
import Footer from "../components/Common/Footer";

const ErrorPage = () => {
  return (
    <>
      {" "}
      <div className="flex h-screen w-screen justify-center items-center text-3xl text-blue-5">
        <div>Error - 404 Page not Found</div>
      </div>
      <div className="w-screen">
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
