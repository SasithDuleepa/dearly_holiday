import Image from "next/image";
import { Wifi, Coffee, Leaf, Bike, BookOpen, Shirt } from "lucide-react";

const facilities = [
  { icon: <Wifi className="w-8 h-8 text-primary mb-3" />, title: "Free Wi-Fi" },
  { icon: <Coffee className="w-8 h-8 text-primary mb-3" />, title: "Homemade Breakfast" },
  { icon: <Leaf className="w-8 h-8 text-primary mb-3" />, title: "Tropical Garden" },
  { icon: <Shirt className="w-8 h-8 text-primary mb-3" />, title: "Laundry Service" },
  { icon: <Bike className="w-8 h-8 text-primary mb-3" />, title: "Bicycle Rental" },
  { icon: <BookOpen className="w-8 h-8 text-primary mb-3" />, title: "Calm Reading Area" },
];

export default function GuestHousePage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-qwitcher mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl">
            D<span className="text-primary font-semibold">iarly </span>
            G<span className="text-primary font-semibold">uest </span>
            H<span className="text-primary font-semibold">ouse </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relax, unwind, and feel at home in our cozy guest house surrounded by tropical nature.
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 px-5 py-4 gap-10 items-center mb-20 bg-[var(--cs-blue-light)]/90 rounded-3xl">
          <div className="m-5">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--cs-text-light)]">Peaceful Stay in Tissamaharama</h2>
            <p className="text-[var(--cs-text-light)] mb-4">
              Nestled in the heart of Tissamaharama, our guest house offers a peaceful retreat 
              for travelers exploring southern Sri Lanka. Each room combines comfort, simplicity, 
              and local charm to give you a truly relaxing stay.
            </p>
            <p className="text-[var(--cs-text-light)]">
              Enjoy your morning tea in the tropical garden, surrounded by birdsong, 
              and experience the warmth of genuine Sri Lankan hospitality.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/3.png"
              alt="Guest House"
              width={500}
              height={500}
              className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 🌿 Facilities Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed to make your stay relaxing and memorable — enjoy comfort, convenience, and a touch of nature.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[var(--cs-powder)] py-10 px-6 rounded-2xl shadow-sm hover:shadow-lg hover:bg-[var(--cs-powder)]/50  transition-all duration-300 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="mt-3 text-lg font-medium text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
