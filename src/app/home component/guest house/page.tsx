"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import img1 from "../../../../public/images/guest house home slider/1.png";
import img2 from "../../../../public/images/guest house home slider/2.png";
import img3 from "../../../../public/images/guest house home slider/3.png";
import img4 from "../../../../public/images/guest house home slider/4.png";
import img5 from "../../../../public/images/guest house home slider/5.png";
import img6 from "../../../../public/images/guest house home slider/6.png";
import img7 from "../../../../public/images/guest house home slider/7.png";


export default function HomeGuestHouse() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000 })]
  );

  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="py-10 rounded-2xl bg-[#fffaf3]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-10">
        
        {/* --- Left: Carousel Section --- */}
        <div
          className="embla relative w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="embla__slide flex-[0_0_100%] px-1"
              >
                <Image
                  src={img}
                  alt={`Guest House Image ${idx + 1}`}
                  className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-3xl"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Right: Text Section --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6b3f1d] mb-6">
            Stay with Comfort and Warmth
          </h2>
          <p className="text-gray-700 leading-relaxed text-[17px] mb-6">
            Nestled in the peaceful town of Tissamaharama, our guest house offers a cozy retreat surrounded by
            lush tropical gardens and a calm village atmosphere. Each room is thoughtfully designed for comfort —
            blending traditional Sri Lankan charm with modern simplicity.
          </p>
          <p className="text-gray-700 leading-relaxed text-[17px]">
            What makes our guest house special is the genuine care and warmth we share with every guest. From
            welcoming smiles to freshly prepared home-cooked meals, we ensure you feel right at home throughout
            your stay. Experience the beauty of rural Sri Lanka, enjoy peaceful evenings, and create
            unforgettable memories with us.
          </p>

          <Link
            href="/guest-house"
            className="mt-8 inline-block text-lg bg-[#6b3f1d] text-white px-8 py-3 rounded-full hover:bg-[#845a2a] transition w-fit"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
