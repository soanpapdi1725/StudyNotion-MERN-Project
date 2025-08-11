import HighlightText from "./HighlightText";
import CTAButton from "./Button";
const LearningLanguageSection = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col items-center gap-5">
        {/* heading and subheading */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl text-center font-bold">
            Your swiss knife for{" "}
            <HighlightText text={"learning any language"} />
          </h1>
          <p className="text-pure-greys-600 text-center lg:w-[60%]">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </p>
        </div>

        {/* images */}
        <div>
          
        </div>
        {/* Button */}
        <div></div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
