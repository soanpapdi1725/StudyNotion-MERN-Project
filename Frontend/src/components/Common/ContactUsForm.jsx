import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import selectionCode from "../../data/countrycode.json";
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const submitContactForm = () => {};
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
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-4">
          {/* FirstName & LastName */}
          <div className="flex flex-col gap-3">
            {/* FirstName */}
            <label htmlFor="firstName">First Name</label>
            <input
              className="bg-richblack-700 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>Please Enter Your First Name</span>}
          </div>
          <div className="flex flex-col gap-3">
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
        <div className="flex flex-col gap-3">
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
          {errors.firstName && <span>Please Enter Your Email</span>}
        </div>
        {/* Country Code and Phone Number */}
        <div className="flex flex-col gap-4">
          <label htmlFor="countryCode">Phone Number</label>
          <div className="flex flex-row gap-5 w-full">
            <div className="w-24">
              <select
                className="bg-richblack-800  scrollbar-track-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]  text-center text-semibold rounded-lg outline-none text-pure-greys-200 h-12 w-full"
                id="countryCode"
                value={countryCode}
                onChange={(event) => {
                  setCountryCode(event.target.value);
                }}
              >
                <option className="bg-black" value="+91">
                  +91 - India
                </option>
                {selectionCode.map((country, index) => {
                  return (
                    <option key={index} value={country.code}>
                      {country.code} - {country.country}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="text"
              className="bg-richblack-800 h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 w-full focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
              placeholder="1234567890"
              name="contactNumber"
              id="contactNumber"
              {...register("contactNumber", { required: true })}
            />
            {errors.contactNumber && (
              <span>Please Enter Your Contact Number</span>
            )}
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col gap-4">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="bg-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 w-full focus:border-none focus:outline-none border-none text-lg px-2 py-2.5 rounded-lg "
            placeholder="Enter Your Message"
            cols={30}
            rows={5}
            {...register("message", { required: true })}
          />
          {errors.message && <span>Please Enter Your Message</span>}
        </div>
        <button
          className="bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-100 rounded-lg text-richblack-900 h-12 py-2 px-2.5 text-base"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
