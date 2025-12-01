"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  BedDouble,
  UtensilsCrossed,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  MapPin,
  CookingPot,
} from "lucide-react";

const features = [
  { icon: <MapPin className="w-6 h-6 text-[#967e59]" />, title: "20+ Years Safari Experience" },
  { icon: <BedDouble className="w-6 h-6 text-[#967e59]" />, title: "Luxury Rooms" },
  { icon: <UtensilsCrossed className="w-6 h-6 text-[#967e59]" />, title: "Delicious Foods" },
  { icon: <HeartHandshake className="w-6 h-6 text-[#967e59]" />, title: "Friendly Service" },
  { icon: <Sparkles className="w-6 h-6 text-[#967e59]" />, title: "Unforgettable Experience" },
  { icon: <ShieldCheck className="w-6 h-6 text-[#967e59]" />, title: "Trustworthy Service" },
  { icon: <ChefHat className="w-6 h-6 text-[#967e59]" />, title: "Tour Guide Experts" },
  { icon: <CookingPot className="w-6 h-6 text-[#967e59]" />, title: "Best Cooking Sessions" },
];

export default function HomeAbout() {
  return (
    <section className="bg-[#cdb085] shadow-2xl text-center rounded-3xl p-6 sm:rounded-[40px] sm:p-8 md:rounded-[60px] md:p-12 lg:rounded-[80px] lg:p-16 xl:p-20 overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cdb085]/30 to-[#8a6b45]/20 pointer-events-none rounded-[inherit]" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative font-serif font-bold text-white mb-6 text-3xl sm:mb-8 md:text-4xl md:mb-10 lg:text-5xl xl:text-6xl leading-tight"
      >
        Why Dearly is Special
      </motion.h1>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center mb-8 sm:mb-10 lg:mb-12"
      >
        <p className="font-qwitcher text-white/90 italic text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Feel at home with Dearly
        </p>
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden sm:flex justify-between px-8">
          <span className="h-px w-[25%] bg-white/60"></span>
          <span className="h-px w-[25%] bg-white/60"></span>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 sm:gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-2xl p-3 sm:p-4 md:p-5 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-full shadow-lg p-2 sm:p-3 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


export default function HomeAbout() {
  return (
    <div className=" bg-[#cdb085] shadow-2xl text-center rounded-3xl p-6 sm:rounded-[40px] sm:p-8 md:rounded-[60px] md:p-12 lg:rounded-[80px] lg:p-16 xl:p-20">
      <h1 className="font-bold text-white mb-6 text-balance leading-tight text-4xl sm:mb-8 md:text-4xl md:mb-10 lg:text-5xl xl:text-6xl font-serif">Why Dearly is Special</h1>
      <div className="relative text-center mb-8 sm:mb-10 lg:mb-12">
        <p className=  {`font-qwitcher text-white/90 font-light italic f text-4xl md:text-4xl lg:text-4xl xl:text-6xl` }  >Feel at home with Dearly</p>
        <div className="absolute left-[-5%] right-[-5%] top-1/2 -translate-y-1/2 items-center justify-between hidden sm:flex">
        <span className="h-px w-[28%] bg-white/60"></span>
      <span className="h-px w-[28%] bg-white/60"></span>
      </div>
      </div>

<div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">20+ year safari experience</span>
  </div>

  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">Luxury Rooms</span>
  </div>

  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">Delicious Foods</span>
  </div>

  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">Friendly Service</span>
  </div>

  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">Unforgettably Experience</span>
  </div>

  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">Trustworthy Service</span>
  </div>

  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">Tour Guide Experts</span>
  </div>

  <div className="flex items-center gap-3 sm:gap-4">
    <div className="bg-white rounded-full shadow-lg flex-shrink-0 p-2 sm:p-2.5 md:p-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chef-hat text-[#967e59] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
      <path d="M6 17h12"></path>
     </svg>
    </div>
    <span className="text-white font-medium text-left text-sm sm:text-base md:text-lg">Best Cooking Sessions</span>
  </div>
</div>




    </div>



   
  )
}


