import React, { useState } from "react";
import banner from "../assets/images/banner.jpeg";
import ctaImage from "../assets/images/cta.jpeg";
import { Typewriter } from "react-simple-typewriter";

const data = {
  title:
    "Laptop dead? Printer stuck? Need a Repairment? Walk in worried, walk out working.",
  tagline:
    "When your tech stops working, we don't just fix it, we get your day back on track.",
  heroTags: [
    "4.8+ ratings on Google",
    "Quality Repairs That Cost Less Than Replacement",
    "Serving Mirzapur with Reliable Tech Solutions",
    "Smart Deals on Laptops, Printers & Phones",
    "Quick Fixes So Your Work Never Stops",
  ],
};

const Home = () => {
  const [currentWord, setCurrentWord] = useState("in worried");

  return (
    <section>
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={banner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 flex w-full justify-evenly h-full">
          <div className="left flex flex-col justify-center w-[50vw]">
            <h1 className="text-white text-5xl uppercase font-semibold">
              {/* {data.title} */}
              Laptop dead? Printer stuck? Need a Repairment?
              <br />
              Walk{" "}
              <span
                className={
                  currentWord === "in worried"
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                <Typewriter
                  words={["in worried", "out working"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                  onType={(count) => {
                    // detect which word is active
                    const wordIndex = count % 2;
                    setCurrentWord(
                      wordIndex === 0 ? "in worried" : "out working",
                    );
                  }}
                />
              </span>
            </h1>
            <p className=" text-gray-300 text-3xl">{data.tagline}</p>
            <button className="mt-10 text-tertiary self-start bg-secondary/20 px-4 py-1 rounded-md">
              <i class="ri-phone-line mr-1"></i>
              {/* Contact Now */}
              Call now for quick support
            </button>
          </div>

          <div className="right text-gray-200 mr-10 flex items-center">
            <div className="cta-image rounded-2xl relative bg-red-300 h-70 w-80">
              <img
                className="ring-10 rounded-2xl  ring-tertiary/10"
                src={ctaImage}
                alt=""
              />
              <ul className="trustStrip rounded-2xl absolute -top-10 -right-10 text-xl p-6 backdrop-blur-sm bg-tertiary/80 text-primary flex ring-10 ring-tertiary/10  flex-col gap-1">
                <li>
                  <i class="ri-check-line"></i>
                  Same-day repairs
                </li>
                <li>
                  <i class="ri-check-line"></i>
                  Genuine parts
                </li>
                <li>
                  <i class="ri-check-line"></i>
                  Affordable pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden py-8">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        <div className="flex w-max animate-scroll gap-6">
          {[...data.heroTags, ...data.heroTags].map((tag, idx) => (
            <div
              key={idx}
              className="min-w-max px-5 py-3 rounded-xl 
                   bg-white/5 backdrop-blur-md 
                   border border-white/10 
                   text-gray-800 text-lg
                   shadow-lg hover:bg-white/10 
                   hover:scale-105 transition"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
