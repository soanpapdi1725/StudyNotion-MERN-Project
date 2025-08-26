const achievementData = [
  {
    data: "5K",
    type: "Students",
  },
  {
    data: "10+",
    type: "Mentors",
  },
  {
    data: "200+",
    type: "Courses",
  },
  {
    data: "50+",
    type: "Awards",
  },
];
const AchievementSection = () => {
  return (
    <div className="mx-auto w-11/12 max-w-max-content my-10">
      <div className="md:flex grid grid-cols-2 gap-15 flex-row justify-around flex-wrap">
        {achievementData.map((element, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <h1 className="text-4xl font-bold">{element.data}</h1>
              <p className="text-xl">{element.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
