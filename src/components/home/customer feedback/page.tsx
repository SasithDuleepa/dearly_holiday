"use client";

import Image from "next/image";
import img1 from "./../../../../public/images/4.png";

export default function HomeCustomerFeedback() {
  const testimonials = [
    {
      name: "Bonnie Green",
      role: "Developer at OpenAI",
      title: "Very easy to integrate",
      message: "If you care for your time, I hands down would go with this.",
    },
    {
      name: "Roberta Casas",
      role: "Lead Designer at Dropbox",
      title: "Solid foundation for any project",
      message:
        "Designing with components that blend perfectly with Tailwind CSS saves a lot of time.",
    },
    {
      name: "Jese Leos",
      role: "Software Engineer at Facebook",
      title: "Mind-blowing workflow",
      message:
        "Beautifully designed components that add real value to every project.",
    },
    {
      name: "Joseph McFall",
      role: "CTO at Google",
      title: "Efficient collaborating",
      message:
        "Many ready-to-use examples that help create fast prototypes with your team.",
    },
  ];

  return (
    <section className="">
      {/* Heading */}
      <h1 className="font-qwitcher text-center mb-12 text-6xl md:text-8xl text-foreground">
        H<span className="text-primary font-semibold">appy Guests Around the World</span>
      </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="
              bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50
              dark:from-gray-800 dark:via-gray-900 dark:to-gray-950
              border border-orange-200/50 dark:border-gray-700
              rounded-3xl p-7 
              shadow-md hover:shadow-xl
              hover:-translate-y-1 
              transition-all duration-300
            "
          >
            {/* Title */}
            <h3 className="text-lg font-bold text-orange-700 dark:text-amber-300">
              {t.title}
            </h3>

            {/* Message */}
            <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              “{t.message}”
            </p>

            {/* Profile */}
            <div className="flex items-center mt-6">
              <Image
                src={img1}
                width={50}
                height={50}
                className="rounded-full border-2 border-orange-400"
                alt={t.name}
              />
              <div className="ml-3">
                <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
