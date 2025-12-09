"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
      <section
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      >


        <div className="pic-wrapper absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 h-screen" >
          <div className='figure  pic-1' ></div>
  <div className='figure  pic-2 ' ></div>
  <div className='figure  pic-3 ' ></div>
  <div className='figure  pic-4 ' ></div>
        </div>
          
        <div className=" absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        <div className="flex items-center z-10 justify-center w-[100%]  mt-70">
          <h1  className="text-cs-text-light font-montserrat  text-8xl text-cs-text-light z-10 font-[300] border-t-4 border-b-4 ">Welcome to our little paradise</h1>
        </div>

        <div className="flex justify-center items-center  z-10  gap-10 w-[100%] mt-[18%] ">

          <div className="z-10 text-right  w-[100%]  home-bottom-text-left-div">
            <h1 className="font-montserrat text-4xl text-cs-text-light z-10 text-right font-[100]  home-bottom-text-left">Experience <br/> the warmth of <br/>Sri Lankan hospitality</h1>
          </div>
        
        <div className="bg-cs-text-light  home-bottom-text-center-div"></div>

        <div  className=" z-10  w-[100%] home-bottom-text-right-div">
          <h1 className="font-montserrat text-5xl text-cs-text-light z-10 font-[300]  home-bottom-text-right">Dearly <br/> Holiday  Inn</h1>
        </div>
        
        </div>



   
      </section>




      <motion.section
        className="bg-cs-powder/30 py-20"
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
        className="py-0"
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
        className="py-0"
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className=" mx-auto  home-cooking w-full flex justify-center   bg-gradient-to-b from-black/60 to-black/80 ">
         
            <HomeCooking />
         
          
        </div>
      </motion.section>

      {/* 🦁 Safari Section */}
      <motion.section
        className=" py-20 "
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
        className=" py-20"
        variants={{
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <HomeGallery />
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


 
    </div>
  );
}
