import Image from 'next/image';
import { FaBinoculars, FaCameraRetro, FaMapMarkedAlt, FaTree } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from "framer-motion";

const HomeSafariSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 ">
      {/* Heading */}
      <motion.h1
        className="font-qwitcher text-center mb-12 text-6xl md:text-8xl xl:text-9xl leading-tight text-cs-blue-dark"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        E<span className="text-cs-blue-medium font-semibold">mbark </span>
        O<span className="text-cs-blue-medium font-semibold">n </span>
        A<span className="text-cs-blue-medium font-semibold">n  </span>
        U<span className="text-cs-blue-medium font-semibold">nforgettable </span>
        S<span className="text-cs-blue-medium font-semibold">afari </span>
        A<span className="text-cs-blue-medium font-semibold">dventure </span>
      </motion.h1>
      
      {/* TOP CENTER TEXT */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">


        
        <p className="text-cs-blue-dark text-base md:text-lg leading-relaxed">
          Experience the untamed beauty of the wilderness and witness majestic creatures in their natural habitat.
          Our expert guides will lead you on an exhilarating journey through breathtaking landscapes, creating
          memories that will last a lifetime.
        </p>
      </div>

      <div className="container mx-auto py-4 px-4  rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT SIDE FEATURES */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12  ">

              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cs-blue-medium text-cs-text-light">
                    <FaBinoculars className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-cs-blue-dark">Expert-Guided Tours</h3>
                  <p className="mt-1 text-cs-blue-dark">
                    Our knowledgeable guides ensure a safe and informative adventure.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cs-blue-medium text-cs-text-light">
                    <FaCameraRetro className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-cs-blue-dark">Photography Opportunities</h3>
                  <p className="mt-1 text-cs-blue-dark">
                    Capture stunning moments with incredible wildlife and scenery.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cs-blue-medium text-cs-text-light">
                    <FaMapMarkedAlt className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-cs-blue-dark">Customized Itineraries</h3>
                  <p className="mt-1 text-cs-blue-dark">
                    Tailored safari experiences based on your interests.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cs-blue-medium text-cs-text-light">
                    <FaTree className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-cs-blue-dark">Conservation Efforts</h3>
                  <p className="mt-1 text-cs-blue-dark">
                    Supporting the environment and local communities through sustainable tourism.
                  </p>
                </div>
              </div>

            </div>
                        <Link
              href="/safari"
              className="inline-block mt-5 px-10 py-3 bg-cs-blue-medium text-cs-text-light text-lg rounded-full shadow-lg hover:bg-cs-blue-dark hover:scale-105 transition-all duration-300"
            >
              Explore More
            </Link>
          </div>

          {/* RIGHT SIDE IMAGES */}
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
                alt="Safari Jeep"
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>

            <div>
              <Image
                src="/images/safari2.jpg"
                alt="Safari Landscape"
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

export default HomeSafariSection;
