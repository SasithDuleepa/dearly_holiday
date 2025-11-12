import Image from "next/image";
import img1 from "./../../../../public/images/4.png";

export default function HomeCustomerFeedback() {
  const testimonials = [
    {
      name: "Bonnie Green",
      role: "Guest from Germany",
      feedback:
        "Such a peaceful place! The room was cozy, the food was delicious, and the hospitality was beyond expectations. We felt like part of the family!",
      title: "A Warm and Peaceful Stay",
      image: img1,
    },
    {
      name: "Roberta Casas",
      role: "Traveler from France",
      feedback:
        "The hosts were incredibly kind and helpful. The location is perfect for Yala Safari, and we enjoyed the beautiful garden view every morning.",
      title: "Perfect Location for Safari",
      image: img1,
    },
    {
      name: "Jese Leos",
      role: "Guest from UK",
      feedback:
        "The Sri Lankan breakfast and the cozy garden atmosphere made our stay unforgettable. Highly recommended for anyone visiting Tissamaharama!",
      title: "Authentic Sri Lankan Experience",
      image: img1,
    },
    {
      name: "Joseph McFall",
      role: "Guest from Australia",
      feedback:
        "Loved everything! From the clean rooms to the lovely smiles of the owners, this guest house truly captures the heart of Sri Lanka.",
      title: "Feels Like Home",
      image: img1,
    },
  ];

  return (
    <section className="py-20 bg-[#fffaf3] w-full">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-qwitcher text-6xl md:text-8xl text-[#6b3f1d] mb-10">
          Happy Guests <span className="text-[#c19a6b] font-semibold">Around the World</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Hear from travelers who have stayed at our guest house, joined our cooking classes, and
          explored the beauty of Yala with us.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8 border border-[#f3e8dc]"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full w-[80px] h-[80px] border-4 border-[#f2d7b6] shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold text-[#6b3f1d] mb-2">{t.title}</h3>
                <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
                <div className="font-medium text-[#6b3f1d]">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
