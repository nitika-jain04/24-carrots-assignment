import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function TestiCard({
  currentIndex,
  onClick,
  image,
  description,
  designation,
  username,
}) {
  return (
    <div className="flex gap-10 mt-20 mb-10 scroll-smooth">
      <img
        className="h-[430px] w-1/2 object-cover rounded-xl"
        src={image}
        alt=""
      />

      <div className="flex flex-col gap-10 text-white w-1/2 mt-20 h-fit">
        <p className="text-2xl tracking-wide">"{description}"</p>
        <div className="flex flex-col">
          <h2 className="text-xl tracking-wider">{username}</h2>
          <h2 className="text-green-600">{designation}</h2>
        </div>

        <div className="flex gap-2 mt-5 items-center">
          {[0, 1, 2, 3].map((index) => (
            <p
              key={index}
              className={`${
                currentIndex == index ? "text-white" : "text-gray-400"
              }  font-bold`}
            >
              ______
            </p>
          ))}

          <button className="flex gap-2 items-center ml-20" onClick={onClick}>
            <p>NEXT TESTIMONIAL</p>
            <BsArrowRight
              size={40}
              className="border-2 border-white rounded-full px-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
