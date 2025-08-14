import { Link, matchPath, useLocation } from "react-router";
import studyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { FiShoppingCart } from "react-icons/fi";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import { courseEndpoints } from "../../services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.userType);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  // sublinks and setSublinks useState()
  const subLinks = [
    {
      title: "MERN",
      links: "/catalog/MERN",
    },
    {
      title: "Python",
      links: "/catalog/Python",
    },
  ];
  const [sublinks, setSubLinks] = useState([
    {
      title: "MERN",
      links: "/catalog/MERN",
    },
    {
      title: "Python",
      links: "/catalog/Python",
    },
  ]);
  console.log(sublinks);
  // function to get and setSublinks in the sublinks
  const fetchSublinks = async () => {
    try {
      const result = await apiConnector(
        "GET",
        courseEndpoints.GET_ALL_CATEGORIES_API
      );
      console.log(result);
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
    <div className="h-15 flex items-center justify-center border-b-[1px] border-pure-greys-700">
      <div className="mx-auto flex flex-row justify-between items-center w-11/12 max-w-max-content">
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
          <ul className="flex flex-row gap-4 text-richblack-100">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="group flex flex-row items-center gap-1 hover:text-richblack-5">
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle className="group-hover:-rotate-180 group-hover:scale-95 transform-3d transition-all group-hover:text-richblack-5 duration-500" />

                    <div className="absolute visible opacity-0 w-[300px] flex flex-col  left-1/2 top-1/2 -translate-x-4/5 -translate-y-[42vh] rounded-md bg-richblack-5 p-4  text-richblack-900  gap-4  duration-75 group-hover:visible group-hover:opacity-100">
                      <div className=" absolute -z-1 p-4 transition-all duration-300 translate-x-[11vw] -translate-y-[4vh] rotate-45 w-6 h-6 bg-richblack-5"></div>
                      {subLinks.map((element, index) => {
                        return (
                          <Link key={index}
                            className="w-full flex items-center h-12 p-4 font-normal hover:bg-richblack-50 rounded-md"
                            to={element.links}
                          >
                            <div>{element.title}</div>
                          </Link>
                        );
                      })}
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
            <Link className="relative" to={"/cart"}>
              <FiShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link
              className="bg-richblack-800 cursor-pointer outline-none border-richblack-400 text-base px-3 py-2 rounded-md"
              to={"/login"}
            >
              <button className="cursor-pointer">Login</button>
            </Link>
          )}
          {token === null && (
            <Link
              className="bg-richblack-800  border-richblack-400 px-3 py-2 rounded-md"
              to={"/signup"}
            >
              <button className="cursor-pointer">Sign up</button>
            </Link>
          )}

          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
