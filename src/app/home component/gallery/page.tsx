'use client';

import Masonry from 'react-masonry-css';
import GalleryItem from '../../../components/GalleryItem';

const images = [
  { src: '/images/1.png', alt: 'Guest house exterior' },
  { src: '/images/2.png', alt: 'Safari jeep in Yala National Park' },
  { src: '/images/3.png', alt: 'Traditional Sri Lankan cooking class' },
  { src: '/images/4.png', alt: 'Nature scene with lush greenery' },
  { src: '/images/5.png', alt: 'Local culture and traditions' },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const HomeGallerySection = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#A6814C]">Discover Our World</h2>
          <p className="text-lg text-[#A6814C] mt-2">
            A glimpse into our guest house, Yala safari adventures, and traditional Sri Lankan cooking experiences.
          </p>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index} className="mb-4">
              <GalleryItem src={image.src} alt={image.alt} />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default HomeGallerySection;
