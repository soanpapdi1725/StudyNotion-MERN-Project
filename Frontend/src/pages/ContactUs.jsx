import React from "react";
import ContactUsForm from "../components/Common/ContactUsForm";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Footer from "../components/Common/Footer";

const contactUsData = [
  {
    icon: <HiChatBubbleLeftRight fontSize={25} />,
    title: "Chat on us",
    info1: "Our friendly team is here to help.",
    info2: "info@studynotion.com",
  },
  {
    icon: <FaEarthAmericas fontSize={20} />,
    title: "Visit us",
    info1: "Come and say hello at our office HQ.",
    info2:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
  },
  {
    icon: <IoCall fontSize={25} />,
    title: "Call us",
    info1: "Mon - Fri From 8am to 5pm",
    info2: "+91 6366 000 666",
  },
];
const ContactUs = () => {
  return (
    <div>
      <div className="mx-auto w-11/12 max-w-max-content my-20">
        <div className="flex flex-col-reverse gap-8 items-center lg:items-start lg:flex-row ">
          <div className="rounded-lg lg:mr-10 text-richblack-200 h-fit flex flex-col gap-12 bg-richblack-800 lg:w-[40%] px-9 py-9">
            {contactUsData.map((element, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex flex-row items-center gap-3 text-lg">
                    {element.icon}
                    <h1 className="text-richblack-5 font-bold">
                      {element.title}
                    </h1>
                  </div>
                  <p className="text-sm">{element.info1}</p>
                  <p className="font-bold text-sm">{element.info2}</p>
                </div>
              );
            })}
          </div>
          <div className="text-richblack-200 lg:w-[60%] sm:px-10 gap-10 flex flex-col border-[1px] border-richblack-600 py-12 rounded-xl">
            <div className="flex flex-col gap-2 mx-4">
              <h1 className="text-4xl text-richblack-25 font-bold">
                Got a Idea? We've got the skills. Let's team up
              </h1>
              <p className="text-lg">
                Tell us more about yourself and what you're got in mind.
              </p>
            </div>
            <ContactUsForm />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
