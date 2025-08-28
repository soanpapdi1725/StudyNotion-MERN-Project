import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HashLoader } from "react-spinners";
import selectionCode from "../../data/countrycode.json";
import { useDispatch } from "react-redux";
import { contactUsConnection } from "../../services/operations/contactUsOperations";
const ContactUsForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const submitContactForm = async (formData) => {
    dispatch(contactUsConnection(formData, setLoading));
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader size={40} color="#ffffff" loading={loading} />
        </div>
      ) : (
        <form onSubmit={handleSubmit(submitContactForm)}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {/* FirstName & LastName */}
                <div className="flex flex-col gap-2 sm:w-[50%]">
                  {/* FirstName */}
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="bg-richblack-700 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    {...register("firstName", {
                      required: true,
                      validate: {
                        minimumName: (value) => {
                          return (
                            value.length >= 2 ||
                            "First Name should be atleast of 2 characters"
                          );
                        },
                      },
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-pink-200 text-sm text-start inline sm:hidden">
                      {errors.firstName.message ||
                        "Please Enter your first Name"}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 sm:w-[50%]">
                  {/* LastName */}
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="bg-richblack-700 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    {...register("lastName")}
                  />
                </div>
              </div>
              {errors.firstName && (
                <span className="text-pink-200 text-sm text-start hidden sm:inline">
                  {errors.firstName.message || "Please Enter your first Name"}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              {/* Email */}
              <label htmlFor="email">Email</label>
              <input
                className="bg-richblack-700 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
                type="text"
                id="email"
                name="email"
                placeholder="myEmail@mail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-pink-300 text-start text-sm">
                  Please Enter Your Email
                </span>
              )}
            </div>
            {/* Country Code and Phone Number */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-start" htmlFor="countryCode">
                Phone Number
              </label>
              <div className="flex flex-row gap-5">
                <div className="w-24">
                  <select
                    className="bg-richblack-700  scrollbar-track-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]  text-center text-semibold rounded-lg outline-none text-pure-greys-200 h-12 w-full"
                    id="countryCode"
                    {...register("countryCode", {
                      required: true,
                      value: countryCode,
                    })}
                    onChange={(event) => {
                      setCountryCode(event.target.value);
                    }}
                  >
                    {selectionCode.map((country, index) => {
                      return (
                        <option
                          key={index}
                          value={country.code}
                          className="rounded-full bg-richblack-900"
                        >
                          {country.code} - {country.country}
                        </option>
                      );
                    })}
                  </select>
                  {errors.countryCode && (
                    <span className="text-pink-300 text-start text-sm">
                      Please Select Country Code
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  className="bg-richblack-700  h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 w-full focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
                  placeholder="1234567890"
                  name="contactNumber"
                  id="contactNumber"
                  {...register("contactNumber", {
                    required: true,
                    validate: {
                      onlyNumbers: (value) => {
                        return (
                          /^\d+$/.test(value) || "Only Numbers are allowed"
                        );
                      },
                      lengthOfNumber: (value) => {
                        return (
                          (value.length >= 4 && value.length <= 13) ||
                          "Contact Number must be between 4 and 13 digits."
                        );
                      },
                    },
                  })}
                />
              </div>
              {errors.contactNumber && (
                <span className="text-pink-300 text-start text-sm">
                  {errors.contactNumber.message ||
                    "Please Enter Your Contact Number"}
                </span>
              )}
            </div>
            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="bg-richblack-700 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 w-full focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
                placeholder="Enter Your Message"
                cols={30}
                rows={5}
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-pink-300 text-start text-sm">
                  Please Enter Your Message
                </span>
              )}
            </div>
            <button
              className="bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-100 rounded-lg text-richblack-900 h-12 py-2 px-2.5 text-base"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUsForm;
