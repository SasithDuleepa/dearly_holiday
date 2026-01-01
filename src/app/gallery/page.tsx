'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

interface GalleryData {
  images: string[];
  allImages: Record<string, string[]>;
}

const GalleryPage = () => {
  const [data, setData] = useState<GalleryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/gallery', { cache: 'no-store' });
        const galleryData: GalleryData = await res.json();
        setData(galleryData);
      } catch (error) {
        console.error('Failed to fetch gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!data || data.images.length === 0) {
    return <div className="text-center py-10">No images found.</div>;
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.images.map((src, index) => (
          <div key={index} className="mb-4">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
              priority={index < 8} // Prioritize loading for the first few images
            />
          </div>
        ))}
      </Masonry>
      <style jsx global>{`
        .my-masonry-grid {
          display: -webkit-box; /* Not needed if autoprefixing */
          display: -ms-flexbox; /* Not needed if autoprefixing */
          display: flex;
          margin-left: -30px; /* gutter size offset */
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 30px; /* gutter size */
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div {
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
