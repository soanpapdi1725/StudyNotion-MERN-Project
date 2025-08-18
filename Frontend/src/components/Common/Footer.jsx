import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import studyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import {
  companyLinks,
  resourceAndSupportLinks,
  PlansAndCommunityLinks,
  FooterLink2,
} from "../../data/footer-links";
const Footer = () => {
  const lowestFooterLink = [
    { title: "Privacy Policy", link: "/privacyPolicy" },
    { title: "Cookie Policy", link: "cookiePolicy" },
    { title: "Terms", link: "/terms", border: "border-none" },
  ];
  return (
    <div className="bg-richblack-800">
      <div className="w-11/12 max-w-max-content mx-auto ">
        <div className="py-14">
          {/* big footer box */}
          <div className="flex flex-col lg:flex-row lg:gap-10 border-b border-richblack-700">
            <div className="pb-10">
              <div className="flex flex-wrap flex-row items-start gap-15 lg:mr-10">
                <div className="flex flex-col gap-8">
                  <img src={studyNotionLogo} alt="" />
                  <div className="flex flex-col">
                    {companyLinks.map((elements, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-4 text-pure-greys-400"
                        >
                          <h1
                            key={index}
                            className="text-pure-greys-100 text-xl font-semibold"
                          >
                            {elements.title}
                          </h1>
                          {elements.links.map((subHeadingsElements, index) => {
                            return (
                              <Link
                                className="active:underline duration-500 transition-all"
                                key={index}
                                to={subHeadingsElements.link}
                              >
                                <p>{subHeadingsElements.title}</p>
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-row text-pure-greys-200 gap-8 text-2xl ">
                    <FaFacebook className="hover:scale-95  hover:text-white  transition-all duration-200 ease-in-out transform-3d" />
                    <FaGoogle className="hover:scale-95 hover:text-white transition-all duration-200 ease-in-out transform-3d" />
                    <FaXTwitter className="hover:scale-95 hover:text-white transition-all duration-200 ease-in-out transform-3d" />
                    <FaYoutube className="hover:scale-95 hover:text-white transition-all duration-200 ease-in-out transform-3d" />
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  {resourceAndSupportLinks.map((elements, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col text-pure-greys-400 gap-3"
                      >
                        <h1
                          key={index}
                          className="text-pure-greys-100 text-xl font-semibold"
                        >
                          {elements.title}
                        </h1>
                        {elements.links.map((subHeadingElements, index) => {
                          return (
                            <Link
                              className="active:underline duration-500 transition-all"
                              key={index}
                              to={subHeadingElements.link}
                            >
                              <p>{subHeadingElements.title}</p>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-8">
                  {PlansAndCommunityLinks.map((elements, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col text-pure-greys-400 gap-3"
                      >
                        <h1
                          key={index}
                          className="text-pure-greys-100 text-xl font-semibold"
                        >
                          {elements.title}
                        </h1>
                        {elements.links.map((subHeadingElements, index) => {
                          return (
                            <Link
                              className="active:underline duration-500 transition-all"
                              key={index}
                              to={subHeadingElements.link}
                            >
                              <p>{subHeadingElements.title}</p>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* secondbox */}
            <div className="pb-10">
              <div className="lg:pl-24 lg:border-l border-pure-greys-700">
                <div className="flex flex-wrap flex-row items-start text-white gap-8">
                  {FooterLink2.map((elements, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-2">
                        <h1
                          className="text-pure-greys-100 text-xl font-semibold"
                          key={index}
                        >
                          {elements.title}
                        </h1>
                        {elements.links.map((singleLinkAndTitle, index) => {
                          return (
                            <Link
                              className="active:underline duration-500 transition-all"
                              key={index}
                              to={singleLinkAndTitle.link}
                            >
                              <p className="text-base text-pure-greys-400">
                                {singleLinkAndTitle.title}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="text-pure-greys-500 flex flex-rows justify-between mt-5">
            <div className="flex flex-col flex-wrap lg:gap-0 gap-2 lg:flex-row">
              {lowestFooterLink.map((elements, index) => {
                return (
                  <Link
                    key={index}
                    to={elements.link}
                    className={`${
                      elements.border
                        ? elements.border
                        : "md:border-r md:border-pure-greys-700"
                    } px-3 active:underline duration-500 transition-all`}
                  >
                    <div
                      className="font-semibold text-pure-greys-300"
                      key={index}
                    >
                      {elements.title}
                    </div>
                  </Link>
                );
              })}
            </div>
            <h1 className="font-semibold text-pure-greys-300">
              Made with 💘 by Sonu Yadav © 2025 StudyNotion
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
