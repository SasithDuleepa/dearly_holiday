import Image from "next/image";
import Guest from "../../../public/images/3.png"

const GuestHousePage = () => {
  return (
<section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero */}
        <div className="text-center mb-12">
        <h1 className="font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl text-center">
        D<span className="text-primary font-semibold">iarly </span>
        G<span className="text-primary font-semibold">uest </span>
        H<span className="text-primary font-semibold">ouse </span>
   
      </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relax, unwind, and feel at home in our cozy guest house surrounded by tropical nature.
          </p>
        </div>

        {/* About */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Peaceful Stay in Tissamaharama</h2>
            <p className="text-gray-700 mb-4">
              Nestled in the heart of Tissamaharama, our guest house offers a peaceful retreat 
              for travelers exploring southern Sri Lanka. Each room combines comfort, simplicity, 
              and local charm to give you a truly relaxing stay.
            </p>
            <p className="text-gray-700">
              Enjoy your morning tea in the tropical garden, surrounded by birdsong, 
              and experience the warmth of genuine Sri Lankan hospitality.
            </p>
          </div>
          <div>
            <Image
              src={Guest}
              alt="Guest House"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Facilities */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Free Wi-Fi", "Homemade Breakfast", "Tropical Garden", "Laundry Service", "Bike Rental", "Calm Reading Area"].map((item, i) => (
              <div key={i} className="bg-amber-50 py-6 px-4 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuestHousePage;
