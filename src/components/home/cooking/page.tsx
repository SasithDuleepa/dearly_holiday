"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import image1 from "../../../../public/sample images/home cooking/4.png";
import image2 from "../../../../public/sample images/home cooking/5.png";

export default function HomeCooking() {

  return (
    <div className="text-center my-20 py-10">
      <h1 className="font-qwitcher mb-4  xl:mb-6 text-background text-7xl xl:text-9xl mt-[-5%]">
        L<span className="text-primary font-semibold">earn to </span>
        C<span className="text-primary font-semibold">ook </span>
        T<span className="text-primary font-semibold">raditional </span>
        S<span className="text-primary font-semibold">ri </span>
        L<span className="text-primary font-semibold">ankan </span>
        M<span className="text-primary font-semibold">eals</span>


      </h1>
      {/* Content Wrapper */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-12 my-10 mt-10">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-left md:text-justify"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-background font-montserrat text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed [text-shadow:_0_4px_14px_rgba(0,0,0,0.35)]">
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

          <motion.div
            className="text-center md:text-left mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <Link
              href="/cooking-class"
              className="inline-block px-8 py-3 bg-[#6b3f1d] text-white text-lg rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Explore More
            </Link>  
            
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center relative mt-[-0%] "
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* First image */}
          <motion.div
            className="w-[90%] sm:w-[80%] md:w-[70%] rounded-2xl overflow-hidden shadow-2xl"
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

          {/* Second image — stacked on mobile, overlaid on desktop */}
          <motion.div
            className="w-[85%] sm:w-[75%] md:w-[65%] rounded-2xl overflow-hidden shadow-2xl mt-5 md:mt-0 md:absolute md:bottom-[-60%] md:right-[-5%]"
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

               




      
    </div>
  )

}

