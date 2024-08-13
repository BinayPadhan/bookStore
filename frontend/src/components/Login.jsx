import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dialogRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        data
      );

      if (response.status === 200) {
        setTimeout(() => {
          toast.success("Login successful ✅");
          const { _id, name, email } = response.data.user; // Adjust to match your response structure
          console.log(response.data.user);
          login({ _id, name, email });
          dialogRef.current.close();
        }, 1000);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("Login failed ✖");
      }
    }
  };

  return (
    <>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box bg-navTheme dark:bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              aria-label="Close"
              onClick={() => dialogRef.current.close()}
            >
              ✕
            </button>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white dark:text-black font-xl mb-2"
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
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-white dark:text-black font-xl mb-2"
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
            <button
              type="submit"
              className="w-full bg-indigo-500 dark:bg-green-500 text-white py-3 rounded-lg hover:bg-indigo-600 dark:hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-4">
            <span className="text-white dark:text-black">
              Don't have an account?{" "}
            </span>
            <Link
              to="/signup"
              className="text-indigo-500 hover:text-indigo-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
