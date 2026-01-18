import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { NavbarLinks } from "../../data/navbar-links";
import { RxCross1 } from "react-icons/rx";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { apiConnector } from "../../services/apiConnector";
import { courseEndpoints } from "../../services/apis";
import { Link, matchPath, useLocation, useNavigate } from "react-router";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { logout } from "../../services/operations/authOperations";
const Hamburger = () => {
  // redux operations
  const { user } = useSelector((state) => state.userDetail);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // UseState & useRef & useEffect  operations
  const [hamburger, setHamburger] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [sublinks, setSubLinks] = useState([]);
  const ref = useRef(null);
  // calling get all categories
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
  // functions calling
  useOnClickOutside(ref, () => setHamburger(false));
  const onClickLogout = () => {
    dispatch(logout(navigate));
  };
  //react router things
  const navigate = useNavigate();
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div ref={ref} className="md:hidden block">
      <div className=" relative w-full ">
        <div
          className="text-richblack-200 flex justify-center text-xl"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          {!hamburger ? (
            <RxHamburgerMenu />
          ) : (
            <RxCross1 className={`${hamburger ? "text-yellow-25" : ""}`} />
          )}
        </div>
      </div>
 
        <div className={`absolute left-2 top-14 w-[95%] h-full `}>
          <div
            className={`${
              hamburger
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            } bg-richblack-800 border-[1px] border-richblack-600  w-full flex flex-col px-4 rounded-lg my-4 justify-center duration-300 transition-all transform-3d ease-in-out `}
          >
            <div className="w-full flex flex-col mt-5 divide-y-2 divide-richblack-400">
              {/* Profile wala div */}
              {token !== null ? (
                <div className="flex flex-col items-center pb-2">
                  <img
                    className="h-20 w-20 rounded-full"
                    src={user?.image}
                    alt={`${user.firstName}'s image`}
                    loading="lazy"
                  />
                  <h1 className="font-bold text-whiet">
                    Welcome {user?.firstName}
                  </h1>
                </div>
              ) : (
                <div className="flex flex-col gap-2 pb-4">
                  <Link
                    className={` cursor-pointer outline-none border text-center  text-base px-3 py-2 rounded-md ${
                      matchRoute("login")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                    to={"/login"}
                  >
                    <button className="cursor-pointer">Login</button>
                  </Link>
                  <Link
                    className={` border text-center  px-3 py-2 rounded-md ${
                      matchRoute("signup")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                    to={"/signup"}
                  >
                    <button className="cursor-pointer">Sign up</button>
                  </Link>
                </div>
              )}

              {/* Navbar links home courses about contact and logout */}
              <nav className="">
                <ul className="flex flex-col gap-4 py-4 text-richblack-25 text-xl">
                  {NavbarLinks.map((link, index) => (
                    <li key={index}>
                      {link.title === "Catalog" ? (
                        <div
                          onClick={() => {
                            setCatalogOpen(!catalogOpen);
                          }}
                          className={`cursor-pointer  flex flex-col hover:text-richblack-5`}
                        >
                          <div className={`flex flex-row items-center gap-2`}>
                            <p>{link.title}</p>
                            <IoIosArrowDropdownCircle
                              className={`${
                                catalogOpen ? "rotate-180" : "rotate-0"
                              } duration-200 transition-all ease-in-out`}
                            />
                          </div>

                          <div
                            className={`w-full ${
                              catalogOpen ? "flex" : "hidden"
                            }  flex-col text-sm bg-richblack-700 rounded-md duration-300 transition-all ease-in-out`}
                          >
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

              {/* Logout button */}
              {token !== null && (
                <div className="flex flex-col">
                  <Link className="text-xl" to={"/dashboard/my-profile"}>
                    <div
                      className={`flex flex-row items-center gap-4 w-full  py-3 text-richblack-100 active:text-yellow-25 active:bg-richblack-700 justify-start text-md ${
                        matchRoute("/dashboard/my-profile")
                          ? "text-yellow-50 rounded-lg"
                          : "hover:text-yellow-25 hover:bg-richblack-700 text-richblack-100"
                      } duration-200 transition-all transform-3d ease-in-out`}
                    >
                      <VscDashboard className="text-xl" />
                      <span className="">Dashboard</span>
                    </div>
                  </Link>
                  <div className="text-xl -mt-2">
                    <div
                      onClick={onClickLogout}
                      className="flex flex-row items-center gap-4 w-full  py-3 text-richblack-100 active:text-yellow-25 active:bg-richblack-700 justify-start text-md"
                    >
                      <VscSignOut className="text-xl " />
                      <span className="col-span-3 ml-0">Logout</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hamburger;
