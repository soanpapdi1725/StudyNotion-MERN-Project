import React from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { FaSitemap } from "react-icons/fa6";

const CourseCard = ({ element, currentCard, setCurrentCard }) => {
  return (
    <div
      onClick={() => {
        setCurrentCard(element.heading);
      }}
      className={`${
        currentCard === element.heading
          ? "bg-white text-richblack-900 shadow-[13px_13px_0px_0px_rgba(255,255,0,1)] transform-3d duration-300"
          : "text-white bg-richblack-700"
      } w-[100%] md:w-[40%] flex flex-col gap-8 transition-all`}
    >
      <div className="flex flex-col gap-8 px-6 py-5">
        <h1 className="text-2xl font-bold">{element.heading}</h1>
        <p className="text-pure-greys-300">{element.description}</p>
      </div>
      <div className="border-t-2 px-5 py-3 flex flex-row justify-between text-blue-200 text-[16px] items-between border-pure-greys-400 border-dashed ">
        {/* buttons and links */}
        <div className=" flex flex-row gap-2  items-center">
          <HiMiniUsers />
          {element.level}
        </div>
        <div className="flex flex-row gap-2  items-center">
          <FaSitemap />
          <div>{element.lessionNumber} Lessons</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
