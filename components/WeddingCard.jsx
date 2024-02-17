import React from "react";

export default function WeddingCard({ heading, subheading, img }) {
  return (
    <div className="flex gap-10">
      <div className="w-1/2">
        <img className="rounded-t-full" src={img} alt="" />
      </div>

      <div className="w-1/2">
        <div>
          <h1>Making Every Experience Magical</h1>
        </div>

        <div>
          <div>
            <h4>{heading}</h4>
            <h3>{subheading}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
