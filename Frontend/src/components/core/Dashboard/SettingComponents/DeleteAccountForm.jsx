import React from "react";

const DeleteAccountComponent = () => {
  return (
    <div className="flex flex-row gap-4  w-full py-10 px-8 rounded-lg bg-pink-800 border-[1px] border-pink-700">
      <div className="flex flex-col gap-4">
        <h1 className="sm:text-2xl text-xl text-left md:text-left font-bold">
          Delete Your Account
        </h1>
        <div className="text-pink-100">
          <p>Would you like to delete account?</p>
          <p className="italic">
            This account may contain Paid Courses. Deleting your account is
            permanent and will remove all the contain associated with it.
          </p>
        </div>

        <button type="button" className="cursor-pointer py-2 px-4 border-[1px] border-richblack-100 text-richblack-50 self-center rounded-lg bg-pink-300">
          Yes, I want to delete my account.
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountComponent;
