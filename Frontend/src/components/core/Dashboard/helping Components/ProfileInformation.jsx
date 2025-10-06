import { useState } from "react";
import selectionCode from "../../../../data/countrycode.json";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
const ProfileInformation = ({ setLoading }) => {
  const { user } = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const { firstName, lastName, additionalDetails } = user;
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    reset,
    handleSubmit,
  } = useForm();
  const [countryCode, setCountryCode] = useState("+91");
  const GENDER_TYPE = [
    "Male",
    "Female",
    "Non-Binary",
    "Prefer not to say",
    "Other",
  ];

  const handleSubmitUserDetails = (formData) => {};
  return (
    <form className="w-full" onSubmit={handleSubmit(handleSubmitUserDetails)}>
      <div className="grid grid-cols-1 w-full gap-7">
        {/* first name LastName*/}
        <div className="flex flex-col sm:flex-row w-full gap-7">
          {/* firstName */}
          <div className="flex flex-col w-full gap-3">
            <label className="text-xl text-pure-greys-50" htmlFor="firstName">
              First Name <span className="text-pink-300">*</span>
            </label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={firstName}
              className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-xl rounded-lg"
              {...register("firstName", {
                required: "Please Enter FirstName",
                validate: {
                  minimumName: (value) => {
                    return (
                      value.length >= 2 ||
                      "First Name should be atleast 2 Characters"
                    );
                  },
                  onlyAlphabets: (value) => {
                    return (
                      /^[A-Za-z]+$/.test(value) ||
                      "First Name Should be in Alphabets"
                    );
                  },
                },
              })}
            />
            {errors.firstName && (
              <span className="text-pink-200 text-sm text-start">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-3">
            <label className="text-xl text-pure-greys-50" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-xl rounded-lg"
              {...register("lastName")}
            />
          </div>
        </div>

        {/* DOB Gender */}
        <div className="flex flex-col w-full sm:flex-row gap-7">
          <div className="flex flex-col w-full gap-3">
            <label className="text-xl text-pure-greys-50" htmlFor="dob">
              Date of Birth
            </label>
            <input
              name="dateOfBirth"
              value={additionalDetails.dateOfBirth}
              id="dob"
              type="date"
              className=" shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-xl rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full gap-3">
            <label className="text-xl text-pure-greys-50" htmlFor="dob">
              Gender
            </label>
            <select
              className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-xl rounded-lg"
              name="gender"
              id="gender"
              {...register("gender", {})}
            >
              {GENDER_TYPE.map((gender, index) => {
                return <option key={index}>{gender}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full sm:flex-row gap-7">
          <div className="flex flex-col w-full gap-3">
            <label
              className="text-xl text-pure-greys-50"
              htmlFor="contactNumber"
            >
              Contact Number
            </label>
            <div className="flex flex-row gap-5">
              <div className="w-24">
                <select
                  className="bg-richblack-700  scrollbar-track-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]  text-center text-semibold rounded-lg outline-none text-pure-greys-200 h-12 w-full"
                  id="countryCode"
                  {...register("countryCode", {
                    value: countryCode,
                    onChange: (event) => {
                      setCountryCode(event.target.value);
                    },
                  })}
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
              </div>
              <input
                type="text"
                className="bg-richblack-700  h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 w-full text-lg px-2 py-2.5 rounded-lg "
                placeholder="Enter Contact Number"
                name="contactNumber"
                id="contactNumber"
                {...register("contactNumber", {
                  validate: {
                    onlyNumbers: (value) => {
                      return /^\d+$/.test(value) || "Only Numbers are allowed";
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
              <span className="text-pink-200 text-sm text-start">
                {errors.contactNumber.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-3">
            <label className="text-xl text-pure-greys-50" htmlFor="dob">
              About
            </label>
            <textarea
              name="about"
              rows={1}
              type="text"
              className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-2 px-3 text-xl rounded-lg"
              {...register("about", {
                
              })}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileInformation;
