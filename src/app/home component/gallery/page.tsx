'use client';

import Masonry from 'react-masonry-css';
import GalleryItem from '../../../components/GalleryItem';
import Link from 'next/link';

const images = [
  { src: '/images/1.png', alt: 'Guest house exterior' },
  { src: '/images/2.png', alt: 'Safari jeep in Yala National Park' },
  { src: '/images/3.png', alt: 'Traditional Sri Lankan cooking class' },


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
   

          <h1 className=" font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl">
        D<span className="text-primary font-semibold">iscover </span>
        O<span className="text-primary font-semibold">ur </span>
        W<span className="text-primary font-semibold">orld </span>
      </h1>



          <p className="text-muted-foreground text-sm md:text-xl font-medium max-w-3xl mx-auto text-pretty leading-relaxed [text-shadow:_0_4px_14px_rgba(0,0,0,0.35)]">
            A glimpse into our guest house, Yala safari adventures, and traditional Sri Lankan cooking experiences.
          </p>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid justify-center"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index} className="mb-4">
              <GalleryItem src={image.src} alt={image.alt} />
            </div>
          ))}
        </Masonry>
      </div>
      <div className='mx-[800px]'>
        <Link href="/gallery" className='button'>See more</Link>
      </div>
      
    </section>
  );
};

export default HomeGallerySection;
