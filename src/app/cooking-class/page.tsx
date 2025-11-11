import Video from "../../../public/"


const CookingClassPage = () => {
  return (
 <section className="py-20 bg-amber-50">

        <h1 className="font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl text-center">
        C<span className="text-primary font-semibold">ook </span>
        W<span className="text-primary font-semibold">ith </span>
        D<span className="text-primary font-semibold">iarly </span>
   
      </h1>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Discover the Art of Sri Lankan Cooking
          </h2>
          <p className="text-gray-700 mb-6">
            Join our hands-on cooking class and uncover the secrets of authentic Sri Lankan cuisine. 
            Learn how to prepare spicy curries, crispy hoppers, and traditional sambols under the guidance 
            of our friendly host. Whether you’re a beginner or a food enthusiast, you’ll cook, laugh, 
            and share delicious moments together in a warm, home-style kitchen.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
            Join the Class
          </button>
        </div>

        {/* Right Side - Video */}
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
    </section>
  );
};

export default CookingClassPage;
