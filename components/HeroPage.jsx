"use client";

import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { BsPinterest } from "react-icons/bs";
import { InstagramEmbed } from "react-social-media-embed";
import { imagesData, testimonialsData, weddingData } from "@/data";
import WeddingCard from "./WeddingCard";
import TestiCard from "./TestiCard";
import ImagesCard from "./Images";
import NewsLetter from "./NewsLetter";
import ImageSlider from "./ImageSlider";
import Services from "./Services";
import Banner1 from "./Banner1";

export default function HeroPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextButtonClick = () => {
    const nextIndex = (currentIndex + 1) % testimonialsData.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      <div className="relative">
        <video
          src="/24carrtos-home-video.mp4"
          autoPlay={true}
          loop
          muted
        ></video>
        <p className="absolute top-1/3 left-1/4 text-center text-8xl text-white">
          Simply the Finest
        </p>
      </div>
      <div className="mt-40 mb-40 flex justify-between text-center">
        <div className="flex flex-col gap-10 w-1/2 justify-center items-center">
          <p className="text-green-800 text-xl">WELCOME TO 24 CARROTS</p>
          <p className="text-8xl tracking-tighter text-green-900">
            Remarkable Catering & Events
          </p>
          <p className="text-green-950 leading-7 font-light">
            24 Carrots is the premier catering and events company of<br></br>
            choice in Southern California. We create remarkable<br></br>{" "}
            experiences by offering the finest quality foods and providing
            <br></br>
            unsurpassed personalized service, driven by our passion for<br></br>{" "}
            life’s special occasions.
          </p>
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

        <div className="w-1/2">
          <img
            className="h-full rounded-tl-[250px]"
            src="/catering.jpg"
            alt=""
          />
          <div className="flex gap-2 justify-center">
            <div className="text-orange-700 font-bold">____</div>
            <div className="text-green-900 font-bold">____</div>
            <div className="text-green-900 font-bold">____</div>
            <div className="text-green-900 font-bold">____</div>
          </div>
        </div>
      </div>
      {/* <div className="px-36 flex flex-col gap-10">
        {weddingData.map((data) => {
          return <WeddingCard />;
        })}
      </div> */}

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

      <ImageSlider />

      <div className="flex flex-col gap-10 justify-center items-center mt-40 mb-20">
        <h2 className="text-7xl tracking-wide text-green-900">
          Far More Than<br></br> Just Business
        </h2>
        <p className="text-center text-base text-green-900 leading-6 font-light tracking-wide">
          The way you do anything is the way you do everything. We haven’t
          cracked the code on catering; we simply<br></br> care unreasonably
          about every aspect of what we do. We care about people as much as we
          care about<br></br> details, and we absolutely refuse to compromise on
          making your day anything but the best. We’ve got your<br></br> back
          from the initial idea to the final farewell!
        </p>
      </div>
      <div className="mt-36 mb-36">
        <iframe
          title=""
          className="w-full px-40 border-none"
          src="https://www.youtube.com/embed/7gPP9hsV4a0?enablejsapi=1&autoplay=0&cc_load_policy=0&iv_load_policy=1&loop=0&modestbranding=1&fs=1&playsinline=0&controls=1&color=red&cc_lang_pref=&rel=0&autohide=2&theme=dark&%22"
          height={600}
          width={300}
        ></iframe>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center mt-20 mb-20">
        <h2 className="text-7xl tracking-wide text-green-900">
          Great Food & A<br></br> Whole Lot More
        </h2>
        <p className="text-center text-base text-green-900 font-light tracking-wide leading-6">
          Catering is just the beginning. Sure, we love astonishing your guests
          with attentive service, thoughtful food, and<br></br> an inviting
          environment. But what really matters most is helping you create
          memories that will last for a lifetime.<br></br> Our industry experts
          think of all the little things that turn an ordinary event into an
          unforgettable experience.
        </p>
        <button
          className="flex gap-2 items-center rounded-3xl px-7 py-2 text-white bg-orange-600 w-fit mx-auto lg:mx-0 hover:bg-orange-600"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-sm">EXPLORE SERVICES</p>
          <BsArrowRight
            size={20}
            style={{
              transform: isHovered ? "translateX(5px)" : "translateX(0)",
            }}
            className="transition-all duration-100"
          />
        </button>
      </div>

      <div className="px-44 pr-24 flex gap-14 mt-40 mb-40">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-3xl text-green-900">Gourmet Catering</h4>
            <p className="text-green-900 text-base font-light">
              Our professionally-trained culinary<br></br> team is passionate
              and proud of our<br></br> diverse and thoughtful menu, always
              <br></br>
              cooking up something that aligns with<br></br> your great taste.
            </p>
            <button
              className="flex gap-2 items-center rounded-3xl px-7 py-2 text-orange-600 border border-orange-600 w-fit mx-auto lg:mx-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-sm">LEARN MORE</p>
              <BsArrowRight
                size={20}
                style={{
                  transform: isHovered ? "translateX(5px)" : "translateX(0)",
                }}
                className="transition-all duration-100"
              />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-3xl text-green-900">Bar Service</h4>
            <p className="text-green-900 text-base font-light">
              Our professionally-trained culinary<br></br>Our sophisticated
              flavor expertise<br></br> enables us to create inventive<br></br>{" "}
              concoctions that generate buzz in<br></br> more ways than one!
            </p>
            <button
              className="flex gap-2 items-center rounded-3xl px-7 py-2 text-orange-600 border border-orange-600 w-fit mx-auto lg:mx-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-sm">LEARN MORE</p>
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

        <img className="w-1/3 rounded-t-full" src="/image-gif.gif" alt="" />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-3xl text-green-900">Staffing</h4>
            <p className="text-green-900 text-base font-light">
              The hand-selected team at 24 Carrots are just<br></br> as
              important to our reputation as our gourmet<br></br> food. Our
              staff is certainly the best at what<br></br> they do, and you’ll
              work with professionals<br></br> who genuinely care about the
              success of
              <br></br> your event!
            </p>
            <button
              className="flex gap-2 items-center rounded-3xl px-7 py-2 text-orange-600 border border-orange-600 w-fit mx-auto lg:mx-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-sm">LEARN MORE</p>
              <BsArrowRight
                size={20}
                style={{
                  transform: isHovered ? "translateX(5px)" : "translateX(0)",
                }}
                className="transition-all duration-100"
              />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-3xl text-green-900">Event Production</h4>
            <p className="text-green-900 text-base font-light">
              If mind-blowing spectacles and immersive<br></br> guest
              experiences are what you’re after, the<br></br> specialists at 24
              Carrots can pull it off on an<br></br> epic scale!
            </p>
            <button
              className="flex gap-2 items-center rounded-3xl px-7 py-2 text-orange-600 border border-orange-600 w-fit mx-auto lg:mx-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="text-sm">LEARN MORE</p>
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
      </div>

      <div className="bg-green-900 flex flex-col justify-center pb-80 relative">
        <img
          src="/24-logo.png"
          alt=""
          className="absolute left-[600px] -top-20"
        />

        <h2 className="mt-36 text-6xl text-white text-center">
          Our Happy Clients
        </h2>
        <p className="text-lg text-green-600 text-center mt-10">
          Food may be our love language, but words of affirmation always make us
          ecstatic!<br></br> Read what our happy clients have to say about how
          we made their day great.
        </p>

        <div className="mx-40 flex">
          <TestiCard
            currentIndex
            onClick={handleNextButtonClick}
            image={testimonialsData[currentIndex].image}
            description={testimonialsData[currentIndex].description}
            designation={testimonialsData[currentIndex].designation}
            username={testimonialsData[currentIndex].name}
          />
        </div>
      </div>
      <div className="px-40 -mt-80 z-50 flex flex-col">
        <h2 className="text-5xl text-center m-20 text-black z-50">
          What's Cookin'
        </h2>
        <div className="flex gap-10">
          <div className="w-2/3 flex flex-col gap-3 z-50">
            <img
              className="h-1/3 w-full object-cover"
              src="/cooking1.jpg"
              alt=""
            />
            <h3 className="bg-orange-700 w-fit text-white rounded-3xl px-3 text-sm">
              <p className="tracking-wider">24 CARROTS CATERING</p>
              <p className="tracking-wider text-sm">CATERING</p>
            </h3>

            <h2 className="text-3xl mt-5 text-green-900 tracking-tight">
              Setting Your Holiday Table
            </h2>
            <p className="text-green-950 font-light text-base tracking-wider leading-7">
              From the first inquiry to final details, we are proud to provide
              full-service catering,<br></br> making you feel like a guest at
              your own event…
            </p>
          </div>

          <div className="w-1/3 flex flex-col gap-3">
            <img className="z-50" src="/cooking2.jpg" alt="" />
            <h3 className="bg-green-900 w-fit text-white rounded-3xl px-3 text-sm">
              <p className="tracking-wider">24 CARROTS CATERING</p>
              <p className="tracking-wider text-sm">FEATURED VENUES</p>
            </h3>
            <h2 className="text-3xl mt-5 text-green-900 tracking-tight">
              The BEST Venues for Big Holiday Bashes
            </h2>
            <p className="text-green-950 font-light text-base tracking-wider leading-7">
              Make the most the holiday season by thinking BIG!<br></br> Invite
              everyone from friends family, clients and the<br></br> entire
              company to join in on the fun…
            </p>
          </div>
        </div>

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
      <div className="mt-60 mb-60 px-36">
        <div className="flex justify-center transform rotate-180">
          <img className="" src="arrow.gif" alt="" />
        </div>

        <div className="flex">
          <div className="text-green-900 flex flex-col gap-5">
            <h2 className="text-8xl">
              Experiences<br></br> Desinged To Be<br></br> Shared
            </h2>
            <h3 className="font-light">Follow us for more from 24 Carrots.</h3>
            <div className="flex items-center gap-5 mt-20">
              <div className="flex gap-3 items-center text-green-950">
                <LuInstagram size={20} />
                <h1 className="tracking-wide text-base">INSTAGRAM</h1>
              </div>
              <div className="flex gap-3 items-center text-green-950">
                <BsPinterest size={20} />
                <h1 className="tracking-wide text-base">PINTEREST</h1>
              </div>
            </div>
          </div>

          {/* <div>
          <InstagramEmbed
          className="border-4 border-white h-1/4 w-1/4"
          url="https://www.instagram.com/24carrotscatering/reel/C3ZaO0GtgZY/"
          />
          <InstagramEmbed
          className="border-4 border-white"
          url="https://www.instagram.com/24carrotscatering/reel/C3Yi-0USXZL/"
          />
          <InstagramEmbed
          className="border-4 border-white"
          url="https://www.instagram.com/24carrotscatering/reel/C3TtlkEP4XU/"
          />
        </div> */}
        </div>
      </div>

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
    </div>
  );
}
