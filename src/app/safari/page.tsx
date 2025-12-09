
"use client";

import { useEffect } from "react";
import { Swiper } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { FaUserTie, FaCarSide, FaSmile, FaClock } from "react-icons/fa";

import SafariHero from "../../../public/images/safari_banner.png";
import Safari1 from "../../../public/images/safari slider/1.png";
import Safari2 from "../../../public/images/safari slider/2.png";
import Safari3 from "../../../public/images/safari slider/3.png";
import Safari4 from "../../../public/images/safari slider/4.png";



const SafariPage = () => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Swiper.use([Navigation, Autoplay]);
    const swiper = new Swiper(".safari-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed:10000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  const features = [
    {
      icon: <FaUserTie className="text-4xl text-yellow-600" />,
      title: "Expert Guide",
      description: "Our safari guide has 25 years of experience exploring Yala National Park.",
    },
    {
      icon: <FaCarSide className="text-4xl text-green-600" />,
      title: "Comfortable Jeeps",
      description: "Enjoy safe rides in modern 4x4 jeeps built for adventure and comfort.",
    },
    {
      icon: <FaSmile className="text-4xl text-pink-600" />,
      title: "Friendly Service",
      description: "We ensure warm hospitality and personal care throughout your journey.",
    },
    {
      icon: <FaClock className="text-4xl text-blue-600" />,
      title: "Flexible Schedules",
      description: "Morning, evening, or custom tours — we adapt to your travel plans.",
    },
  ];

  const images = [Safari1, Safari2, Safari3, Safari4];

  return (
    <main className="bg-[var(--cs-powder)]/70">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${SafariHero.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative  z-10 text-white font-qwitcher text-8xl md:text-9xl text-center px-4 font-bold">
          E<span className="text-primary font-semibold">xplore  </span>
          T<span className="text-primary font-semibold">he  </span>
          W<span className="text-primary font-semibold">ild  </span>
          S<span className="text-primary font-semibold">afari  </span>
          A<span className="text-primary font-semibold">dventure</span>
        </h1>
      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Discover the wonders of Yala National Park with our experienced local guide, 
          who has over 25 years of safari expertise. Spot elephants, leopards, crocodiles, 
          and exotic birds while learning fascinating insights about the park from someone 
          who knows every hidden trail and wildlife pattern.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Whether it’s your first time in the wild or your hundredth adventure, 
          our safaris offer the perfect blend of thrill, knowledge, and comfort — 
          making each journey truly unforgettable.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-12">
            Experience Yala like never before — with expert guidance, comfort, and care.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-[var(--cs-powder)] p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Wildlife Moments</h2>
        <div className="max-w-6xl mx-auto px-6">
          <div className="swiper safari-slider">
            <div className="swiper-wrapper">
              {images.map((img, idx) => (
                <div key={idx} className="swiper-slide">
                  <Image
                    src={img}
                    alt={`Safari Image ${idx + 1}`}
                    className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Text */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6 ">
        <p className=" text-lg leading-relaxed">
          “Our guide’s passion for wildlife made every sighting special. We saw leopards, 
          elephants, and even a family of crocodiles up close. It was an unforgettable 
          journey through nature.”
        </p>
        <p className="mt-4 font-semibold text-gray-900">— Anna & Michael, Germany</p>
      </section>
    </main>
  );


};

export default SafariPage;
