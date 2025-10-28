import { useEffect, useState } from "react";
import selectionCode from "../../../../data/countrycode.json";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../../../services/operations/profileOperations";
const ProfileInformationForm = () => {
  const { user } = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    additionalDetails: { dateOfBirth, gender, contactNumber, about },
  } = user;
  const separateCountryCodeAndNumber = contactNumber?.split(" ") ?  contactNumber?.split(" ") : contactNumber ;
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    reset,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? dateOfBirth : "",
      gender: gender ? gender : "",
      contactNumber: separateCountryCodeAndNumber[1]
        ? separateCountryCodeAndNumber[1]
        : null,
      about: about ? about : "",
    },
  });
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName,
        lastName,
        dateOfBirth: dateOfBirth ? dateOfBirth : "",
        gender: gender ? gender : "",
        contactNumber: contactNumber ? separateCountryCodeAndNumber[1] : null,
        about: about ? about : "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  const [countryCode, setCountryCode] = useState(
    separateCountryCodeAndNumber[0] ? separateCountryCodeAndNumber[0] : null
  );
  const GENDER_TYPE = [
    "Male",
    "Female",
    "Non-Binary",
    "Prefer not to say",
    "Other",
  ];
  const aboutValue = watch("about", "");
  const handleSubmitUserDetails = async (formData) => {
    dispatch(updateUserInfo(formData));
  };
  
  return (
    <form
      className="w-full flex flex-col items-end gap-5"
      onSubmit={handleSubmit(handleSubmitUserDetails)}
    >
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
              className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-md md:text-xl rounded-lg"
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
              className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-md md:text-xl rounded-lg"
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
              id="dob"
              type="date"
              className=" shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-md md:text-xl rounded-lg"
              {...register("dateOfBirth")}
            />
          </div>
          <div className="flex flex-col w-full gap-3">
            <label className="text-xl text-pure-greys-50" htmlFor="dob">
              Gender
            </label>
            <select
              className="shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-3 px-3 text-md md:text-xl rounded-lg"
              name="gender"
              id="gender"
              placeholder="select gender"
              {...register("gender")}
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
                  className="bg-richblack-700 text-md md:text-xl scrollbar-track-richblack-800 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)]  text-center text-semibold rounded-lg outline-none text-pure-greys-200 h-12 w-full"
                  name="countryCode"
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
                        {country.code}
                      </option>
                    );
                  })}
                </select>
              </div>
              <input
                type="text"
                className="bg-richblack-700  h-12 shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.3)] text-pure-greys-5 w-full text-md md:text-xl px-2 py-2.5 rounded-lg "
                placeholder="0123456789"
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
              placeholder="Write Something about yourself..."
              className=" shadow-[0px_0.9px_0.5px_0.2px_rgba(255,255,255,0.5)] bg-richblack-700 py-2 px-3 text-md md:text-xl rounded-lg"
              {...register("about", {
                maxLength: {
                  value: 100,
                  message: "Maximum 100 Characters are allowed",
                },
              })}
            />
            <span
              className={`${
                aboutValue?.length > 100
                  ? "text-pink-200"
                  : "text-richblack-500"
              } text-xs text-right`}
            >
              {aboutValue?.length}
              <span>/100</span>
            </span>
          </div>
        </div>
      </div>
      <button
        className="text-md md:text-xl bg-yellow-50 px-4 py-2 hover:bg-yellow-100 active:bg-yellow-100 rounded-lg text-richblack-900 h-12  font-semibold duration-100 transition-all ease-in-out"
        type="Submit"
      >
        Save
      </button>
    </form>
  );
};

export default ProfileInformationForm;
