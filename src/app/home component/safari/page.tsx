import React from 'react'
import Bgimg1 from "./../../../../public/images/safari2.jpg"

export default function HomeSafariSection() {
  return (
    <section className="text-center relative flex flex-col items-center justify-center bg-cover bg-center"
    // style={{ backgroundImage: `url(${Bgimg1.src})` }}
    >
      <h1 className="font-qwitcher  mb-4 xl:mb-6 text-foreground text-7xl xl:text-9xl">
        S<span className="text-primary font-semibold">afari </span>

      </h1>

      <p className="text-muted-foreground text-sm md:text-xl font-medium max-w-3xl mx-auto text-pretty leading-relaxed [text-shadow:_0_4px_14px_rgba(0,0,0,0.35)]">
       
        from spicy curries to crispy hoppers. Cook, taste, and laugh together in a warm, home-style kitchen spic
        y curries to crispy hoppers. Cook, taste, and laugh together in a warm, home-style kitchen.
      </p>
    </section>
  )
}
