"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/images/1.png";
import image2 from "../../../public/images/2.png";
import image3 from "../../../public/images/3.png";

const images = [
  { src: image1, alt: "Guest House", category: "guest" },
  { src: image2, alt: "Cooking Class", category: "cooking" },
  { src: image3, alt: "Safari", category: "safari" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? images : images.filter(img => img.category === filter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl text-center">
        C<span className="text-primary font-semibold">aptured </span>
        M<span className="text-primary font-semibold">emories </span>
  
   
      </h1>
        <p className="text-gray-600 mb-8">
          Explore beautiful moments from our guest house, cooking experiences, and Yala safari tours.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["all", "guest", "cooking", "safari"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
