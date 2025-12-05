
import Image from 'next/image';
import { FaBinoculars, FaCameraRetro, FaMapMarkedAlt, FaTree } from 'react-icons/fa';

const Safari = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Embark on an Unforgettable Safari Adventure
            </h2>
            <p className="text-gray-600 mb-6">
              Experience the untamed beauty of the wilderness and witness majestic creatures in their natural habitat. Our expert guides will lead you on an exhilarating journey through breathtaking landscapes, creating memories that will last a lifetime.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    <FaBinoculars className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Expert-Guided Tours</h3>
                  <p className="mt-1 text-gray-600">
                    Our knowledgeable guides have years of experience and a deep passion for wildlife, ensuring a safe and informative adventure.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 text-white">
                    <FaCameraRetro className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Photography Opportunities</h3>
                  <p className="mt-1 text-gray-600">
                    Capture stunning moments as you get up close and personal with incredible animals and breathtaking landscapes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                    <FaMapMarkedAlt className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Customized Itineraries</h3>
                  <p className="mt-1 text-gray-600">
                    We tailor each safari to your interests, whether you're a seasoned adventurer or a first-time explorer.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-500 text-white">
                    <FaTree className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Conservation Efforts</h3>
                  <p className="mt-1 text-gray-600">
                    We are committed to protecting the environment and supporting local communities through sustainable tourism.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Image
                src="/images/safari_banner.png"
                alt="Safari"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/images/safari.png"
                alt="Safari"
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/images/safari2.jpg"
                alt="Safari"
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safari;
