import React from "react";

function Contact() {
  return (
    <div className="py-[180px]">
      <div class=" mx-auto relative overflow-hidden w-[95%] md:w-1/2  z-10 bg-navTheme dark:bg-white p-8 rounded-lg shadow-md border">
        <h2 class="text-2xl font-bold text-white dark:text-black">Conatct Us</h2>

        <form method="post" action="#">
          <div class="my-4 ">
            <label class="block text-sm font-medium text-white dark:text-black" for="name">
              Full Name
            </label>
            <input
              class="mt-1 p-2 w-full bg-transparent border border-gray-600 rounded-md text-white dark:text-black outline-none"
              type="text"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-white dark:text-black" for="email">
              Email Address
            </label>
            <input
              class="mt-1 p-2 w-full bg-transparent border border-gray-600 rounded-md text-white dark:text-black outline-none"
              name="email"
              id="email"
              type="email"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-white dark:text-black" for="bio">
              Message
            </label>
            <textarea
              class="mt-1 p-2 w-full bg-transparent border border-gray-600 rounded-md text-white dark:text-black outline-none"
              rows="3"
              name="bio"
              id="bio"
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              class="bg-indigo-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
