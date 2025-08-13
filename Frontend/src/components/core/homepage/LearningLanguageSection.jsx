import HighlightText from "./HighlightText";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Know_your_progress from "../../../assets/Images/Know_your_progress.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";
import CTAButton from "../../Common/Button";
const LearningLanguageSection = () => {
  return (
    <div className="my-[130px]">
      <div className="flex flex-col items-center gap-5">
        {/* heading and subheading */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl text-center font-bold">
            Your swiss knife for{" "}
            <HighlightText text={"learning any language"} />
          </h1>
          <p className="text-pure-greys-600 text-center mx-auto text-base lg:w-[60%]">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </p>
        </div>

        {/* images */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
          <img
            className="object-cover  md:-mr-32"
            src={Know_your_progress}
            alt="Know_your_progress Image"
          />
          <img
            className="object-cover -mt-14 md:m-0"
            src={Compare_with_others}
            alt="Compare_with_others Image"
          />
          <img
            className="object-cover -mt-20 md:-ml-36"
            src={Plan_your_lessons}
            alt="Plan_your_lessons Image"
          />
        </div>
        {/* Button */}
        <div>
          <CTAButton active={true} linkto={"/signup"}>
            <div className="font-bold text-lg">Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
