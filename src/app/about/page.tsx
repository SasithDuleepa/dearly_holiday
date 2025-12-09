"use client";

import Image from "next/image";
import Banner from "../../../public/images/about_banner.png";
import Guest from "../../../public/images/4.png";
import Desika from "../../../public/images/desika.jpg";

export default function AboutPage() {
  return (
    <div className="  ">

      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Banner.src})` }}
      >
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cs-blue-dark)]/20 to-[var(--cs-blue-medium)]/30" />

        {/* title */}
        <h1 className="relative z-10 text-[var(--cs-text-light)] font-qwitcher text-7xl md:text-9xl text-center px-4 font-bold leading-tight drop-shadow-lg">
          W<span className="text-[var(--cs-text-light)]">elcome </span>
          T<span className="text-[var(--cs-text-light)]">o </span>
          O<span className="text-[var(--cs-text-light)]">ur </span>
          W<span className="text-[var(--cs-text-light)]">orld </span>
          O<span className="text-[var(--cs-text-light)]">f </span>
          C<span className="text-[var(--cs-text-light)]">urated </span>
          E<span className="text-[var(--cs-text-light)]">xperiences</span>
        </h1>
      </section>



      {/* -------------------------------------------------- */}
      {/* FOUNDER SECTION */}
      {/* -------------------------------------------------- */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* image */}
        <Image
          src={Desika}
          alt="Desika"
          width={500}
          height={500}
          className="rounded-2xl object-cover shadow-xl border-4 border-[var(--cs-blue-light)]"
        />

        {/* text */}
        <div>
          <h2 className="text-4xl font-bold text-[var(--cs-blue-dark)]">
            Meet Our Founder
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
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
      <div className= "max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-10 mb-20">

        {/* text first (for desktop) */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold text-[var(--cs-blue-dark)]">
            Our Story
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
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
            className="rounded-2xl object-cover shadow-xl border-4 border-[var(--cs-blue-light)]"
          />
        </div>
      </div>

    </div>
  );
}
