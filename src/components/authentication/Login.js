"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import LeftImage from "./LeftImage";
import { useForm } from "react-hook-form";
import useAuth from "@/Components/authentication/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { login, loading, error, user } = useAuth();

  const router = useRouter();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
    console.log("user", user);
    console.log("error", error);
    if (!error && user) {
      router.push("/");
    } else {
      console.error("Login failed:", error);
    }
  };

  const fillTestCredentials = () => {
    setValue("email", "test@user.com"); // Set the test email
    setValue("password", "Qwerty1234."); // Set the test password
  };
  return (
    <div className="h-screen w-full flex">
      <LeftImage />
      <section className="w-full md:w-1/2 flex flex-col space-y-4 justify-center items-center">
        <h1 className="font-bold text-xl">Log In</h1>
        <section className="w-1/2 md:w-3/4 pt-4">
          <form
            className="flex flex-col space-y-2 border border-gray-200 p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>Email</label>
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
            <label>Password</label>
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
            <button
              className={`${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white"
              } text-white rounded-md p-2`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            <button
              type="button"
              onClick={fillTestCredentials}
              className="w-full bg-gray-200 text-black rounded-md py-2 px-4 hover:bg-gray-300 transition"
            >
              Use Test Credentials
            </button>

            <p className="text-red-500 text-sm">{error}</p>
            <Link className="underline" href="/auth/forgotpassword">
              Forgot Password?
            </Link>
          </form>
        </section>
        <section className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-xl">Or Log in with</h1>
          <section className="flex flex-col space-y-2">
            <button className="flex items-center justify-center rounded-md py-2 px-4 hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500 mr-2" size={20} />{" "}
              <span className="font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center rounded-md py-2 px-4 hover:bg-gray-100 transition">
              <FaFacebookF className="text-blue-600 mr-2" size={20} />{" "}
              <span className="font-medium text-gray-700">Facebook</span>
            </button>
            <p className="text-gray-600">
              Don&#39;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Login;
