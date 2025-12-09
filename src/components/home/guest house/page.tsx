
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Swiper } from "swiper";
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
    Swiper.use([Navigation, Autoplay]);

    const swiper = new Swiper(".guest-house-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 8000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
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
    <main className="flex flex-col items-center justify-center min-h-screen p-8">

      {/* Heading */}
      <motion.h1
        className="font-qwitcher mb-12 text-cs-blue-dark text-center text-6xl md:text-8xl xl:text-9xl leading-tight"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        L<span className="text-cs-blue-medium font-semibold">earn to </span>
        C<span className="text-cs-blue-medium font-semibold">ook </span>
        T<span className="text-cs-blue-medium font-semibold">raditional </span>
        S<span className="text-cs-blue-medium font-semibold">ri </span>
        L<span className="text-cs-blue-medium font-semibold">ankan </span>
        M<span className="text-cs-blue-medium font-semibold">eals</span>
      </motion.h1>


      <div className=" flex flex-col lg:flex-row content-center white shadow-lg px-10 py-5 rounded-3xl bg-cs-bg-light">
        <div className="lg:max-w-[500px] px-5 flex flex-col justify-between ">
          <div>
            <h1 className="text-3xl font-bold mb-6 text-cs-blue-dark">Stay with Comfort and Warmth</h1>
            <p className="text-[18px] text-justify text-cs-blue-dark">
              Nestled in the peaceful town of Tissamaharama, our guest house offers a cozy retreat surrounded by lush tropical gardens and a calm village atmosphere. Each room is thoughtfully designed for comfort — blending traditional Sri Lankan charm with modern simplicity. Whether you’re planning a Yala Safari or looking for a relaxing stay, you’ll find the perfect balance of tranquility and convenience here.
              <br /><br />
              What makes our guest house special is the genuine care and warmth we share with every guest. From the welcoming smiles to freshly prepared home-cooked meals, we ensure you feel right at home throughout your stay. Experience the beauty of rural Sri Lanka, enjoy peaceful evenings, and create unforgettable memories with us.
            </p>
          </div>
          <Link href="/guest-house" className="button mt-6 lg:mt-0">
            Explore More
          </Link>
        </div>
        <div className="swiper guest-house-slider max-w-full lg:max-w-[700px] overflow-hidden mt-6 lg:mt-0">
          <div className="swiper-wrapper">
            {images.map((img, idx) => (
              <div key={idx} className="swiper-slide">
                <Image
                  src={img.img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-auto lg:h-[600px] object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
