import HighlightText from "./HighlightText";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
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
    <div className={`flex ${position} my-20 gap-12`}>
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
      {/* Section 2 codes */}
      <div className="lg:w-[534px] ">
        {" "}
        {/*main div*/}
        <div
          className={`w-[373px] h-[257px] opacity-13 rounded-full blur-xl bg-gradient-to-br ${backgroundGradient} absolute z-10`}
        ></div>
        <div
          className={`flex flex-row gap-2 h-fit  backdrop-blur-sm  backdrop:fill-transparent`}
        >
          <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
          </div>
          <div
            className={`w-[90%] flex flex-col font-bold font-mono ${CodeColor}`}
          >
            <TypeAnimation
              sequence={[codeblock, 2000, ""]}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
