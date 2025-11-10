'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer group transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={openLightbox}
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image src={src} alt={alt} width={1200} height={800} className="rounded-lg" />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
