"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import Reel from "../../../public/images/dearly cover photos icons/gallery1.png"
import Board from "../../../public/images/dearly cover photos icons/gallery2.png"
import Leaf from "../../../public/images/dearly cover photos icons/gallery3.png"

interface ImagesByCategory {
  [category: string]: string[];
}

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [images, setImages] = useState<string[]>([]);
  const [allImages, setAllImages] = useState<ImagesByCategory>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const res = await fetch(`/api/gallery?page=${currentPage}&limit=9&filter=${filter}`);
        if (!res.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await res.json();
        setImages(data.images);
        setTotalPages(data.totalPages);
        setAllImages(data.allImages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [currentPage, filter]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const categories = ['all', ...Object.keys(allImages)];

  return (
    <section className="">
      <section
        className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center bg-[#007200]"
      >
         <Image
                                                            src={Reel}
                                                            alt="Reel"
                                                            className="
                                                              absolute bottom-0 sm:bottom-0 lg:bottom-0 left-0 z-0 sm:left-0 md:left-[-100px] lg:left-0
                                                              w-[0px] sm:w-[0px] md:w-[1080px] lg:w-[1080px]
                                                                                                 sm:block
                                                            "
                                                          />
                                                            <Image
                                                              src={Leaf}
                                                              alt="Leaf"
                                                              className="
                                                                absolute top-0 right-0 z-0
                                                                w-[220px] sm:w-[280px] md:w-[250px]  lg:w-[400px]
                                                                 sm:block
                                                              "
                                                            />
                                                                        <Image 
                                                              src={Board}
                                                              alt="Board"
                                                              className="
                                                                absolute bottom-0 sm:right-1 lg:right-40 md:right-20 right-1 z-30
                                                                w-[200px] sm:w-[200px] md:w-[250px] lg:w-[300px]
                                                                 sm:block
                                                              "
                                                            />
        <h1 className="text-4xl sm:text-7xl font-lora font-bold mb-6 mt-20 text-white text-center max-w-[80%] z-50">
          Captured Memories
        </h1>
        <p className="text-white z-50 mb-8 max-w-[80%] text-center">
          Explore beautiful moments from our guest house, cooking experiences, and Yala safari tours.
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-4 mb-8 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === cat
                  ? " text-white bg-[#38B000]"
                  : "border-gray-300 text-black hover:bg-gray-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ')}
            </button>
          ))}
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">
              <Image src={src} alt={`Gallery image ${index + 1}`} width={600} height={400} className="w-full h-auto object-cover rounded-xl" />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 my-8">
          <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 rounded-lg border bg-gray-100 disabled:opacity-50">Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button id="next-page" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 rounded-lg border bg-gray-100 disabled:opacity-50">Next</button>
        </div>
      </div>
    </section>
  );
}
