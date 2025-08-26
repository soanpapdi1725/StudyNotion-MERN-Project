import HighlightText from "../components/core/homepage/HighlightText";
import aboutus1 from "../assets/Images/aboutus1.webp";
import aboutus2 from "../assets/Images/aboutus2.webp";
import aboutus3 from "../assets/Images/aboutus3.webp";
import Quotes from "../components/core/About/Quotes";
const AboutPage = () => {
  return (
    <div className="mx-auto w-screen min-h-screen text-white">
      {/* sections */}
      {/** Section 1 */}
      <section
        className="w-screen max-h-fit md:h-[80vh] lg:h-[75vh]
       bg-richblack-700 flex justify-center py-18"
      >
        <div className="w-11/12 overflow-y-visible max-w-max-content flex flex-col items-center">
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
        <div>
          <Quotes />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default AboutPage;
