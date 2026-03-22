import RenderSteps from "./RenderSteps";

const AddCourses = () => {
  const UPLOAD_TIPS = [
    "Set the Course Price option or make it free",
    "Standard size for the course thumbnail is 1024x576.",
    "Video section controls the course overview video",
    "Course Builder is where you create & organize a course.",
    "Add Toples in the Course Builder section to create lessons, quizzes, and assignments",
    "Information from the Additional Data section shows up on the course single page.",
    "Make Announcements to notify any important.",
    "Notes to all enrolled students at once.",
  ];
  return (
    <>
      {/* Main side screen  */}
      <div className="text-white flex flex-row mx-auto w-11/12 max-w-[1000px] my-20">
        {/* Add course form and heading */}
        <div className="flex flex-col w-[80%]">
          <h1 className="text-richblack-5  text-2xl">Add Course</h1>
          <div>
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="bg-richblack-800  px-8 py-5 flex flex-col rounded-lg gap-4">
          <h1 className="text-xl">⚡Course Upload Tips</h1>
          <ul className="text-sm font-light text-richblack-50">
            {UPLOAD_TIPS.map((tips, index) => (
              <li key={index} className="my-0.5">
                {tips}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddCourses;
