"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // ✅ Import autoplay plugin
import Link from "next/link";

import img1 from "../../../../public/images/1.png";
import img2 from "../../../../public/images/2.png";
import img3 from "../../../../public/images/3.png";

export default function HomeGuestHouse() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })] // ✅ autoplay every 4 seconds
  );

  const images = [img1, img2, img3];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 shadow-lg p-8 rounded-3xl max-w-7xl">
        {/* --- Text Section --- */}
        <div className="max-w-[500px] flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-6">Stay with Comfort and Warmth</h1>
            <p className="text-[18px] text-justify text-gray-700 leading-relaxed">
              Nestled in the peaceful town of Tissamaharama, our guest house offers a cozy retreat surrounded by lush tropical gardens and a calm village atmosphere.
              Each room is thoughtfully designed for comfort — blending traditional Sri Lankan charm with modern simplicity. Whether you’re planning a Yala Safari or
              looking for a relaxing stay, you’ll find the perfect balance of tranquility and convenience here.
              <br />
              <br />
              What makes our guest house special is the genuine care and warmth we share with every guest. From the welcoming smiles
              to freshly prepared home-cooked meals, we ensure you feel right at home throughout your stay. Experience the beauty of
              rural Sri Lanka, enjoy peaceful evenings, and create unforgettable memories with us.
            </p>
          </div>

          <Link
            href="/guest-house"
            className="button mt-5"
          >
            Explore More
          </Link>
        </div>

        {/* --- Carousel Section --- */}
        <div className="embla max-w-[700px] overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((img, idx) => (
              <div
                className="embla__slide flex-[0_0_100%] px-2"
                key={idx}
              >
                <Image
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-[600px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
