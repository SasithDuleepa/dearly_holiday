"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    title: "Comfortable & Cozy Rooms",
    description:
      "Experience peaceful rest surrounded by nature and local charm.",
    image: "/images/1.png",
  },
  {
    title: "Tropical Garden Views",
    description: "Wake up to lush greenery and the sounds of Sri Lankan birds.",
    image: "/images/2.png",
  },
  {
    title: "Warm Hospitality",
    description: "Enjoy a homely atmosphere with genuine Sri Lankan care.",
    image: "/images/3.png",
  },
];

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__content">
              <div className="embla__slide__text">
                <h2 className="text-3xl font-bold text-brown">{slide.title}</h2>
                <p className="mt-4 text-lg">{slide.description}</p>
                <button className="mt-6 bg-brown text-white px-6 py-3 rounded-md">
                  Book Now
                </button>
              </div>
              <div className="embla__slide__image">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
