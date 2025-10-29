import { useEffect, useState } from "react";
import { getEnrolledCourses } from "../../../../services/operations/profileOperations";
import { HashLoader } from "react-spinners";
import { BiSolidDownArrow , BiSolidUpArrow } from "react-icons/bi";

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
      ) : (
        <div>
          <div className="flex flex-col border-[1px] rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 bg-richblack-700 place-items-center place-content-center py-4 px-2 ">
              <p className="col-span-3">Courses</p>
              <p className="col-start-4">Duration</p>
              <p className="col-start-5 col-span-2">Progress</p>
            </div>

            {enrolledCourses?.map((course, index) => (
              <div className="my-4 flex flex-row" key={index}>
                <div className="grid grid-cols-7 place-items-center place-content-center py-4 px-2 gap-2">
                  <img
                    src={course.thumbnail}
                    height={70}
                    width={70}
                    className="rounded-md col-start-1 col-span-1"
                    alt={course.courseName}
                  />
                  <div className="col-start-2 col-span-2">
                    <h1>{course.courseName}</h1>
                    {descIndex === index ? (
                      <button
                        className="text-richblack-400 text-start flex items-center gap-1"
                        onClick={() => {
                          setDescIndex(null);
                        }}
                      >
                        Description <BiSolidUpArrow />
                      </button>
                    ) : (
                      <button
                        className="text-richblack-400 flex items-center gap-1"
                        onClick={() => {
                          setDescIndex(index);
                        }}
                      >
                        Description <BiSolidDownArrow />
                      </button>
                    )}

                    {descIndex === index && (
                      <p className="text-richblack-600">
                        {course.courseDescription}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
