"use client";
import { motion } from "framer-motion";

import HomeAbout from "@/components/home/about/page";
import HomeCooking from "@/components/home/cooking/page";
import HomeGuestHouse from "@/components/home/guest house/page";
import HomeSafariSection from "@/components/home/safari/page";
import HomeCustomerFeedback from "@/components/home/customer feedback/page";
import HomeGallery from "@/components/home/gallery/page";

export default function Home() {
  return (
    <div className="bg-[var(--cs-bg-light)]">
      {/* 🌅 Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] md:h-screen bg-cover bg-center px-4">

        {/* Background Slider */}
        <div className="pic-wrapper absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 h-full">
          <div className="figure pic-1"></div>
          <div className="figure pic-2"></div>
          <div className="figure pic-3"></div>
          <div className="figure pic-4"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        {/* Main Title */}
        <div className="flex flex-col items-center justify-center w-full z-10 mt-10  md:mt-30 px-4">
          <div className="h-1  bg-white banner-up-line"></div>
          <h1 className="text-[var(--cs-text-light)] font-lora font-normal]
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
            text-center p-3 px-2">
            Welcome to our little paradise
          </h1>
          <div className="h-1 bg-white mt-3 banner-down-line"></div>
        </div>

        {/* <div className="h-[20vh] md:h-0 w-1"></div> */}

        {/* Bottom Hero Text */}
        <div className="flex flex-col md:flex-row justify-center items-center z-10 gap-6 md:gap-10 w-full mb-[-200px] md:mt-40 px-6 h-[470px]">

          <div className="text-center  md:text-right  md:w-1/3 home-bottom-text-left-div ">
            <h1 className="font-montserrat text-xl sm:text-3xl md:text-4xl text-[var(--cs-text-light)] font-light leading-snug home-bottom-text-left ">
              Experience <br /> the warmth of <br /> Sri Lankan hospitality
            </h1>
          </div>

          {/* Divider */}
          <div className=" bg-[var(--cs-text-light)] h-[1px] md:h-[120px] w-1/2  md:w-[2px] md:home-bottom-text-center-div"></div>

          <div className="text-center md:text-left  md:w-1/3 home-bottom-text-right-div">
            <h1 className="font-montserrat text-2xl sm:text-4xl md:text-5xl text-[var(--cs-text-light)] font-light leading-snug home-bottom-text-right ">
              Dearly <br /> Holiday Inn
            </h1>
          </div>

        </div>
      </section>

      {/* About */}
      <motion.section
        className="bg-cs-powder/30 py-16 md:py-20"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <HomeAbout />
        </div>
      </motion.section>

      {/* Guest House */}
      <motion.section
        className="py-10 md:py-16"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <HomeGuestHouse />
        </div>
      </motion.section>

      {/* Cooking */}
      <motion.section
        className="py-0 home-cooking"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-full flex justify-center bg-gradient-to-b from-black/60 to-black/80">
          <HomeCooking />
        </div>
      </motion.section>

      {/* Safari */}
      <motion.section
        className="py-16 md:py-20"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <HomeSafariSection />
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        className="py-16 md:py-20"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <HomeGallery />
        </div>
      </motion.section>

      {/* Feedback */}
      <motion.section
        className="py-16 md:py-20"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <HomeCustomerFeedback />
        </div>
      </motion.section>

    </div>
  );
}
