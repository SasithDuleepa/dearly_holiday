"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import imgDaniel from "./../../../../public/images/feedback customers/Daniel Hoffman.png";
import imgEmily from "./../../../../public/images/feedback customers/Emily Carter.png";
import imgMichael from "./../../../../public/images/feedback customers/Michael Rodriguez.png";
import imgSophie from "./../../../../public/images/feedback customers/sophie tan.png";

export default function HomeCustomerFeedback() {
  const testimonials = [
    {
      name: "Emily Carter",
      role: "Travel Blogger from UK",
      title: "A truly authentic experience",
      message:
        "The cooking class and the warm hospitality made my Sri Lanka trip unforgettable.",
      img: imgEmily,
    },
    {
      name: "Daniel Hoffman",
      role: "Wildlife Photographer from Germany",
      title: "Perfect place for relaxation",
      message:
        "The guest house was peaceful, clean, and the safari arrangement was excellent.",
      img: imgDaniel,
    },
    {
      name: "Sophie Tan",
      role: "Food Enthusiast from Singapore",
      title: "Incredible home-cooked meals",
      message:
        "The flavors were amazing — it felt like eating a traditional meal prepared with love.",
      img: imgSophie,
    },
    {
      name: "Michael Rodriguez",
      role: "Adventure Traveler from Spain",
      title: "Amazing safari experience",
      message:
        "Loved the jeep safari arrangement. Saw leopards and elephants up close!",
      img: imgMichael,
    },
  ];

  return (
    <section>
      <h1 className="text-4xl sm:text-6xl font-lora font-bold mb-15 text-[black] text-center">
             Happy Guests Around The World
            </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="
              bg-[transparent]
              border border-[#38B000]
              rounded-3xl p-7 
              shadow-md hover:shadow-xl
              hover:-translate-y-1 
              transition-all duration-300
            "
          >
            {/* Title */}
            <h3 className="text-lg font-bold text-[var(--cs-blue-dark)]">
              {t.title}
            </h3>

            {/* Message */}
            <p className="my-4 text-[var(--cs-blue-dark)] leading-relaxed">
              “{t.message}”
            </p>

            {/* Profile */}
            <div className="flex items-center mt-6">
              <Image
                src={t.img}
                width={50}
                height={50}
                className="rounded-full border-2 border-cs-blue-light object-cover"
                alt={t.name}
              />
              <div className="ml-3">
                <p className="font-semibold text-[var(--cs-blue-dark)]">
                  {t.name}
                </p>
                <p className="text-sm text-[var(--cs-blue-dark)]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
