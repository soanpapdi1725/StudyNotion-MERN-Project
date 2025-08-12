import React from "react";
import { HiMiniUsers } from "react-icons/hi2";
const CourseCard = ({ element, currentCard }) => {
  return (
    <div
      className={`${
        currentCard === element.heading
          ? "bg-white text-richblack-900 shadow-[24px_24px_0px_-5px_rgba(255,255,0,1)]"
          : "text-white bg-richblack-700"
      } md:w-[40%] h-[50%] py-8 px-12  flex flex-col gap-8`}
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl">{element.heading}</h1>
        <p>{element.description}</p>
      </div>
      <div className="border-t flex flex-row justify-between border-pure-greys-400 border-dashed ">
        {/* buttons and links */}
        <div className=" flex flex-row gap-2 text-blue-200 text-xl items-center">
          <HiMiniUsers />
          {element.level}
        </div>
        <div className="flex flex-row gap-2 text-blue-200 text-xl items-center">
          {element.lessionNumber}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
