import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
const ExploreMore = () => {
  const tabsName = [
    "Free",
    "New to Coding",
    "Most Popular",
    "Skills Paths",
    "Career Paths",
  ];

  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setNewCourse] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyData = (newClickTab) => {
    setCurrentTab(newClickTab);
    const filteredCourse = HomePageExplore.filter(
      // returns array
      (courseData) => courseData.tag === newClickTab
    );
    setNewCourse(filteredCourse);
    setCurrentCard(filteredCourse[0].courses[0].heading);
  };
  return (
    <div className="mt-[70px] flex justify-center">
      <div className="flex flex-col gap-14 items-center justify-center w-[80%] md:w-[100%]">
        {/* div1 for heading and subheading */}
        <div className="flex flex-col gap-3 w-[80%] md:w-[100%]">
          <h1 className="text-4xl font-semibold text-center">
            Unlock the <HighlightText text={"Power of Code"} />
          </h1>
          <p className="text-richblack-300 text-center text-base">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
        {/* div2 for tabs and selection */}
        <div className="bg-richblack-800 px-10 py-2.5 rounded-lg md:rounded-full">
          <div className="flex flex-col items-center md:p-0 md:flex-row gap-4">
            {tabsName.map((element, index) => {
              return (
                <div
                  className={`${
                    currentTab === element
                      ? "bg-richblack-900 text-pure-greys-25 "
                      : "text-pure-greys-300"
                  } px-3 py-1 rounded-full italic text-base font-semibold cursor-pointer duration-100 hover:scale-95 active:bg-black `}
                  key={index}
                  onClick={() => {
                    setMyData(element);
                  }}
                >
                  {element}
                </div>
              );
            })}
          </div>
        </div>
        {/* div3 for Cards selection */}
        <div></div>
      </div>
    </div>
  );
};

export default ExploreMore;
