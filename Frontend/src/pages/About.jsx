import HighlightText from "../components/core/homepage/HighlightText";
import aboutus1 from "../assets/Images/aboutus1.webp";
import aboutus2 from "../assets/Images/aboutus2.webp";
import aboutus3 from "../assets/Images/aboutus3.webp";
import foundingStoryImage from "../assets/Images/FoundingStory.png";
import Quotes from "../components/core/About/Quotes";
import Footer from "../components/Common/Footer";
import Ambition from "../components/core/About/Ambition";
import AchievementSection from "../components/core/About/AchievementSection";
import AboutFeatures from "../components/core/About/AboutFeatures";
import ContactSectionForm from "../components/core/About/ContactSectionForm";
const AboutPage = () => {
  return (
    <div className="w-full text-white flex flex-col items-center overflow-x-hidden">
      {/* sections */}
      {/** Section 1 */}
      <section
        className="w-full h-fit -my-1
       bg-richblack-700 flex flex-col items-center justify-center py-18"
      >
        <div className="w-11/12 max-w-max-content flex flex-col items-center">
          <div className="lg:w-[70%]">
            <h1 className="text-4xl font-bold text-center">
              Driving Innovation in Online Education for a{" "}
              <HighlightText text={"Brighter Future"} />
            </h1>
            <p className="text-pure-greys-100 text-center mt-4">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <img className="min-w-[50px] min-h-[50px]" src={aboutus1} alt="" />
            <img className="min-w-[50px] min-h-[50px]" src={aboutus2} alt="" />
            <img className="min-w-[50px] min-h-[50px]" src={aboutus3} alt="" />
          </div>
        </div>
      </section>

      <section className="h-fit w-full py-24 flex justify-center border-b-[1px] border-richblack-700">
        {" "}
        <Quotes />
      </section>

      <section className="my-24 mx-auto w-11/12 max-w-max-content lg:mx-20">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-10">
            <Ambition
              title={"Our Founding Story"}
              data={`Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.`}
              data2={
                "As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential."
              }
              backgroundGradient={
                "font-bold bg-gradient-to-br from-[#a63287] via-[#fc221e] to-[#fc8038] bg-clip-text text-transparent rounded-md"
              }
            />
            <div className="w-full lg:w-[50%] my-10 lg:mt-0 lg:ml-24">
              <img
                className="max-w-full shadow-[0px_2px_20px_5px_rgba(231,_76,_27,_0.5)]"
                src={foundingStoryImage}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:mt-24">
            <Ambition
              title={"Our Vision"}
              data={
                "With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience."
              }
              backgroundGradient={
                "font-bold bg-gradient-to-b from-[#fa6c25] via-[#f57622] to-[#ffdbbaf1] bg-clip-text text-transparent rounded-md"
              }
            />
            <Ambition
              title={"Our Mission"}
              data={
                "Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."
              }
              backgroundGradient={
                "font-bold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6ffcb] bg-clip-text text-transparent rounded-md"
              }
              specificStyling={"lg:ml-24 lg:my-0 my-18"}
            />
          </div>
        </div>
      </section>
      {/* achievement wala section */}
      <section className="w-full h-fit flex justify-center text-white bg-richblack-700 py-5">
        <AchievementSection />
      </section>
      <section className="m-auto w-11/12 max-w-max-content p-2 flex flex-col items-center justify-center gap-5 text-white">
        <AboutFeatures />
      </section>
      <section className=" my-14">
        <ContactSectionForm />
      </section>
      <section className="my-20">
        <h1 className="text-4xl font-bold">Reviews From other learners</h1>
        {/* reviews slider */}
      </section>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
