import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import Project from "./components/Project";
import Head from "next/head";
import Loader from "./components/Loader";

export default function Home() {
  const [colorScheme, setcolorScheme] = useState(true);
  const [nav, setnav] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleColorScheme = () => {
    setcolorScheme(!colorScheme);
  };
  const handleNavigation = () => {
    setnav(!nav);
  };

  useEffect(() => {
    setTimeout(() => {
      return setLoading(!loading);
    }, 5000);
  }, []);

  return (
    <div>
      <Head>
        <title>Beebu Imprint</title>
        <meta name="description" content="Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <section
          className={
            colorScheme
              ? "bg-[#05082B] min-h-screen text-white"
              : "bg-[#EEEEEE] min-h-screen text-black"
          }
        >
          <div id="nav" className="flex items-center justify-between px-8 py-4">
            <img
              src="/logo.png"
              alt="logo"
              className="w-1/4 lg:w-[8%] animate-pulse "
            />{" "}
            <ul className="hidden md:flex md:gap-12">
              <a href="#nav">
                <li className="cursor-pointer">Home</li>
              </a>
              <li className="cursor-pointer">About</li>
              <a href="#service">
                <li className="cursor-pointer">Services</li>
              </a>
              <a href="#contact">
                <li className="cursor-pointer">Contact</li>
              </a>
            </ul>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/beebu__imprint?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
                className={
                  colorScheme
                    ? "bg-beebu hidden md:block  hover:bg-amber-400 text-black text-center py-2 px-4 rounded text-lg"
                    : "bg-black hidden md:block hover:bg-gray-700 text-white text-center py-2 px-4 rounded text-lg"
                }
              >
                Place Booking
              </a>
              {nav ? (
                <FaBars
                  size="32px"
                  className="md:hidden"
                  onClick={handleNavigation}
                />
              ) : (
                <FaTimes
                  size="32px"
                  className="md:hidden"
                  onClick={handleNavigation}
                />
              )}
              <button>
                {colorScheme ? (
                  <RiMoonClearFill
                    size="32px"
                    className="beebu cursor-pointer"
                    onClick={handleColorScheme}
                  />
                ) : (
                  <RiSunFill
                    size="32px"
                    className="beebu cursor-pointer"
                    onClick={handleColorScheme}
                  />
                )}
              </button>
            </div>
          </div>

          {nav ? (
            <div>
              <article
                className={
                  colorScheme
                    ? "bg-[url('/bg.png')] bg-center bg-cover bg-no-repeat py-8"
                    : "bg-[url('/bgGG.png')] bg-center bg-cover bg-no-repeat py-8"
                }
              >
                <div className="my-14 text-center w-[90%] md:w-3/5 mx-auto">
                  <h1 className=" text-4xl md:text-6xl ">
                    Beebu&rsquo;s Imprint The digital print & sign shop at your{" "}
                    <br />
                    <span className={colorScheme ? "text-beebu" : "text-black"}>
                      convenience
                    </span>
                  </h1>
                  <p className="my-4 text-sm md:text-lg">
                    The Bird Symbolizes peace and happiness. so it can be seen
                    in compositions related to the comfort clients tends to
                    derive while dealing with us. At the same time, predatory
                    representative which serve as a symbol of strength and
                    purposefulness in all creative projects of the company
                  </p>
                  <a
                    href="https://instagram.com/beebu__imprint?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                    className={
                      colorScheme
                        ? "bg-beebu hover:bg-amber-400 text-black text-center py-2 px-4 rounded text-lg"
                        : "bg-black hover:bg-gray-700 text-white text-center py-2 px-4 rounded text-lg"
                    }
                  >
                    Place Booking
                  </a>
                </div>
              </article>
            </div>
          ) : (
            <div className="py-12">
              <ul className="flex flex-col items-center gap-16">
                <li className="cursor-pointer text-xl">Home</li>
                <li className="cursor-pointer text-xl">About</li>
                <a href="#service">
                  <li className="cursor-pointer text-xl">Services</li>
                </a>
                <li className="cursor-pointer text-xl">Contact</li>
                <a
                  href="#"
                  className={
                    colorScheme
                      ? "bg-beebu hover:bg-amber-400 text-black text-center py-2 px-4 rounded text-lg"
                      : "bg-black hover:bg-gray-700 text-white text-center py-2 px-4 rounded text-lg"
                  }
                >
                  Book Session
                </a>
              </ul>
            </div>
          )}

          <div className="container mx-auto py-28" id="service">
            <h1 className="text-3xl lg:text-6xl py-4 text-center">
              Services we offer
            </h1>
            <section className="flex flex-wrap justify-center gap-4">
              <Project img="/p1.jpg" service="Printing on Nylons" />
              <Project img="/p2.jpg" service="Indoor Signages" />
              <Project img="/p3.jpg" service="Printing on Clothes" />
              <Project img="/p4.jpg" service="Offset Printing" />
              <Project img="/p5.jpg" service="Offset Printing" />
              <Project img="/p6.jpg" service="Offset Printing" />
            </section>
          </div>

          <div
            className="container text-center mx-auto space-y-4 px-8 py-2"
            id="contact"
          >
            <h1 className="text-3xl lg:text-6xl py-4 text-center">
              Contact Us
            </h1>
            <p className="text-sm lg:text-xl">
              The Bird Symbolizes peace and happiness. so it can be seen in
              compositions related to the comfort clients tends to derive while
              dealing with us. At the same time, predatory representative which
              serve as a symbol of strength and purposefulness in all creative
              projects of the company
            </p>

            <section className="flex justify-center gap-8">
              <a
                href="https://instagram.com/beebu__imprint?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="nonreferrer"
              >
                <span className="text-4xl cursor-pointer">
                  <BsInstagram />
                </span>
              </a>

              <a
                href="https://twitter.com/beebu_imprint?t=3ryFG5ak2l5JKmX6U1Lbyw&s=09"
                target="_blank"
                rel="nonreferrer"
              >
                <span className="text-4xl cursor-pointer">
                  <FaTwitterSquare />
                </span>
              </a>

              <a
                href="https://www.facebook.com/Beebus_Imprint-106387411538481"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-4xl cursor-pointer">
                  <FaFacebookSquare />
                </span>
              </a>
            </section>
          </div>
        </section>
      )}
    </div>
  );
}
