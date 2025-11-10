import Image from "next/image"
import image2 from "./../../../../public/images/4.png"
import Link from "next/link"
export default function HomeCooking() {
  return (
    <div className="text-center my-20">
      <h1 className="font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl">
        L<span className="text-primary font-semibold">earn to </span>
        C<span className="text-primary font-semibold">ook </span>
        T<span className="text-primary font-semibold">raditional </span>
        S<span className="text-primary font-semibold">ri </span>
        L<span className="text-primary font-semibold">ankan </span>
        M<span className="text-primary font-semibold">eals</span>
      </h1>

      


      <div className="flex align-top content-between w-[100%] gap-20 mt-10">
        <div className="w-[40%]">
          <p className="text-muted-foreground text-sm md:text-xl font-medium max-w-3xl mx-auto text-pretty leading-relaxed [text-shadow:_0_4px_14px_rgba(0,0,0,0.35)]">
        {/* <span className="font-semibold">Join our hands-on cooking class and discover the secrets of Sri Lankan cuisine - </span> */}
        Join our hands-on cooking class and uncover the secrets of authentic Sri Lankan cuisine — from fragrant coconut curries to crispy golden hoppers. In our family kitchen, you’ll cook with fresh local ingredients and learn traditional methods passed down through generations. It’s the perfect way to experience the heart of Sri Lankan food culture in a friendly, relaxed setting.
<br/>
<br/>
More than just a class, it’s a joyful experience of cooking, tasting, and sharing together. Laugh, learn, and enjoy every moment — and take home not just recipes, but lasting memories of true Sri Lankan hospitality.</p>

      <Link href="/cooking-class" className="button mx-20 my-10">Explore More</Link>
        </div>
        <div className="w-[40%] flex flex-col">
          <Image className=" rounded-2xl" src={image2} 
            // width={100} height={100}
            alt="profile picture"/>
            <Image className="rounded-2xl ml-[30%] mt-[-10%]" src={image2} 
            // width={100} height={100}
            alt="profile picture"/>
        </div>
      </div>


      
    </div>
  )
}


