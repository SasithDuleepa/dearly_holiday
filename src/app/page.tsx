import Link from "next/link";
import Bgimg1 from "./../../public/images/3.png"
import HomeAbout from "./home component/about/page";
import HomeCooking from "./home component/cooking/page";
import HomeGuestHouse from "./home component/guest house/page";
import HomeSafariSection from "./home component/safari/page";
import HomeCustomerFeedback from "./home component/customer feedback/page";
import HomeGallerySection from "./home component/gallery/page";

export default function Home() {
  return (
    <>
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Bgimg1.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col content-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 mt-[30%]">
          Experience the warmth of Sri Lankan hospitality in <br/> Tissamaharama 
        </h1>
        <div className="flex justify-center space-x-4 glass px-10 py-1 mt-[50px] w-fit">
          <Link href="/guest-house" className="text-1xl md:text-2xl text-white  py-3 px-6 ">
            Book Your Stay
          </Link>
          <p className="text-1xl md:text-2xl text-white  py-3 px-3 ">|</p>
          <Link href="/cooking-class" className="text-1xl md:text-2xl text-white  py-3 px-6 ">
            Join a Cooking Class
          </Link>
          <p className="text-1xl md:text-2xl text-white  py-3 px-3 ">|</p>
          <Link href="/yala-safari" className="text-1xl md:text-2xl text-white  py-3 px-6 ">
            Explore Safari
          </Link>
        </div>
      </div>
    </section>
    <div className="max-w-7xl mx-auto my-10"><HomeAbout/></div>
    <HomeGuestHouse/>
    <div className="max-w-7xl mx-auto "><HomeCooking/></div>
    
    
    
    <HomeSafariSection/>
    

       <HomeGallerySection/>

    <div className="max-w-7xl mx-auto my-10">    <HomeCustomerFeedback/></div>
 
    </>
  );
}
