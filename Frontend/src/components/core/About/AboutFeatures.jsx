import HighlightText from "../homepage/HighlightText";
import Button from "../../Common/Button";
const featureData1 = [
  {
    title: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    title: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    title: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },

  {
    title: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    title: "Auto-Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const AboutFeatures = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-4 mb-10 p-5 lg:w-fit">
      <div className="lg:col-span-2 lg:h-[280px] p-5 bg-transparent">
        <div className="flex flex-col pb-5 gap-3">
          <h1 className="text-4xl font-semibold">
            World-Class Learning for <HighlightText text={"Anyone, Anywhere"} />
          </h1>
          <p className="font-medium">
            Studynotion partners with more than 275+ leading universities and
            companies to bring flexible, affordable, job-relevant online
            learning to individuals and organizations worldwide.
          </p>
          <div className="w-fit mt-4">
            <Button linkto={"/"} active={true}>
              Learn More
            </Button>
          </div>
        </div>
        
      </div>
      {featureData1.map((element, index) => {
          return (
            <div key={index}
              className={`${
                (index + 1) % 2 === 0 ? "bg-richblack-800" : "bg-richblack-700"
              } ${index === 2 ? "lg:col-start-2": ""} lg:h-[280px]`}
            >
                <div className="flex flex-col gap-8 p-7">
                    <h1 className="text-lg">
                        {element.title}
                    </h1>
                    <p className="text-base">
                        {element.description}
                    </p>
                </div>
            </div>
          );
        })}
    </div>
  );
};

export default AboutFeatures;
