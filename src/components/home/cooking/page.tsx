"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import image1 from "../../../../public/sample-images/home-cooking/4.png";
import image2 from "../../../../public/sample-images/home-cooking/5.png";

export default function HomeCooking() {
  return (
    <section className="text-center max-w-7xl mx-auto px-6 md:px-16 py-20">
      
      {/* Heading */}
      <motion.h1
        className="font-qwitcher mb-12 text-cs-blue-dark text-6xl md:text-8xl xl:text-9xl leading-tight"
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

      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-16 mt-10">
        
        {/* --- TEXT SIDE --- */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-cs-blue-dark text-base md:text-xl font-medium leading-relaxed">
            Join our hands-on cooking class and uncover the secrets of authentic
            Sri Lankan cuisine — from fragrant coconut curries to crispy golden
            hoppers. In our family kitchen, you’ll cook with fresh local
            ingredients and learn traditional methods passed down through
            generations. It’s the perfect way to experience the heart of Sri
            Lankan food culture in a friendly, relaxed setting.
            <br />
            <br />
            More than just a class, it’s a joyful experience of cooking,
            tasting, and sharing together. Laugh, learn, and enjoy every moment
            — and take home not just recipes, but lasting memories of true Sri
            Lankan hospitality.
          </p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              href="/cooking-class"
              className="inline-block px-10 py-3 bg-cs-blue-medium text-cs-text-light text-lg rounded-full shadow-lg hover:bg-cs-blue-dark hover:scale-105 transition-all duration-300"
            >
              Explore More
            </Link>
          </motion.div>
        </motion.div>

        {/* --- IMAGE SIDE --- */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Top Image */}
          <motion.div
            className="w-[90%] sm:w-[80%] md:w-[75%] rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image2}
              alt="Sri Lankan cooking class"
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* Overlay Bottom Image */}
          <motion.div
            className="w-[80%] sm:w-[70%] md:w-[60%] rounded-2xl overflow-hidden shadow-2xl mt-6 md:mt-0 md:absolute md:bottom-[-45%] md:right-[-10%]"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image1}
              alt="Sri Lankan cooking dishes"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
