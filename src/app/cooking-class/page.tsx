"use client";

const CookingClassPage = () => {
  return (
    <section className="py-20 bg-[var(--cs-powder)]/70">
      {/* Title */}
      <h1 className="font-qwitcher mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl text-center">
        C<span className="text-primary font-semibold">ook </span>
        W<span className="text-primary font-semibold">ith </span>
        D<span className="text-primary font-semibold">iarly </span>
      </h1>

      {/* Intro */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        Experience the joy of cooking authentic Sri Lankan dishes in our family kitchen. 
        From grinding fresh spices to serving your own homemade curry, every step brings 
        you closer to the heart of our culture and traditions.
      </p>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover the Art of Sri Lankan Cooking
          </h2>
          <p className="text-gray-700 mb-6">
            Join our hands-on cooking class and uncover the secrets of authentic Sri Lankan cuisine.
            Learn how to prepare spicy curries, crispy hoppers, and traditional sambols under the 
            guidance of our friendly host. Whether you’re a beginner or a food enthusiast, you’ll 
            cook, laugh, and share delicious moments together in a warm, home-style kitchen.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">What You’ll Learn</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>🌶️ How to blend and balance Sri Lankan spices</li>
            <li>🍘 Making coconut milk and sambols from scratch</li>
            <li>🍛 Preparing a full rice & curry meal with local ingredients</li>
          </ul>

          <button className="button px-7 ">
            Join the Class
          </button>
        </div>

        {/* Right - Video */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/trIeCbvqd00"
            title="Sri Lankan Cooking Class"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Extra Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          “Cooking with Dially was the highlight of our trip! We learned so much about Sri Lankan 
          spices and culture — and the meal we made together was unforgettable.”  
        </p>
        <p className="mt-4 font-semibold text-gray-900">— Emma & James, UK Travelers</p>
      </div>
    </section>
  );
};

export default CookingClassPage;
