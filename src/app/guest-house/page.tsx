import Image from "next/image";
import { Wifi, Coffee, Leaf, Bike, BookOpen, Shirt } from "lucide-react";
import Banner from "../../../public/images/dearly cover photos/guest.png";

import Board from "../../../public/images/dearly cover photos icons/guest1.png"
import Girl from "../../../public/images/dearly cover photos icons/guest3.png"
import Leaf_ from "../../../public/images/dearly cover photos icons/guest2.png"


const facilities = [
  { icon: <Wifi className="w-8 h-8 text-primary mb-3" />, title: "Free Wi-Fi" },
  { icon: <Coffee className="w-8 h-8 text-primary mb-3" />, title: "Homemade Breakfast" },
  { icon: <Leaf className="w-8 h-8 text-primary mb-3" />, title: "Tropical Garden" },
  { icon: <Shirt className="w-8 h-8 text-primary mb-3" />, title: "Laundry Service" },
  { icon: <Bike className="w-8 h-8 text-primary mb-3" />, title: "Bicycle Rental" },
  { icon: <BookOpen className="w-8 h-8 text-primary mb-3" />, title: "Calm Reading Area" },
];

export default function GuestHousePage() {
  return (
    <section className="bg-white">
            <section
        className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center bg-[#007200]"
      
      >

          <Image
            src={Board}
            alt="Board"
            className="
              absolute bottom-40 sm:bottom-0 lg:bottom-0 left-2 z-0
              w-[300px] sm:w-[400px] lg:w-[600px]
               sm:block
            "
          />
            <Image
              src={Leaf_}
              alt="Leaf"
              className="
                absolute lg:bottom-50 sm:bottom-20 bottom-20 right-10 z-0
                w-[120px] sm:w-[180px]  lg:w-[300px]
                 sm:block
              "
            />
                        <Image
              src={Girl}
              alt="Girl"
              className="
                absolute bottom-0 sm:right-20 lg:right-20 right-10 z-30
                w-[150px] sm:w-[180px] lg:w-[360px]
                 sm:block
              "
            />


              <h1 className="text-4xl sm:text-7xl font-lora font-bold mb-6 mt-30 text-white text-center max-w-[80%] z-40">
             Welcome To Diarly Guest House
            </h1>
            <h2 className="text-2xl font-semibold mb-3 text-white z-40">Peaceful Stay in Tissamaharama</h2>

      </section>
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-12">


        </div>

        {/* About Section */}
        <div className="flex flex-col px-5 py-4 items-center mb-20 text-center">

            
            <p className="text-black mb-4">
              Nestled in the heart of Tissamaharama, our guest house offers a peaceful retreat 
              for travelers exploring southern Sri Lanka. Each room combines comfort, simplicity, 
              and local charm to give you a truly relaxing stay.
            </p>
            <p className="text-black">
              Enjoy your morning tea in the tropical garden, surrounded by birdsong, 
              and experience the warmth of genuine Sri Lankan hospitality.
            </p>


        </div>

        {/* 🌿 Facilities Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed to make your stay relaxing and memorable — enjoy comfort, convenience, and a touch of nature.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 pb-10">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#38B000] py-10 px-6 rounded-2xl shadow-sm hover:shadow-lg hover:bg-[#38B000]/80  transition-all duration-300 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300 text-white">
                {item.icon}
              </div>
              <p className="mt-3 text-lg font-medium text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
