import { HashLoader } from "react-spinners";
import backgroundZigZag from "../../../assets/Images/bghome.svg";
import LoginForm from "./LoginForm";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import SignupForm from "./SignupForm";
import Footer from "../../Common/Footer";
const selectionTab = [ACCOUNT_TYPE.STUDENT, ACCOUNT_TYPE.INSTRUCTOR];

const Template = ({ title, description1, description2, image, formType }) => {
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {/* <HashLoader size={40} color="ffffff" loading={true}/> */}
      <div className="mx-auto w-11/12 max-w-max-content text-pure-greys-5">
        {/* main div */}
        <div className="flex flex-col lg:flex-row gap-15 justify-center my-24">
          {/* heading + login form */}
          <div className="flex flex-col lg:mx-15 items-start  gap-8 lg:w-[40%]">
            {/* heading and subheading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold ">{title}</h1>
              <div className="flex flex-col gap-0">
                <p className="text-pure-greys-400 text-[18px]">
                  {" "}
                  {description1}
                </p>
                <span className="font-edu-sa text-base bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6ffcb] bg-clip-text text-transparent">
                  {description2}
                </span>
              </div>
            </div>
            {/* login /SignUp form */}
            {formType === "login" ? (
              <LoginForm selectionTab={selectionTab} />
            ) : (
              <SignupForm selectionTab={selectionTab} />
            )}
          </div>
          {/* image and background zigZag */}
          <div>
            <div className="relative z-5">
              <img
                alt="Students"
                width={558}
                height={504}
                loading="lazy"
                src={image}
              />
            </div>
            <div className="absolute z-0 translate-y-[-92%] translate-x-[3%]">
              <img
                width={558}
                height={504}
                loading="lazy"
                src={backgroundZigZag}
                alt="Pattern"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Template;
