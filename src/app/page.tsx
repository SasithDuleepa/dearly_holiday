"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Bgimg1 from "./../../public/images/3.png";

import  Hero1 from "../../public/sample images/home hero/1.png"

import HomeAbout from "./home component/about/page";
import HomeCooking from "./home component/cooking/page";
import HomeGuestHouse from "./home component/guest house/page";
import HomeSafariSection from "./home component/safari/page";
import HomeCustomerFeedback from "./home component/customer feedback/page";
import HomeGallerySection from "./home component/gallery/page";


export default function Home() {

   const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      {/* 🌅 Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Hero1.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial="hidden"
          animate="visible"
          variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        >


           <motion.h1
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className="text-4xl tracking-normal  text-center sm:text-6xl font-bold tracking-tighter md:text-10xl md:leading-[4rem]"
    >
                {/* <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 mt-24 md:mt-10"> */}
            Experience the{" "}
            <span className="text-primary">warmth of Sri Lankan hospitality</span> <br />
            in the heart of <span className="text-primary">Tissamaharama</span>
          {/* </h1> */}
    </motion.h1>





          <motion.div
            className="flex flex-wrap justify-center items-center content-center gap-4 mt-[15rem] hero-glass space-x-4  px-10 py-1 w-fit mx-auto md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
             <Link href="/guest-house" className="text-1xl md:text-2xl text-white py-3 px-6  glass-sm">Book Your Stay </Link> 
              <p className="text-1xl md:text-2xl text-white py-3 px-3 sm-none">|</p>
               <Link href="/cooking-class" className="text-1xl md:text-2xl text-white py-3 px-6 glass-sm"> Join a Cooking Class </Link>
              <p className="text-1xl md:text-2xl text-white py-3 px-3 sm-none">|</p>
               <Link href="/safari" className="text-1xl md:text-2xl text-white py-3 px-6 glass-sm"> Explore Safari </Link>
          </motion.div>
        </motion.div>
      </section>




      <motion.section
        className="bg-beige/30 py-20"
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <HomeAbout />
        </div>
      </motion.section>



      {/* 🏡 Guest House Section */}
      <motion.section
        className="bg-beige/30 py-20"
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <HomeGuestHouse />
        </div>
      </motion.section>

      {/* 🍛 Cooking Class Section */}
      <motion.section
        className="py-20"
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <HomeCooking />
        </div>
      </motion.section>

      {/* 🦁 Safari Section */}
      <motion.section
        className="bg-[#fffaf3] py-20"
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <HomeSafariSection />
        </div>
      </motion.section>

      {/* 🖼️ Gallery Section */}
      <motion.section
        className="bg-beige/20 py-20"
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <HomeGallerySection />
        </div>
      </motion.section>

      {/* 💬 Customer Feedback Section */}
      <motion.section
        className="py-20 "
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <HomeCustomerFeedback />
        </div>
      </motion.section>
    </>
  );
}
