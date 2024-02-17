import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-red-50 px-32 py-20 ">
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col cursor-pointer">
            <p className="text-3xl tracking-wide font-normal">24 CARROTS</p>
            <h5 className="text-gray-400 text-xs tracking-widest">
              CATERING AND EVENTS
            </h5>
          </div>

          <div>
            <p className="text-green-900 font-base tracking-wider font-light">
              The event specialists at our Southern
              <br /> California headquarters are available to
              <br /> help with every aspect of your event.
            </p>
          </div>

          <div className="text-green-900 font-light">
            ___________________________________________________
          </div>

          <div className="text-green-900 text-sm flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="tracking-wide">CALL US</p>
              <p className="tracking-wide">EMAIL US</p>
              <p className="tracking-wide">FIND US</p>
            </div>
            <section className="flex flex-col gap-3">
              <p>714.942.6000  • 800.717.1545</p>
              <p>info@24carrots.com</p>
              <p>150 Baker Street East, Costa Mesa, CA 92626</p>
            </section>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-12 text-green-900 text-sm">
            <div className="flex flex-col gap-3">
              <a
                href=""
                className="flex items-center gap-3 text-xl text-green-950"
              >
                About
                <span>
                  <BsArrowRight size={16} className="text-red-500 font-light" />
                </span>
              </a>
              <a href="">About 24 Carrots</a>
              <a href="">Meet The Team</a>
              <a href="">Awards & Press</a>
              <a href="">Blog</a>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href=""
                className="flex items-center gap-3 text-xl text-green-950"
              >
                Services
                <span>
                  <BsArrowRight size={16} className="text-red-500 font-light" />
                </span>
              </a>
              <a href="">Gourmet Catering</a>
              <a href="">Bar Service</a>
              <a href="">Staffing</a>
              <a href="">Production</a>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href=""
                className="flex items-center gap-3 text-xl text-green-950"
              >
                Events
                <span>
                  <BsArrowRight
                    size={16}
                    className="text-red-500 font-extralight"
                  />
                </span>
              </a>
              <a href="">Weddings</a>
              <a href="">Corporate</a>
              <a href="">Social</a>
              <a href="">Gallery</a>
            </div>
            <div className="flex flex-col gap-5">
              <a
                href=""
                className="flex items-center gap-3 text-xl text-green-900"
              >
                Venues
                <span>
                  <BsArrowRight size={16} className="text-red-500 font-light" />
                </span>
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-xl text-green-900 tracking-wide"
              >
                Career
                <span>
                  <BsArrowRight size={16} className="text-red-500 font-light" />
                </span>
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-xl text-green-900"
              >
                Contact
                <span>
                  <BsArrowRight size={16} className="text-red-500 font-light" />
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-5">
              <a href="" className="text-lg">
                FOLLOW US
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-green-900 text-sm"
              >
                <span>
                  <TiSocialFacebook size={20} />
                </span>
                Facebook
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-green-900 text-sm"
              >
                <span>
                  <AiFillInstagram size={20} />
                </span>
                Instagram
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-green-900 text-sm"
              >
                <span>
                  <FaPinterest size={20} />
                </span>
                Pinterest
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-green-900 text-sm"
              >
                <span>
                  <RiLinkedinBoxFill size={20} />
                </span>
                Linkedin
              </a>
            </div>
          </div>

          <div className="mt-20 flex justify-end text-green-900 text-sm gap-2 items-center">
            Site & design by Dooley Creative Co.
            <img
              className="w-12"
              src="https://24carrots.com/wp-content/themes/24carrots/img/icon/dcc-logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-green-900 mt-6 font-light">
        ______________________________________________________________________________________________________________________________________________________________________
      </div>

      <div className="flex justify-between items-center text-xs text-green-900 mt-6">
        <div>© 2023 24 Carrot Catering & Events. All rights reserved.</div>
        <div className="flex items-center gap-2">
          ADA Accessibility{" "}
          <span className="font-extrabold text-lg text-green-950">.</span>
          Policy Privacy Policy
        </div>
      </div>
    </div>
  );
}
