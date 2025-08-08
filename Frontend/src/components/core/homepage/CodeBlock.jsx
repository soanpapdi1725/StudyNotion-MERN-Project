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
      <div className="flex flex-col gap-8 w-[50%]">
        {heading}
        <div className="text-sm font-semibold text-richblack-300 w-[80%]">
          {subHeading}
        </div>
        <div className="flex flex-row gap-8">
          <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex items-center gap-2">
              <div>{ctabtn1.text}</div>
              <FaArrowRight />
            </div>
          </Button>
          <Button active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
