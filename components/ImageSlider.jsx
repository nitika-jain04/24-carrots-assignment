import React from "react";

export default function ImageSlider() {
  return (
    <div className="pl-20 mt-20 overflow-x-auto flex gap-10">
      <img
        src="/image1.jpeg"
        className="w-[600px] h-[650px] bg-orange-600 hover:opacity-50 group-hover:opacity-75 transition-opacity group-hover:bg-orange-500"
      />
      <img
        src="/image2.jpeg"
        className="w-[600px] h-[650px] bg-orange-600 hover:opacity-50 group-hover:opacity-75 transition-opacity group-hover:bg-orange-500"
      />
      <img
        src="/image3.jpeg"
        className="w-[600px] h-[650px] bg-orange-600 hover:opacity-50 group-hover:opacity-75 transition-opacity group-hover:bg-orange-500"
      />
      <img
        src="/image4.png"
        className="w-[600px] bg-orange-600 hover:opacity-50 group-hover:opacity-75 transition-opacity group-hover:bg-orange-500"
      />
      <img
        src="/image5.jpeg"
        className="w-[600px] h-[650px] bg-orange-600 hover:opacity-50 group-hover:opacity-75 transition-opacity group-hover:bg-orange-500"
      />
      <img
        src="/image6.jpeg"
        className="w-[600px] h-[650px] bg-orange-600 hover:opacity-50 group-hover:opacity-75 transition-opacity group-hover:bg-orange-500"
      />
      <img
        src="/image7.jpeg"
        className="w-[600px] h-[650px] bg-orange-600 hover:opacity-50 group-hover:opacity-75 transition-opacity group-hover:bg-orange-500"
      />
    </div>
  );
}
