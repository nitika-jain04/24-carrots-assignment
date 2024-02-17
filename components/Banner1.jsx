import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Banner1() {
  return (
    <div className="mt-40 flex flex-col gap-8 relative mb-[420px]">
      <img className="w-full" src="/banner.png" alt="" />

      <div className="flex flex-col justify-center gap-10 items-center absolute top-96 bg-white rounded-t-full pt-36 left-[400px]">
        <h3 className="text-gray-500 text-lg tracking-wider">VENUES</h3>
        <h2 className="text-green-950 text-7xl text-center">
          Unforgettable<br></br> Venues
        </h2>
        <p className="text-center text-base leading-6 text-green-900 font-light">
          24 Carrots is the exclusive or preferred caterer at Southern
          California’s most<br></br> spectacular properties. From intimate
          understated spaces to large and luxurious,<br></br> we’ll help you
          find the event venue that makes your heart skip a beat.
        </p>
        <button
          className="flex gap-2 items-center rounded-3xl px-7 py-2 text-white bg-orange-600 w-fit mx-auto lg:mx-0 hover:bg-orange-600"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-sm">EXPLORE VENUES</p>
          <BsArrowRight
            size={20}
            style={{
              transform: isHovered ? "translateX(5px)" : "translateX(0)",
            }}
            className="transition-all duration-100"
          />
        </button>
      </div>
    </div>
  );
}
