'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Assuming you have these images in your public directory
const safariImages = [
  '/images/safari.png',
  '/images/safari2.jpg',
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
];

interface SafariCardProps {
  isPage: boolean;
}

const SafariCard: React.FC<SafariCardProps> = ({ isPage }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={isPage ? "bg-custom-beige min-h-screen flex items-center justify-center p-4 sm:p-8" : "bg-custom-beige p-4 sm:p-8"}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative h-80 md:h-full group">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {safariImages.map((src, index) => (
                <div className="relative flex-[0_0_100%] h-full" key={index}>
                  <Image
                    src={src}
                    alt={`Safari Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#e4b94a] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-opacity-90"
            onClick={scrollPrev}
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#e4b94a] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-opacity-90"
            onClick={scrollNext}
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
        <div className="p-8 md:p-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-custom-brown mb-4 leading-tight">
            Yala Safari Adventures
          </h1>
          <h2 className="text-xl font-semibold text-custom-olive mb-4">
            Discover the Wild Side of Sri Lanka
          </h2>
          <p className="text-gray-700 mb-8">
            Experience the thrill of spotting elephants, leopards, and exotic
            birds in their natural habitat. Our guided tours ensure you see
            Yala’s wonders safely and comfortably.
          </p>
          <Link href="/booking" className="button bg-[#e4b94a] text-white hover:bg-[#e4b94a] hover:text-white">
            Book Your Safari
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SafariCard;
