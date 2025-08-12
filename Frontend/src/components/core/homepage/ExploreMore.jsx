import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

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
    setNewCourse(filteredCourse[0].courses);
    setCurrentCard(filteredCourse[0].courses[0].heading);
  };
  return (
    <div className="my-[70px] flex justify-center">
      <div className="flex flex-col gap-14 w-[80%] md:w-[100%]">
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
        <div className="bg-richblack-800 mx-auto px-4 py-2.5 rounded-lg md:rounded-full">
          <div className="flex flex-col items-center md:p-0 md:flex-row justify-center gap-4">
            {tabsName.map((element, index) => {
              return (
                <div
                  className={`${
                    currentTab === element
                      ? "bg-richblack-900 text-pure-greys-5 transform-3d"
                      : "text-pure-greys-300 "
                  } px-3 py-1 rounded-full italic text-[16px] font-medium cursor-pointer duration-100 hover:scale-95 active:bg-black`}
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
        <div className="">
          {/**cards ka group */}
          <div className="flex flex-col md:flex-row items-start gap-12">
            {courses.map((element, index) => {
              return (
                <CourseCard
                  key={index}
                  setCurrentCard={setCurrentCard}
                  element={element}
                  currentCard={currentCard}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
