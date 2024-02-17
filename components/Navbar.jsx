import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between pt-10 pb-8 px-36 text-sm">
      <ul className="flex gap-10">
        <li className="tracking-widest text-sm font-normal hover:cursor-pointer hover:text-orange-700">
          ABOUT
        </li>
        <li className="tracking-widest text-sm font-normal hover:cursor-pointer hover:text-orange-700">
          SERVICES
        </li>
        <li className="tracking-widest text-sm font-normal hover:cursor-pointer hover:text-orange-700">
          EVENTS
        </li>
      </ul>

      <div className="flex flex-col justify-center items-center hover:cursor-pointer">
        <p className="text-3xl tracking-wide font-normal">24 CARROTS</p>
        <h5 className="text-gray-400 text-xs tracking-widest">
          CATERING AND EVENTS
        </h5>
      </div>

      <ul className="flex gap-10 tracking-wider items-center">
        <li className="tracking-widest text-sm font-normal hover:cursor-pointer hover:text-orange-700">
          VENUES
        </li>
        <li className="tracking-widest text-sm font-normal hover:cursor-pointer hover:text-orange-700">
          CAREERS
        </li>
        <li>
          <button className="tracking-wide text-sm font-normal text-white bg-orange-700 rounded-2xl px-4 py-1 hover:cursor-pointer hover:bg-orange-600">
            GET IN TOUCH
          </button>
        </li>
      </ul>
    </div>
  );
}
