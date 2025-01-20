"use client";
import React, { useState, useEffect } from "react";
import LeftImage from "./LeftImage";

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(90);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleChange = (value, index) => {
    if (!isNaN(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP entered:", otp.join(""));
    setIsTimerRunning(true);
  };

  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const handleResendOTP = () => {
    setOtp(["", "", "", ""]);
    setTimeLeft(90);
    setIsTimerRunning(true);
    console.log("Resending OTP...");
  };

  return (
    <div className="h-screen w-full flex">
      <LeftImage />
      <section className="w-full md:w-1/2 h-screen  flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl mb-4">Enter OTP</h1>
        <p className="mb-6 text-center w-1/2 text-gray-600">
          Enter the OTP sent to +254725374976
        </p>
        <form onSubmit={handleSubmit} className="flex space-x-4 mb-6">
          {otp.map((num, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={num}
              id={`otp-input-${index}`}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg shadow focus:outline-none focus:border-blue-500"
            />
          ))}
        </form>
        <button
          onClick={handleSubmit}
          className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>

        <p className="mt-4 text-gray-600">
          {timeLeft > 0
            ? `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`
            : "Time's up!"}
        </p>

        {timeLeft === 0 && (
          <p className="mt-4 text-red-600">OTP has expired, please resend.</p>
        )}

        <p className="mt-4 text-gray-600">Didn&apos;t receive the OTP? </p>
        <button
          className="text-blue-600 font-semibold hover:underline"
          onClick={handleResendOTP}
          disabled={timeLeft > 0}
        >
          Resend OTP
        </button>
      </section>
    </div>
  );
};

export default OTPPage;
