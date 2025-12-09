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
      <h1 className="font-qwitcher text-center mb-12 text-6xl md:text-8xl text-cs-blue-dark">
        H<span className="text-cs-blue-medium font-semibold">appy Guests Around the World</span>
      </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="
              bg-cs-powder
              border border-cs-powder
              rounded-3xl p-7 
              shadow-md hover:shadow-xl
              hover:-translate-y-1 
              transition-all duration-300
            "
          >
            {/* Title */}
            <h3 className="text-lg font-bold text-cs-blue-dark">
              {t.title}
            </h3>

            {/* Message */}
            <p className="my-4 text-cs-blue-dark leading-relaxed">
              “{t.message}”
            </p>

            {/* Profile */}
            <div className="flex items-center mt-6">
              <Image
                src={img1}
                width={50}
                height={50}
                className="rounded-full border-2 border-cs-blue-light object-cover"
                alt={t.name}
              />
              <div className="ml-3">
                <p className="font-semibold text-cs-blue-dark">{t.name}</p>
                <p className="text-sm text-cs-blue-dark">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
