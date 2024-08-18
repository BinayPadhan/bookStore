import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Login";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  // const apiUrl = process.env.REACT_APP_API_URL;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:4000/user/signup`, data);

      if (response.status === 201) {
        toast.success('User successfully registered!!');

        const { _id, name, email } = response.data.createdUser;
        localStorage.setItem('Users', JSON.stringify({ _id, name, email }));
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.error('Username already exists!!', {
          position: "top-right",
          transition: Flip,
        });
      } else {
        toast.error('An error occurred during registration. Please try again.');
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box bg-navTheme dark:bg-white mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <label
                  htmlFor="name"
                  className="block text-white dark:text-black font-xl"
                >
                  Name:
                </label>
                <input
                  type="text" // Corrected from 'email' to 'text'
                  id="name"
                  name="name"
                  className="w-full py-2 px-3 border text-white dark:text-black bg-transparent border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <label
                  htmlFor="email"
                  className="block text-white dark:text-black font-xl"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-2 px-3 border text-white dark:text-black bg-transparent border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <label
                  htmlFor="password"
                  className="block text-white dark:text-black font-xl"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full py-2 px-3 border text-white dark:text-black bg-transparent border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Signup Button */}
              <div className="flex justify-around mt-4">
                <button className="w-full bg-indigo-500 dark:bg-green-500 text-white py-3 rounded-lg hover:bg-indigo-600 dark:hover:bg-green-600 transition duration-300">
                  Signup
                </button>
              </div>
            </form>

            {/* Redirect to Login */}
            <p className="text-md mt-4">
              Already have an account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
