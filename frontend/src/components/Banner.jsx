import React from "react";
import bannerImg from "../../public/banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row mt-12 bg-darkTheme dark:bg-white ">
        <div className="w-full md:w-1/2 mt-12 md:mt-40">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold text-white dark:text-black">
              Hello, welcomes here to learn something{" "}
              <span className="text-green-500">new everyday!!!</span>
            </h1>
            <p className="text-sm text-white md:text-xl dark:text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quidem obcaecati amet necessitatibus architecto magnam aperiam vel
              vitae hic at natus voluptas, esse facere error.
            </p>
            <label className="border rounded-md p-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow bg-transparent outline-none text-white-500" placeholder="Email" />
            </label>
          </div>
            <button className="mt-6 btn btn-primary">Primary</button>
        </div>
        <div className="w-full md:w-1/2">
            <img src={bannerImg} className="md:w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
