"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import LeftImage from "./LeftImage";
import { useForm } from "react-hook-form";
import axios from "axios";
import { base_url } from "@/hooks/urls";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(base_url + "user/signup", data);
      toast.success("Account created successfully. Please login to continue");
      router.push("/auth/login");
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setLoading(false);
    }
  };
  return (
    <div className="h-screen w-full flex ">
      <LeftImage />
      <section className="w-full md:w-1/2 flex flex-col space-y-4 justify-center items-center">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <section className="w-full md:w-3/4 pt-4">
          <form
            className="flex flex-col space-y-2 border border-gray-200 p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="rounded-md p-2 border border-gray-200"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <input
              type="text"
              placeholder="First Name"
              className="rounded-md p-2 border border-gray-200"
              {...register("firstName", {
                required: "First Name is required",
              })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-md p-2 border border-gray-200"
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Password"
              className="rounded-md p-2 border border-gray-200"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-md p-2 border border-gray-200"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" {...register("remember")} />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button
              className={`${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white"
              } text-white rounded-md p-2`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>

            {error && <span className="text-red-500 text-sm">{error}</span>}
            <Link className="underline" href="/auth/login" passHref>
              Have an account?
            </Link>
          </form>
        </section>
        {/* <section className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-xl">Or Log in with</h1>
          <section className="flex flex-col space-y-2">
            <button className="flex items-center justify-center  rounded-md py-2 px-4 hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500 mr-2" size={20} />{" "}
              <span className="font-medium text-gray-700">Google</span>
            </button>

            <button className="flex items-center justify-center  rounded-md py-2 px-4 hover:bg-gray-100 transition">
              <FaFacebookF className="text-blue-600 mr-2" size={20} />{" "}
              <span className="font-medium text-gray-700">Facebook</span>
            </button>

            <p className="text-gray-600">
              Have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </section>
        </section> */}
      </section>
    </div>
  );
};

export default Signup;
