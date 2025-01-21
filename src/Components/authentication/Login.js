"use client";
import Link from "next/link";
import React, { useState } from "react";
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
    formState: { errors },
  } = useForm();
  const { login, loading, error } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      toast.success("Login successful!");
      router.push("/");
    } catch {
      toast.error(error || "Invalid credentials. Please try again.");
    }
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
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Password"
                className="rounded-md p-2 border border-gray-200 w-full"
                {...register("password", { required: "Password is required", minLength: 6 })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="bg-black text-white rounded-md p-2" type="submit" disabled={loading || Object.keys(errors).length > 0}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="flex space-x-4 mt-4">
            <button className="flex items-center bg-blue-600 text-white p-2 rounded-md">
              <FaFacebookF className="mr-2" /> Login with Facebook
            </button>
            <button className="flex items-center bg-red-500 text-white p-2 rounded-md">
              <FaGoogle className="mr-2" /> Login with Google
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
