

import Link from "next/link";
import Image from "next/image";
import ProductFilm from "../ProductFilm";
import WristbandSection from "../WristbandSection";
import Header from "../Header";



import {
    bessita,
    brightwall,
    geometr212,
    jasper,
    spaceGrotesk,
    techb,
    alumniSansSC,
    redHatDisplay
    } from "@/lib/fonts";



export default function Hero() {
  return (


  

    <main
  className="relative
             min-h-screen

             flex
             flex-col
             items-center
             justify-start

             pt-32
             md:pt-40

             text-center
             px-6
             text-white
             overflow-hidden">
    
      <Header />


{/* Background Video Container */}
<div className="fixed inset-0 -z-20">
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/images/abstract-2.webm" type="video/webm" />
  </video>
</div>

  {/* Overlay */}
  <div className="fixed inset-0 bg-black/5 -z-10">
  </div>



  {/* Content */}
     <div className="
              relative
              w-full
              max-w-7xl
              
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-4
              sm:px-6">

          

          <p
              className={
                  alumniSansSC.className +
                  " text-[clamp(1.75rem,4vw,3rem)] font-medium tracking-[0.12em] text-black"
              }
          >
              One wristband. 
              <br/>
              <br/>
              Countless moments. 
              <br/>
              <br/>
              One message of hope.
          </p>


          <ProductFilm />

          <WristbandSection />

          <section
              className="
                  py-12

                  flex
                  flex-col
                  items-center
                  justify-center
              "
          >
              <p
                  className={
                      redHatDisplay.className +
                      `
                      text-[clamp(1rem,2.5vw,1.4rem)]
                      tracking-[0.15em]
                      text-black/70
                      `
                  }
              >
                  Click on the interactive wristband to explore
              </p>
              
              <Link
                  href="/experience"
              >
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet="/images/slow-float-loop-mobile.webp"
                        />

                        <img
                            src="/images/slow-float-loop.webp"
                            alt="Explore the wristband"
                            className="
                                mt-6
                                w-[clamp(16rem,70vw,30rem)]
                                h-auto
                                object-contain
                            "
                        />
                    </picture>
              </Link>

          </section>

          
          <p className="max-w-2xl mt-20 mb-5 opacity-75 mx-auto">
               ...
          </p>

          <p className={`${techb.className} mt-6 md:mt-10 mb-5 md:mb-0 text-xs md:text-sm opacity-50`}>
               Project Nehemiah • Under God's Construction
          </p>

     </div>

<a
  href="https://www.vecteezy.com/free-videos/abstract-background"
  target="_blank"
  rel="noopener noreferrer"
  className="
        absolute 
        bottom-1 
        md:bottom-3 
        right-3 
        md:right-4 
        z-20 
        text-[8px] 
        md:text-xs
         text-white/30
         hover:text-white/70"
>
  Abstract Background Stock Videos by Vecteezy
</a>


  
  </main>


    


  );
}