import Banner from "../../../public/images/banner1.png";
import Guset from "../../../public/images/4.png"
import Desika from "../../../public/images/desika.jpg"

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto w-full  ">
      <section
      className="relative flex items-center justify-center h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${Banner.src})` }}>

        <h1 className="text-4xl font-bold text-brown">Welcome to Our Little Paradise in Tissamaharama</h1>

      </section>

<div>
        <div>
          <h1 className="text-center font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl">
        O<span className="text-primary font-semibold">ur </span>
        S<span className="text-primary font-semibold">tory</span>

      </h1>

      <div className="flex">
        <Image className="w-2xl" src={Guset} alt=""/>
         <p className="mx-4 text-lg">
         Our guest house was born from a love of meeting people from around the world and sharing 
         the beauty of Sri Lanka. What started as a small family home has grown into a peaceful 
         retreat for travelers exploring Yala and the southern coast.
        </p>
      </div>


      <div className="w-full flex flex-col justify-center  items-center my-32 ">
        <Image src={Desika} className="rounded-[100%] w-[300px] " alt=""/>

        <p className="mt-4 text-lg w-[1000px] text-center">
         We believe in simple comforts, warm smiles, and genuine hospitality. 
         Every guest becomes part of our family — whether it’s enjoying a homemade meal,
          joining a local tour, or relaxing in the garden after a long day of adventure.
        </p>

        <p>
          Desika Herath
        </p>
      </div>
 
       
      </div>


</div>


      
      
    </div>
  );
};

export default AboutPage;


