import { useEffect, useState } from "react";
import { getEnrolledCourses } from "../../../../services/operations/profileOperations";
import { HashLoader } from "react-spinners";
import { BiSolidDownArrow , BiSolidUpArrow } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar"
const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [descIndex, setDescIndex] = useState(null);
  const enrollCoursesFunction = async (signal) => {
    try {
      setLoading(true);
      const response = await getEnrolledCourses(signal);
      console.log(response);
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
      <h1>Enrolled Courses</h1>
      {!enrolledCourses ? (
        loading && (
          <div className="flex justify-center items-center h-full ">
            <HashLoader color="#ffffff" />
          </div>
        )
      ) : !enrolledCourses?.length ? (
        <p>You Have Not Enrolled in Any Course yet</p>
      ) : (<div className="">
        <div className="flex flex-row justify-evenly gap-5 w-[100%]">
          <div className="w-12  text-center">
            S. No
          </div>
          <div className="w-[40%]  text-center">
            Courses
          </div>
          <div className="w-[10%]  text-center">
            Duration
          </div>
          <div className="w-[20%]  text-center" >
            Progress
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default EnrolledCourses;
