"use client";
import Image from "next/image";
import Banner from "../../../public/images/about_banner.png";
import Guest from "../../../public/images/4.png";
import Desika from "../../../public/images/desika.jpg";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-brown text-center">
          About Us
        </h1>
        <p className="mt-4 text-lg">
          Welcome to our world of curated experiences.
        </p>
      </div>

      <div className="relative w-full h-96 mt-8">
        <Image
          src={Banner}
          alt="About Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src={Desika}
            alt="Desika"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-brown">Meet Our Founder</h2>
          <p className="mt-4 text-lg">
            Our founder, Desika, has a deep passion for creating unforgettable
            experiences. With a background in hospitality and a love for
            nature, she has dedicated her life to building a place where guests
            can connect with the world around them.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-brown">Our Story</h2>
          <p className="mt-4 text-lg">
            Our journey began with a simple idea: to create a sanctuary where
            people can escape the hustle and bustle of everyday life. We
            believe in the power of nature to heal and inspire, and we have
            poured our hearts into creating a space that reflects this
            philosophy.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={Guest}
            alt="Guest House"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}