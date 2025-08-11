import instructorImage from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    // main div
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mt-8 mb-[100px] ">
      {/* image */}
      <div className="lg:w-[50%] shadow-[-30px_-30px_0px_-10px_rgba(255,255,255,1)]">
        <img src={instructorImage} alt="" />
      </div>
      {/* Instructor heading subheading button*/}
      <div className="flex flex-col items-start gap-5 lg:w-[40%]">
        <h1 className="md:text-4xl text-3xl font-semibold w-[50%] md:w-[60%]">
          Become an <HighlightText text={"instructor"} />
        </h1>
        <p className="text-richblack-300 text-[16px] font-medium lg:w-[95%]">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </p>
        <div className="mt-8 w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex flex-row gap-3 items-center text-xl">
              Start Teaching Today <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
