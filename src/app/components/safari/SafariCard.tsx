import React from 'react';
import Image from 'next/image';
import SafariImage from '../../../../public/images/safari2.jpg';
import Link from 'next/link';

interface SafariCardProps {
  isPage: boolean;
}

const SafariCard: React.FC<SafariCardProps> = ({ isPage }) => {
  return (
    <div className={isPage ? "bg-custom-beige min-h-screen flex items-center justify-center py-8" : "bg-custom-beige py-8"}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-full">
          <Image
            src={SafariImage}
            alt="Safari Jeep"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-bold text-custom-brown mb-4">
            Yala Safari Adventures
          </h1>
          <h2 className="text-xl font-semibold text-custom-olive mb-4">
            Discover the wild side of Sri Lanka with guided jeep tours.
          </h2>
          <p className="text-gray-700 mb-8">
            Experience the thrill of spotting elephants, leopards, and exotic
            birds in their natural habitat. Our guided tours ensure you see
            Yala’s wonders safely and comfortably.
          </p>
          <Link href="/booking" className="button mx-20">
            
              Book Your Safari
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SafariCard;
