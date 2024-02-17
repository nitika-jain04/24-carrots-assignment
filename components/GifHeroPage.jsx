import React from "react";

export default function GifHeroPage() {
  return (
    <div className="px-52 flex gap-10 mt-40 mb-40">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h4>Gourmet Catering</h4>
          <p>
            Our professionally-trained culinary<br></br> team is passionate and
            proud of our<br></br> diverse and thoughtful menu, always
            <br></br>
            cooking up something that aligns with<br></br> your great taste.
          </p>
          <button className="flex gap-2 items-center bg-orange-700 rounded-full text-white px-5 py-2 text-base">
            <p>EXPLORE SERVICES</p>
            <BsArrowRight size={20} />
          </button>
        </div>

        <div>
          <h4>Bar Service</h4>
          <p>
            Our sophisticated flavor expertise<br></br> enables us to create
            inventive<br></br> concoctions that generate buzz in<br></br> more
            ways than one!
          </p>
          <button className="flex gap-2 items-center bg-orange-700 rounded-full text-white px-5 py-2 text-base">
            <p>EXPLORE SERVICES</p>
            <BsArrowRight size={20} />
          </button>
        </div>
      </div>

      <img className="w-1/3 rounded-t-full" src="/image-gif.gif" alt="" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h4>Staffing</h4>
          <p>
            The hand-selected team at 24 Carrots are just<br></br> as important
            to our reputation as our gourmet<br></br> food. Our staff is
            certainly the best at what<br></br> they do, and you’ll work with
            professionals<br></br> who genuinely care about the success of
            <br></br> your event!
          </p>
          <button className="flex gap-2 items-center bg-orange-700 rounded-full text-white px-5 py-2 text-base">
            <p>EXPLORE SERVICES</p>
            <BsArrowRight size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Event Production</h4>
          <p>
            If mind-blowing spectacles and immersive<br></br> guest experiences
            are what you’re after, the<br></br> specialists at 24 Carrots can
            pull it off on an<br></br> epic scale!
          </p>
          <button className="flex gap-2 items-center bg-orange-700 rounded-full text-white px-5 py-2 text-base">
            <p>EXPLORE SERVICES</p>
            <BsArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
