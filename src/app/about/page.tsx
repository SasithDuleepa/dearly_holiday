"use client";

import Image from "next/image";
import Banner from "../../../public/images/dearly cover photos/about.png";
// import Banner from "../../../public/images/banner_test-1.png";
import Guest from "../../../public/images/4.png";
import Desika from "../../../public/images/desika.jpg";
import Chef from "../../../public/images/dearly cover photos icons/about1.png"
import Travel from "../../../public/images/dearly cover photos icons/about2.png"
import Elephant from "../../../public/images/dearly cover photos icons/about3.png"
import Relax from "../../../public/images/dearly cover photos icons/about4.png"

export default function AboutPage() {
  return (
    <div className="  ">

      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
<section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] bg-[#007200] flex items-center justify-center overflow-hidden">

  {/* Chef */}
  <Image
    src={Chef}
    alt="Chef"
    className="
      absolute bottom-0 left-2
      w-[300px] sm:w-[400px] lg:w-[600px]
       sm:block
    "
  />

  {/* Travel */}
  <Image
    src={Travel}
    alt="Travel"
    className="
      absolute bottom-0 left-30
      w-[100px] sm:w-[160px] lg:w-[220px]
      hidden md:block
    "
  />

  {/* Elephant */}
  <Image
    src={Elephant}
    alt="Elephant"
    className="
      absolute bottom-0 right-0
      
      w-[300px]  sm:w-[300px] md:w-[400px] lg:w-[800px] hidden
      sm:block
    "
  />

  {/* Relax */}
  <Image
    src={Relax}
    alt="Relax"
    className="
      absolute bottom-0 right-10
      w-[120px] sm:w-[180px] lg:w-[260px]
       sm:block
    "
  />

  {/* Text */}
  <h1 className="
    relative z-10
    text-3xl sm:text-5xl lg:text-7xl
    font-lora font-bold
    text-white text-center
    max-w-[90%] sm:max-w-[80%]
  ">
    Welcome To Our World Of Curated Experiences
  </h1>

</section>




      {/* -------------------------------------------------- */}
      {/* FOUNDER SECTION */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* image */}
        <Image
          src={Desika}
          alt="Desika"
          width={450}
          height={400}
          className="rounded-2xl object-cover shadow-xl border-4 border-[#38B000]"
        />

        {/* text */}
        <div>
          <h2 className="text-4xl font-bold text-[#004B23]">
            Meet Our Founder
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-black">
            Our founder, <span className="font-semibold">Desika</span>, has a deep
            passion for creating unforgettable experiences. With a strong
            background in hospitality and a deep love for nature, she has
            dedicated her life to building a place where guests can truly connect
            with the world around them — peacefully, warmly, and authentically.
          </p>
        </div>
      </div>



      {/* -------------------------------------------------- */}
      {/* OUR STORY SECTION */}
      {/* -------------------------------------------------- */}
      <div className= "max-w-6xl mx-auto mt-30 grid grid-cols-1 md:grid-cols-2 gap-14 items-center  mb-20">

        {/* text first (for desktop) */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold text-[#004B23]">
            Our Story
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-black">
            Our journey began with a simple idea — to create a sanctuary where
            people can escape the noise of everyday life. We believe in the power
            of nature to heal, inspire, and rejuvenate the soul.
            <br /><br />
            From the gentle breeze of the paddy fields to the warm glow of our
            beautifully curated spaces, every detail of our guest house is crafted
            with heart and purpose to make you feel truly at home.
          </p>
        </div>

        {/* image */}
        <div className="order-1 md:order-2">
          <Image
            src={Guest}
            alt="Guest House"
            width={600}
            height={600}
            className="rounded-2xl object-cover shadow-xl border-4 border-[#38B000]"
          />
        </div>
      </div>

    </div>
  );
}
