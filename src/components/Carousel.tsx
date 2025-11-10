"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [Autoplay()]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const imageVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: "50vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__content">
              <motion.div
                className="embla__slide__text"
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                variants={textVariants}
              >
                <h2 className="text-3xl font-bold text-brown">{slide.title}</h2>
                <p className="mt-4 text-lg">{slide.description}</p>
                <button className="mt-6 bg-brown text-white px-6 py-3 rounded-md">
                  Book Now
                </button>
              </motion.div>
              <motion.div
                className="embla__slide__image"
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                variants={imageVariants}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
