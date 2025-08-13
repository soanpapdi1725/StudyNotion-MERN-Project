import HighlightText from "./HighlightText";
import Button from "../../Common/Button";
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
      <div className="flex flex-col gap-8 lg:w-[50%]">
        {heading}
        <div className="text-sm font-semibold text-richblack-300 lg:w-[80%]">
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
          className={`w-[80%] h-[35%] md:w-[55%] md:h-[55%] lg:w-[373px] lg:h-[257px] opacity-20 rounded-full blur-xl bg-gradient-to-br ${backgroundGradient} absolute z-10 translate-x-[-10%] translate-y-[-10%]`}
        ></div>
        <div
          className={`flex flex-row relative p-4 bg-[#0F172A]/30 border rounded-lg border-white/10 font-mono text-[8px] md:text-sm text-white shadow-lg backdrop-blur-sm w-[95%] md:w-[80%]`}
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
            className={`w-[70%] md:w-[90%] flex flex-col font-bold font-mono ${CodeColor}`}
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
