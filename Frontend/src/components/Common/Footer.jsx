import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import studyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
const Footer = () => {
  const companyLinks = [
    {
      heading: "Company",
      subHeadings: [
        { subHeadingName: "About", link: "/about" },
        { subHeadingName: "Careers", link: "/careers" },
        { subHeadingName: "Affiliates", link: "/Affiliates" },
      ],
    },
  ];
  return (
    <div className="py-14 px-18">
      {/* box */}
      <div className="flex flex-row gap-20 border-b border-richblack-700">
        <div className="border-r border-richblack-700 flex flex-row">
          <div className="flex flex-col gap-10 my-10">
            <img src={studyNotionLogo} alt="" />
            {companyLinks.map((elements, index) => {
              return (
                <div className="flex flex-col gap-4 text-pure-greys-400">
                  <h1
                    key={index}
                    className="text-pure-greys-100 text-xl font-semibold"
                  >
                    {elements.heading}
                  </h1>

                  {elements.subHeadings.map((subHeadingsElements, index) => {
                    return (
                      <Link key={index} to={subHeadingsElements.link}>
                        {subHeadingsElements.subHeadingName}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
            <div className="flex flex-row text-pure-greys-200 gap-8 text-2xl ">
              <FaFacebook className="hover:scale-95" />
              <FaGoogle className="hover:scale-95" />
              <FaXTwitter className="hover:scale-95" />
              <FaYoutube className="hover:scale-95" />
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
