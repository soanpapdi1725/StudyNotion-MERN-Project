import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";
const TimeLineSection = () => {
  const timeLineData = [
    {
      logo: logo1,
      heading: "Leadership",
      subheading: "Fully committed to the success company",
    },
    {
      logo: logo2,
      heading: "Responsibility",
      subheading: "Students will always be our top priority",
    },
    {
      logo: logo3,
      heading: "Flexibility",
      subheading: "The ability to switch is an important skills",
    },
    {
      logo: logo4,
      heading: "Solve the problem",
      subheading: "Code your way to a solution",
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-15 items-center">
        <div className="md:w-[45%] flex flex-col gap-5">
          {timeLineData.map((element, index) => {
            return (
              <div key={index} className="flex flex-col items-start gap-2">
                <div key={index} className="flex flex-row gap-6">
                  {/* image */}
                  <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow-[9px_12px_15px_3px_rgba(40,_39,_40,_0.25)]">
                    <img
                      src={element.logo}
                      alt={`${element.heading} logo`}
                      loading="lazy"
                    />
                  </div>
                  {/* Data heading and subheading */}
                  <div className="flex flex-col items-start">
                    <h2 className="font-bold text-[18px]">{element.heading}</h2>
                    <p className="text-base">{element.subheading}</p>
                  </div>
                </div>
                <div
                  className={`${
                    index === 3
                      ? ""
                      : "ml-6 border-l border-richblack-100 h-8 border-dashed"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="shadow-blue-200">
          <div
            className={`lg:w-[700.26px] lg:h-[309.64px] opacity-80 rounded-[50%_40%_50%_40%] blur-3xl bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] absolute z-10 translate-x-[-5%] translate-y-[15%]`}
          ></div>
          <img
            className="lg:shadow-white h-fit object-fit relative z-20"
            src={timelineImage}
            alt=""
            loading="lazy"
          />
          <div className="absolute z-30 translate-x-[15%] translate-y-[-15%] lg:translate-x-[6%] lg:translate-y-[-50%] bg-suar-700  lg:w-[29.5%] h-fit flex flex-col lg:flex-row gap-8 items-center uppercase justify-center text-pure-greys-5 py-4 lg:py-7">
            <div className="flex flex-row items-center gap-5 md:border-r border-suar-300 px-7">
              <p className="lg:text-6xl text-4xl font-bold w-[30%]">10</p>
              <p className="lg:text-[14px] text-[10px] font-semibold text-suar-300 text-center w-[30%]">
                Years Experiences
              </p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <p className="lg:text-6xl text-4xl font-bold">250</p>
              <p className="lg:text-[14px] text-[10px] text-suar-300 font-semibold text-center w-[30%]">
                Types of Courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
