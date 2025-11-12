"use client";

import Image from "next/image";
import Banner from "../../../public/images/about_banner.png";
import Guest from "../../../public/images/4.png";
import Desika from "../../../public/images/desika.jpg";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* --- Hero Section --- */}
      <section
        className="relative flex items-center justify-center h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
          Welcome to Our Little Paradise in Tissamaharama
        </h1>
      </section>

      {/* --- Our Story Section --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-center font-qwitcher mb-10 text-6xl xl:text-8xl text-gray-800">
          O<span className="text-primary font-semibold">ur </span>
          S<span className="text-primary font-semibold">tory</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src={Guest}
              alt="Guest House"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          <div className="w-full lg:w-1/2 text-lg leading-relaxed text-justify">
            <p>
              Our guest house was born from a love of meeting people from around
              the world and sharing the beauty of Sri Lanka. What started as a
              small family home has grown into a peaceful retreat for travelers
              exploring Yala and the southern coast.
            </p>
          </div>
        </div>
      </section>

      {/* --- Owner Section --- */}
      <section className="flex flex-col items-center text-center py-20 bg-orange-50/40 px-6">
        <Image
          src={Desika}
          alt="Desika Herath"
          className="rounded-full w-[200px] h-[200px] object-cover shadow-lg"
        />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-700">
          We believe in simple comforts, warm smiles, and genuine hospitality.
          Every guest becomes part of our family — whether it’s enjoying a
          homemade meal, joining a local tour, or relaxing in the garden after a
          long day of adventure.
        </p>
        <p className="mt-4 font-semibold text-xl text-gray-900">
          — Desika Herath —
        </p>
      </section>
    </div>
  );
}
