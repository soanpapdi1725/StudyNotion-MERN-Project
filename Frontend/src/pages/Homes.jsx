import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/homepage/HighlightText";
import CTAButton from "../components/Common/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlock from "../components/core/homepage/CodeBlock";
import LearningLanguageSection from "../components/core/homepage/LearningLanguageSection";
import TimeLineSection from "../components/core/homepage/TimeLineSection";
import InstructorSection from "../components/core/homepage/InstructorSection";
import ExploreMore from "../components/core/homepage/ExploreMore";
import Footer from "../components/Common/Footer";
const Home = () => {
  return (
    <div className="">
      {/* Section 1 */}
      <div className="w-11/12 flex flex-col items-center gap-8 mx-auto text-white">
        <Link to={"/signup"}>
          <div className="shadow-[0px_0.5px_0.5px_0.5px_rgba(255,255,255,0.5)] group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-semibold text-richblack-200 transition-all duration-200 hover:scale-95">
            <div className="group-hover:bg-richblack-900 px-10 flex flex-row gap-2 items-center rounded-full py-[5px]">
              <p>Become An Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center flex flex-col justify-center items-center">
          <div className=" text-4xl font-semibold mt-7">
            Empower Your Future with <HighlightText text={"Coding Skills"} />
          </div>
          <div className="mt-4 lg:w-[60%] text-sm font-semibold text-richblack-300">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </div>
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        <div className="lg:shadow-[24px_24px_0px_-5px_rgba(255,255,255,1)] mx-4 my-10">
          <div className="w-[70%]"></div>
          <video className="shadow-[20px_20px_rgba(255,255,255)]" muted loop autoPlay src={Banner}></video>
        </div>
        {/* section code block - 1*/}
        <div>
          <CodeBlock
            position={"lg:flex-row flex-col"}
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              active: true,
              linkto: "/signup",
              text: "Try it Yourself",
            }}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={"Coding Potential"} /> With Our
                Online Courses.
              </div>
            }
            ctabtn2={{
              active: false,
              linkto: "/login",
              text: "Learn More",
            }}
            codeblock={`<!DOCTYPE <html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>\n</html>`}
            backgroundGradient={"from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF]"}
            CodeColor={"text-blue-200"}
          />
        </div>
        {/* section 2 code block */}
        <div className="mb-[50px]">
          <CodeBlock
            position={"lg:flex-row-reverse flex-col"}
            heading={
              <div className="text-4xl font-semibold lg:w-[35%]">
                Start <HighlightText text={"Coding in Seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              active: true,
              linkto: "/signup",
              text: "Continue Lesson",
            }}
            ctabtn2={{
              active: false,
              linkto: "/login",
              text: "Learn More",
            }}
            codeblock={`<!DOCTYPE <html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><ahref="three/">Three</a>\n</nav>\n</html>`}
            backgroundGradient={"from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"}
            CodeColor={"text-pink-200"}
          />
        </div>
        <div>
          <ExploreMore />
        </div>
      </div>
      {/* white wala part Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="bg_homeImageOfLines h-[310px]">
          <div className="w-11/12 flex flex-col items-center gap-8 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-5">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex flex-row gap-2 items-center">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div className="text-pure-greys-5">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="w-11/12 max-w-max-content mx-auto h-fit flex flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row gap-8 mb-10 mt-[95px]">
            <div className="text-4xl font-semibold md:w-[45%]">
              Get the Skills you need for a{" "}
              <HighlightText text={"job that is in demand."}></HighlightText>
            </div>
            <div className="flex flex-col gap-5 items-start md:w-[45%]">
              <div className="text-[16px] font-semibold">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div>
                <CTAButton active={true} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>
      {/* kaalu wala Section 3 */}
      <div className="w-11/12 max-w-max-content flex flex-col first-letter bg-richblack-900 text-white items-center mx-auto py-[130px]">
        {/* Instructor section */}
        <div className="">
          <InstructorSection />
        </div>
        {/* reviews Section */}
        <div>
          <h1 className="text-pure-greys-25 text-4xl font-semibold text-center mt-[100px]">
            Reviews from other Learners
          </h1>
          {/* review Slider here 👇🏼*/}
          <div></div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
      </div>
  );
};

export default Home;
