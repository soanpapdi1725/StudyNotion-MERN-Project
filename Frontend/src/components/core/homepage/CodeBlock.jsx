import HighlightText from "./HighlightText";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const CodeBlock = ({
  position,
  heading,
  subHeading,
  ctabtn1,
  ctabtn2,
  codeblock,
  CodeColor,
  backgroundGradient,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
      {/* Section 1 Texts and CTA buttons */}
      <div className="flex flex-col gap-8 w-[60%]">
        {heading}
        <div className="text-sm font-light text-richblack-300 w-[70%]">
          {subHeading}
        </div>
        <div className="flex flex-row gap-8">
          <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex items-center gap-2 font-semibold text-sm">
              <div>{ctabtn1.text}</div>
              <FaArrowRight />
            </div>
          </Button>
          <Button active={ctabtn2.active} linkto={ctabtn2.linkto}>
            <div className="font-semibold text-sm text-center">
              {ctabtn2.text}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
