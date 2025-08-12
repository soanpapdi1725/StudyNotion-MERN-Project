import { useState } from "react";

const LoginPage = () => {
  const selectionTab = ["Student", "Instructor"];
  const [currentTab, setCurrentTab] = useState(selectionTab[0]);
  return (
    <div className="mx-auto w-11/12 max-w-max-content text-pure-greys-5">
      {/* main div */}
      <div className="flex flex-row gap-15 my-24 mx-24">
        {/* heading + login form */}
        <div className="flex flex-col items-start gap-8">
          {/* heading and subheading */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold ">Welcome Back</h1>
            <div className="flex flex-col gap-0">
              <p className="text-pure-greys-400 text-[18px]">
                {" "}
                Discover your passions,
              </p>
              <span className="font-edu-sa text-base bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6ffcb] bg-clip-text text-transparent">
                Be Unstoppable
              </span>
            </div>
          </div>
          {/* login form */}
          <form action="" className="flex flex-col gap-3" method="post">
            <div className="bg-richblack-800 text-lg flex flex-row gap-2 px-2 py-1 rounded-full">
              {selectionTab.map((element, index) => {
                return (
                  <div
                    className={`${
                      currentTab === element
                        ? "bg-richblack-900 text-pure-greys-5"
                        : "text-richblack-200"
                    }  rounded-full`}
                    onClick={() => {
                      setCurrentTab(element);
                    }}
                  >
                    <div className="px-6 py-1">{element}</div>
                    <input type="hidden" value={element} name="accountType" />
                  </div>
                  
                );
              })}
            </div>

            <div>
              
            </div>
          </form>
        </div>
        {/* image and background zigZag */}
        <div></div>
      </div>
    </div>
  );
};

export default LoginPage;
