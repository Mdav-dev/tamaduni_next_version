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
    try {
      await login(data.email, data.password);
      if (!error && user) {
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
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
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <label>Password</label>
            <input
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              className="rounded-md p-2 border border-gray-200"
              {...register("password", { required: "Password is required", minLength: 6 })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

            <button className="bg-black text-white rounded-md p-2" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
