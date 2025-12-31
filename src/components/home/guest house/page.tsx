"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Swiper from "swiper"; // Import Swiper core
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import img1 from "../../../../public/images/guest house home slider/1.png";
import img2 from "../../../../public/images/guest house home slider/2.png";
import img3 from "../../../../public/images/guest house home slider/3.png";
import img4 from "../../../../public/images/guest house home slider/4.png";
import img5 from "../../../../public/images/guest house home slider/5.png";
import img6 from "../../../../public/images/guest house home slider/6.png";

export default function HomeGuestHouse() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Swiper.use([Navigation, Autoplay]);
    const swiper = new Swiper(".guest-house-slider", {
      loop: true,
      // Default: 1 slide visible
      slidesPerView: 1, 
      spaceBetween: 10,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      // ⚠️ CORRECTED BREAKPOINTS: Ensure 1 slide per view for this design
      breakpoints: {
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 w-full">
      <h1 className="text-4xl sm:text-6xl font-lora font-bold mb-6 text-[black]">
              Stay with Comfort and Warmth
            </h1>

      {/* --- */}

      {/* 🖼️ Content Box - Responsive layout switch (Column to Row) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 
                    bg-cs-bg-light shadow-lg px-4 sm:px-8 py-8 md:py-12 rounded-3xl w-full max-w-7xl">
        
        {/* TEXT SECTION */}
        <div className="lg:w-1/2 px-0 sm:px-5 flex flex-col justify-between">
          <div>
            {/* <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--cs-blue-dark)]">
              Stay with Comfort and Warmth
            </h1> */}
            <p className="text-sm sm:text-base text-justify text-[var(--cs-blue-dark)] leading-relaxed">
              Nestled in the peaceful town of Tissamaharama, our guest house offers a cozy retreat surrounded by lush tropical gardens and a calm village atmosphere. Each room is thoughtfully designed for comfort — blending traditional Sri Lankan charm with modern simplicity. Whether you’re planning a Yala Safari or looking for a relaxing stay, you’ll find the perfect balance of tranquility and convenience here.
              <br /><br />
              What makes our guest house special is the genuine care and warmth we share with every guest. From the welcoming smiles to freshly prepared home-cooked meals, we ensure you feel right at home throughout your stay. Experience the beauty of rural Sri Lanka, enjoy peaceful evenings, and create unforgettable memories with us.
            </p>
          </div>

          {/* 🚀 Link button with correct responsive styling */}
          <Link 
            href="/guest-house" 
            className="mt-6 inline-block px-6 py-3 text-center text-white font-semibold 
                       rounded-full bg-[#007200] hover:bg-[#38B000] 
                       transition-all duration-300 w-full sm:w-auto"
          >
            Explore More
          </Link>
        </div>
        
        {/* IMAGE SLIDER SECTION */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <div className="swiper guest-house-slider w-full overflow-hidden rounded-xl">
            <div className="swiper-wrapper flex">
              {images.map((img, idx) => (
                <div key={idx} className="swiper-slide w-full">
                  <Image
                    src={img.img}
                    alt={`Guest House Slide ${idx + 1}`}
                    // Responsive heights
                    className="
                      w-full 
                      h-[250px] sm:h-[400px] lg:h-[550px] 
                      object-cover rounded-xl shadow-md
                    "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx === 0} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}