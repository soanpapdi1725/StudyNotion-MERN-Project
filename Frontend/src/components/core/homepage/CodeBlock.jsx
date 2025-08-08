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
}) => {
  return (
    <div className={`flex ${position}`}>
      <div className="flex flex-col gap-8 text-center justify-center items-center">
        {heading}
        <div className="w-[50%] text-sm text-center font-light text-richblack-300">
          {subHeading}
        </div>
        <div className="flex gap-8">
          <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex justify-center items-center">
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
