"use client";

import { useEffect } from "react";
import { Swiper } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { FaUserTie, FaCarSide, FaSmile, FaClock } from "react-icons/fa";
import Safari1 from "../../../public/images/safari.png"

const SafariPage = () => {
  useEffect(() => {
    Swiper.use([Navigation, Autoplay]);

    const swiper1 = new Swiper(".slider-left", {
      loop: true,
      slidesPerView: 6, // default
      spaceBetween: 10,
      speed: 30000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        1920: { slidesPerView: 6, spaceBetween: 10 },
        1280: { slidesPerView: 5, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 8 },
        0: { slidesPerView: 1, spaceBetween: 5 },
      },
    });

    const swiper2 = new Swiper(".slider-right", {
      loop: true,
      slidesPerView: 6, // default
      spaceBetween: 10,
      speed: 30000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        reverseDirection: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        1920: { slidesPerView: 6, spaceBetween: 10 },
        1280: { slidesPerView: 5, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 8 },
        0: { slidesPerView: 1, spaceBetween: 5 },
      },
    });

    return () => {
      swiper1.destroy(true, true);
      swiper2.destroy(true, true);
    };
  }, []);


   const features = [
    {
      icon: <FaUserTie className="text-4xl text-yellow-600" />,
      title: "Expert Guide",
      description: "Our safari guide has 25 years of experience navigating Yala National Park."
    },
    {
      icon: <FaCarSide className="text-4xl text-green-600" />,
      title: "Comfortable Jeeps",
      description: "Travel in safe and well-maintained 4x4 vehicles for the best safari experience."
    },
    {
      icon: <FaSmile className="text-4xl text-pink-600" />,
      title: "Friendly Service",
      description: "We provide warm, personalized service to make your adventure unforgettable."
    },
    {
      icon: <FaClock className="text-4xl text-blue-600" />,
      title: "Flexible Schedules",
      description: "Morning, evening, or private tours tailored to your preferences."
    },
  ];

  return (

    <div className="text-center my-20">

      <h1 className="font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl">
        E<span className="text-primary font-semibold">xplore </span>
        T<span className="text-primary font-semibold">he </span>
        W<span className="text-primary font-semibold">ild </span>
        S<span className="text-primary font-semibold">afari </span>
        A<span className="text-primary font-semibold">dventures </span>
     
      </h1>

      <p className="text-[18px] text-center mx-96">Discover the wonders of Yala National Park with our experienced local guide, 
        who has over 25 years of safari expertise. Spot elephants, leopards, crocodiles, 
        and exotic birds while learning fascinating insights about the park from a 
        guide who knows every trail, hidden spot, and wildlife behavior.
        </p>


            <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-12">
          Experience Yala like never before with our expert guides, comfortable jeeps, and personalized service.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



          <div className="flex flex-col justify-center items-center w-full mt-10 gap-6">
      {/* Top Slider */}
      <div className="swiper slider-left w-full">
        <div className="swiper-wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className="swiper-slide">
                            <Image 
  src={Safari1} 
  alt={`Slide ${num}`} 
  width={400} 
  height={176} 
  className=" object-cover" 
/>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="swiper slider-right w-full">
        <div className="swiper-wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className="swiper-slide">
              <Image 
  src={Safari1} 
  alt={`Slide ${num}`} 
  width={400} 
  height={176} 
  className=" object-cover" 
/>
            </div>
          ))}
        </div>
      </div>
    </div>









    </div>

  );
};

export default SafariPage;
