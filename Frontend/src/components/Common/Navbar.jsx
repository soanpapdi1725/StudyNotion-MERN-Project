import React from "react";
import { Link, matchPath, useLocation } from "react-router";
import studyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
const Navbar = () => {
  const location = useLocation();
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
          <ul className="flex flex-row gap-4 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li>
                {link.title === "Catalog" ? (
                  <div></div>
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
        <div className="flex gap-8">

        </div>
      </div>
    </div>
  );
};

export default Navbar;
