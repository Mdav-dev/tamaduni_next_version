import React from "react";
import LeftImage from "./LeftImage";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="h-screen w-full flex ">
      <LeftImage />
      <section className="w-full md:w-1/2 flex flex-col space-y-4 justify-center items-center ">
        <h1 className="font-bold text-xl">Forgot Password?</h1>
        <p className="w-1/2 text-center">
          Don&#39;t worry, it happens! Please enter the phone number and
          we&#39;ll send the OTP there
        </p>
        <form className="flex flex-col space-y-4 border border-gray-200 p-4">
          <label>Phone No.</label>
          <input
            type="phone"
            placeholder="+254..."
            className="rounded-md p-2 border border-gray-200"
          />
          <Link
            href="/auth/forgotpassword/otp"
            className="w-full text-center bg-black text-white rounded-md py-2 px-4 hover:bg-gray-800 transition"
          >
            Continue
          </Link>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword;
