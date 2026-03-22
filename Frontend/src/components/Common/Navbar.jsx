import { Link, matchPath, useLocation } from "react-router";
import studyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import { courseEndpoints } from "../../services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import ProfileButton from "../core/Auth/ProfileButton";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.userDetail);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  // sublinks and setSublinks useState()

  const [sublinks, setSubLinks] = useState([]);
  // function to get and setSublinks in the sublinks
  const fetchSublinks = async () => {
    try {
      const result = await apiConnector(
        "GET",
        courseEndpoints.GET_ALL_CATEGORIES_API
      );
      setSubLinks(result.data.data);
    } catch (error) {
      console.log("Could not fetched catalogList");
    }
  };
  // useEffect for Api Calls
  useEffect(() => {
    fetchSublinks();
  }, []);
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="h-15 flex w-full items-center justify-center">
      <div className=" flex sm:relative bg-richblack-900 w-screen relative z-50 h-14 items-center justify-center border-b-[1px] border-b-richblack-700 translate-y-  transition-all duration-500">
        <div className="mx-auto overflow-visible flex flex-row justify-between items-center w-11/12 max-w-max-content">
          <Link to={"/"}>
            <img
              width={160}
              height={42}
              loading="lazy"
              src={studyNotionLogo}
              alt="StudyNotionImage"
            />
          </Link>
          {/* nav links */}
          <nav>
            <ul className="md:flex hidden  flex-row gap-x-6 text-richblack-25 text-medium">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="group relative cursor-pointer flex flex-row items-center gap-1 hover:text-richblack-5">
                      <p>{link.title}</p>
                      <IoIosArrowDropdownCircle className="group-hover:-rotate-180 group-hover:scale-95 transform-3d transition-all group-hover:text-richblack-5 duration-400" />

                      <div className="absolute invisible opacity-0 w-[250px] flex flex-col left-1/2 transform -translate-x-4/5 ml-2 top-full mt-2 group-hover:translate-y-0 translate-y-2 rounded-md bg-richblack-5 p-4 text-richblack-900 gap-4 duration-300 group-hover:visible group-hover:opacity-100 ease-in-out z-50">
                        <div className="absolute -z-10 bg-richblack-5 rotate-45 w-4 h-4 -top-2 right-5"></div>

                        {sublinks.length ? (
                          sublinks.map((element, index) => {
                            return (
                              <Link
                                key={index}
                                className="relative z-10 w-full flex items-center h-12 p-4 font-normal hover:bg-richblack-50 rounded-md"
                                to={element.categoryName}
                              >
                                {element.categoryName}
                              </Link>
                            );
                          })
                        ) : (
                          <div>No Categories</div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      {" "}
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Login/Signup/Dashboard */}
          <div className="flex gap-x-4 items-center text-richblack-100">
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link className="relative" to={"/dashboard/cart"}>
                <FiShoppingCart />
                {totalItems > 0 && <span>{totalItems}</span>}
              </Link>
            )}
            {token === null && (
              <Link
                className="bg-richblack-800  hidden md:block cursor-pointer outline-none border border-richblack-100/20 text-base px-3 py-2 rounded-md"
                to={"/login"}
              >
                <button className="cursor-pointer">Login</button>
              </Link>
            )}
            {token === null && (
              <Link
                className="bg-richblack-800 hidden md:block  border border-richblack-100/20 px-3 py-2 rounded-md"
                to={"/signup"}
              >
                <button className="cursor-pointer">Sign up</button>
              </Link>
            )}

            {token !== null && <ProfileButton />}
              <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
