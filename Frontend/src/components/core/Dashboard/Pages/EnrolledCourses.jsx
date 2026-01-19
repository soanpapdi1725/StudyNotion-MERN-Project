import { useEffect, useRef, useState } from "react";
import { getEnrolledCourses } from "../../../../services/operations/profileOperations";
import { HashLoader } from "react-spinners";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsThreeDotsVertical } from "react-icons/bs";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { LuFileCheck } from "react-icons/lu";
import { HiMiniTrash } from "react-icons/hi2";

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [descIndex, setDescIndex] = useState(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setDotsActive(null);
  });
  const [dotsActive, setDotsActive] = useState(null);
  const enrollCoursesFunction = async (signal) => {
    try {
      setLoading(true);
      const response = await getEnrolledCourses(signal);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Error while getting enrolled courses...", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    enrollCoursesFunction(signal);
    return () => controller.abort();
  }, []);
  return (
    <div className="flex flex-col justify-center text-white my-20 gap-15 mx-auto w-11/12 max-w-[1000px]">
      <h1 className="text-3xl font-bold">Enrolled Courses</h1>
      {!enrolledCourses ? (
        loading && (
          <div className="flex justify-center items-center h-full ">
            <HashLoader color="#ffffff" />
          </div>
        )
      ) : !enrolledCourses?.length ? (
        <p>You Have Not Enrolled in Any Course yet</p>
      ) : (
        <div className="border-1 gap-y-5 border-richblack-600 rounded-md overflow-hidden w-[100%]">
          <div className="flex flex-row justify-between px-4 gap-5 text-sm w-[100%] bg-richblack-700 py-2.5">
            <div className="w-[49%] text-richblack-50 text-start">
              Course Name
            </div>
            <div className="w-[15%] text-richblack-50 text-start">
              Durations
            </div>
            <div className="w-[25%] ml-2 sm:ml-0 text-richblack-50 text-start">
              Progress
            </div>
          </div>
          {enrolledCourses.map((course, index) => (
            <div
              key={index}
              className={`flex px-4 flex-row ${!index === enrolledCourses.length - 1 ? "" : "border-b-1"} border-richblack-600 gap-5 w-[100%] py-2.5`}
            >
              <div className="w-[49%]  flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-[25%] w-full">
                  <img
                    src={course.thumbnail}
                    alt={`${course.courseName}'s image`}
                    loading="lazy"
                    className="rounded-md aspect-square h-[100px] w-[100px]"
                  />
                </div>
                {/* CourseName */}
                <div className="flex flex-col lg:ml-4 w-[75%] ">
                  <h1 className="font-light ">{course.courseName}</h1>
                  <button
                    onClick={() => {
                      if (descIndex === index) {
                        setDescIndex(null);
                      } else {
                        setDescIndex(index);
                      }
                    }}
                    className="text-sm text-start flex flex-row items-center text-richblack-300"
                  >
                    Short Description{" "}
                    {descIndex === index ? (
                      <BiSolidUpArrow />
                    ) : (
                      <BiSolidDownArrow />
                    )}
                  </button>
                  {descIndex === index && (
                    <p className="text-xs text-start text-richblack-400">
                      {course.courseDescription}
                    </p>
                  )}
                </div>
              </div>
              {/* Duration */}
              <div className="w-[15%] flex justify-center items-center text-sm text-center">
                2 hr 32 mins
              </div>
              {/* Progress Bar */}
              <div className="w-[30%] flex flex-col  justify-center items-center">
                <div className="flex flex-row gap-y-1 w-full">
                  <div className="flex flex-col gap-y-1 w-full">
                    <h1 className="text-xs text-richblack-5 font-bold text-start">
                      Progress {65}%
                    </h1>
                    <ProgressBar
                      height={8}
                      isLabelVisible={false}
                      baseBgColor="#2C333F"
                      bgColor="#47A5C5"
                      className="w-full h-4"
                      completed={65}
                      maxCompleted={100}
                    />
                  </div>
                  <button
                    className="sm:ml-4"
                    onClick={() => {
                      if (dotsActive === index) {
                        setDotsActive(null);
                      } else {
                        setDotsActive(index);
                      }
                    }}
                  >
                    <BsThreeDotsVertical className="text-richblack-400 text-2xl" />
                  </button>
                </div>

                {dotsActive === index && (
                  <div ref={ref} className="flex flex-col rounded-lg mx-12  z-999 w-full h-[80px] bg-richblack-500 text-md   overflow-hidden ">
                    {/* Mark as Completed */}
                    <button className="flex flex-row justify-start items-center px-4  h-full w-full hover:bg-richblack-600  gap-x-2">
                      <LuFileCheck />
                      <h1>Mark as Completed</h1>
                    </button>
                    {/* Remove */}
                    <button className="flex flex-row justify-start items-center px-4 h-full w-full hover:bg-richblack-600  gap-x-2">
                      <HiMiniTrash />
                      <h1>Remove</h1>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
