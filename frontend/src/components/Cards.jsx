import React from "react";

function cards({ item }) {
  return (
    <>
      <div className="my-8">
        <div className="card bg-navTheme w-[350px] h-[500px] md:w-[380px] shadow-xl md:h-[500px] mx-auto max-w-lg hover:scale-105 duration-200 dark:bg-green-500 border border-white dark:border-none">
          <figure >
            <img src={item.image_link}/>
          </figure>
          <div className="card-body h-1/3">
            <h2 className="card-title text-white">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p >{item.desc}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-white hover:border-white duration-300 hover:text-black cursor-pointer">Buy</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cards;
