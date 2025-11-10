"use client";
import Image from "next/image"
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";



import img1 from "../../../../public/images/1.png"
import img2 from "../../../../public/images/2.png"
import img3 from "../../../../public/images/3.png"






export default function HomeGuestHouse() {
     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, });

  const images = [
    {img:img1},
    {img:img2},
    {img:img3}
    
  ];

  return (

     <main className="flex flex-col items-center justify-center min-h-screen  p-8">
      

      <div className="flex  content-center white shadow-lg px-10 py-5 rounded-3xl">
        <div className="  max-w-[500px] ">
          <h1 className="text-3xl font-bold mb-6">Dearly Guest House</h1>
          <h1>Whether you’re exploring Yala’s wildlife or discovering local culture, our guest house offers the perfect base for your stay. With modern comfort, friendly hosts, and authentic Sri Lankan cuisine, every moment here feels like home.</h1>
        </div>
              {/* Embla Carousel */}
      <div className="embla max-w-[700px]  overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex ">
          {images.map((img, idx) => (
            <div
              className="embla__slide flex-shrink-0  px-2 "
              key={idx}
            >
              <Image
                src={img.img}
                alt={`Slide ${idx + 1}`}
                className="w-[700px] h-[600px] object-cover rounded-lg shadow-lg "
              />
             
            </div>
          ))}
        </div>
      </div>
      </div>



      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => emblaApi?.scrollPrev()}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => emblaApi?.scrollNext()}
        >
          Next
        </button>
      </div>
    </main>

  )
}
