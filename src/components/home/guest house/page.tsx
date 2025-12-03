"use client";
import Image from "next/image"
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";



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
        <div className="  max-w-[500px] px-5 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-6">Stay with Comfort and Warmth</h1>
          <h1 className="text-[18px] text-justify">
            Nestled in the peaceful town of Tissamaharama, our guest house offers a cozy retreat surrounded by lush tropical gardens and a calm village atmosphere.
             Each room is thoughtfully designed for comfort — blending traditional Sri Lankan charm with modern simplicity. Whether you’re planning a Yala Safari or
              looking for a relaxing stay, you’ll find the perfect balance of tranquility and convenience here.<br/> <br/>

What makes our guest house special is the genuine care and warmth we share with every guest. From the welcoming smiles 
to freshly prepared home-cooked meals, we ensure you feel right at home throughout your stay. Experience the beauty of 
rural Sri Lanka, enjoy peaceful evenings, and create unforgettable memories with us.</h1>
          </div>

<Link href="/guest-house" className=" button">Explore More
</Link>


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

              {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4 justify-end">
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
      </div>
      </div>




    </main>

  )
}
