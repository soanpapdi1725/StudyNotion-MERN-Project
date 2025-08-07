import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/homepage/HighlightText";
import CTAButton from "../components/core/homepage/Button";
import Banner from "../assets/Images/banner.mp4";
const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className=" elative mx-auto flex flex-col w-11/12 items-center max-w-max-content text-white justify-between">
        <Link to={"/signup"}>
          <div className="shadow-[0px_0.5px_0.5px_0.5px_rgba(255,255,255,0.5)] group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95">
            <div className="group-hover:bg-richblack-900 px-10 flex flex-row gap-2 items-center rounded-full py-[5px]">
              <p>Become An Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center flex flex-col justify-center items-center">
          <div className=" text-4xl font-semibold mt-7">
            Empower Your Future with <HighlightText text={"Coding Skills"} />
          </div>
          <div className="mt-4 w-[70%] text-sm font-light text-richblack-300">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </div>
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        <div className="shadow-[17px_17px_0px_-2px_rgba(255,255,255,0.75)] mx-4 my-10">
          <div className="w-[70%] shadow-[105px_100px_100px_150px_rgba(11,_231,_140,_0.1)] "></div>
          <video className="" muted loop autoPlay src={Banner}></video>
        </div>
      </div>
      {/* Section 2 */}
      {/* Section 3 */}
      {/* Section 4 */}
    </div>
  );
};

export default Home;
