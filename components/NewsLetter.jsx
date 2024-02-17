import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function NewsLetter() {
  return (
    <div className="flex">
      <div className="w-1/2 bg-gradient-to-r from-orange-600 to-orange-700 px-28 py-28 flex flex-col gap-8">
        <h2 className="text-white text-[55px]">Endless Inspiration</h2>
        <p className="text-white text-lg tracking-tight">
          Sign up to our newsletter for fresh updates, encouragement,<br></br>{" "}
          and exclusive insights.
        </p>
        <div className="flex gap-5 items-center">
          <input
            className="w-80 py-3 px-4 text-orange-700 rounded-3xl placeholder-orange-600 placeholder:text-lg placeholder:tracking-wide"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
          />
          <button
            className="flex gap-2 items-center rounded-3xl px-7 py-2 text-white bg-orange-600 w-fit mx-auto lg:mx-0 hover:bg-orange-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className="text-sm">GET IN TOUCH</p>
            <BsArrowRight
              size={20}
              style={{
                transform: isHovered ? "translateX(5px)" : "translateX(0)",
              }}
              className="transition-all duration-100"
            />
          </button>
        </div>
        <p className="text-white text-xs">
          By clicking Sign Up you’re confirming that you agree with our Terms
          and Conditions.
        </p>
      </div>

      <img className="w-1/2" src="/food.png" alt="" />
    </div>
  );
}
