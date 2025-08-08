import HighlightText from "./HighlightText";
import Button from "./Button";
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
      <div>
        <div>{heading}</div>
        <div>{subHeading}</div>
        <div>
          <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
            {ctabtn1.text}
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
