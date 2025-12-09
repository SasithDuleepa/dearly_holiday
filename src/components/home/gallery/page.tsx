import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
  {
    id: 1,
    title: 'Safari',
    description: 'Explore the wild and witness majestic animals in their natural habitat.',
    imageUrl: '/sample-images/home-gallery/1.png',
  },
  {
    id: 2,
    title: 'Cooking',
    description: 'Learn to cook delicious local cuisine with our expert chefs.',
    imageUrl: '/sample-images/home-gallery/2.png',
  },
  {
    id: 3,
    title: 'Guest House',
    description: 'Relax and unwind in our comfortable and luxurious guest houses.',
    imageUrl: '/sample-images/home-gallery/3.png',
  },
];

const HomeGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <Link href="/gallery" key={item.id}>
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1485}
                height={2640}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0  bg-opacity-10 flex flex-col justify-end p-6">
                <h3 className="text-cs-text-light text-2xl font-bold">{item.title}</h3>
                <p className="text-cs-text-light mt-2">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;
