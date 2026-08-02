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
      <source src="/images/mountains.mp4" type="video/mp4" />
    </video>

  </div>

  {/* Overlay */}
  <div className="fixed inset-0 bg-black/60 -z-10">
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
                  spaceGrotesk.className +
                  " text-xl md:text-3xl font-medium tracking-[0.12em] "
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


          <p className="max-w-2xl mt-20 mb-5 opacity-75 mx-auto">
               ...
          </p>

          <p className={`${techb.className} mt-6 md:mt-10 mb-5 md:mb-0 text-xs md:text-sm opacity-50`}>
               Project Nehemiah • Under God's Construction
          </p>

     </div>

<a
  href="https://www.vecteezy.com/free-videos/mountain"
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
  Mountain Stock Videos by Vecteezy
</a>


  
  </main>


    


  );
}