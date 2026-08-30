"use client";

import { useState } from "react";
import SupportMinistryModal from "@/components/modal/SupportMinistryModal";
import Modal from "@/components/modal/Modal";

import Link from "next/link";
import Image from "next/image";
import ProductFilm from "../ProductFilm";
import WristbandSection from "../WristbandSection";
import DigitalDiscipleshipSection from "../DigitalDiscipleshipSection";
import Header from "../Header";
import { Mail } from "lucide-react";



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
  const [isSupportMinistryOpen, setIsSupportMinistryOpen] = useState(false);  
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
              A simple wristband. 
              <br/>
              <br/>
              A digital discipleship journey. 
              <br/>
              <br/>
              A message of hope.
          </p>


          <ProductFilm />

          <DigitalDiscipleshipSection />

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

          
        <button
            type="button"
            onClick={() => setIsSupportMinistryOpen(true)}
            className={
                alumniSansSC.className +
                " mt-6 rounded-full border border-black/20 bg-[#2B2B2B] px-10 py-4 text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#B8B8B8] hover:text-black"
            }
        >
            Support the Ministry
        </button>



            <div
                className="
                    mt-12
                    flex
                    flex-col
                    items-center
                    gap-4
                "
            >
                <p
                    className={`
                        ${redHatDisplay.className}
                        text-[clamp(0.9rem,2vw,1.1rem)]
                        font-medium
                        tracking-[0.12em]
                        text-black/70
                    `}
                >
                    Contact Us
                </p>

                <div
                    className="
                        flex
                        items-center
                        gap-6
                    "
                >

                    {/* Email */}

                    <a
                        href="mailto:have.hope.bands@gmail.com"
                        aria-label="Email Have Hope Bands"
                        className="
                            text-black/60
                            transition-colors
                            duration-300
                            hover:text-black
                        "
                    >
                        <Mail
                            className="
                                h-6
                                w-6
                            "
                            strokeWidth={1.8}
                        />
                    </a>


                    {/* Messenger */}

                    <a
                        href="https://m.me/hopeineachmoment"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Message us on Messenger"
                        className="
                            text-black/60
                            transition-colors
                            duration-300
                            hover:text-black
                        "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="
                                h-6
                                w-6
                            "
                            aria-hidden="true"
                        >
                            <path d="M12 2C6.48 2 2 6.1 2 11.15c0 2.88 1.43 5.45 3.7 7.12V22l3.43-1.88c.9.25 1.87.38 2.87.38 5.52 0 10-4.1 10-9.35S17.52 2 12 2Zm.99 12.52-2.57-2.74-5.02 2.74 5.52-5.86 2.5 2.74 5-2.74-5.43 5.86Z" />
                        </svg>
                    </a>


                    {/* Facebook */}

                    <a
                        href="https://www.facebook.com/hopeineachmoment"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit us on Facebook"
                        className="
                            text-black/60
                            transition-colors
                            duration-300
                            hover:text-black
                        "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="
                                h-6
                                w-6
                            "
                            aria-hidden="true"
                        >
                            <path d="M14 8h3V4.5c-.52-.07-1.7-.15-3.23-.15-3.2 0-5.39 1.95-5.39 5.55V13H5.75v3.91h2.63V22h4.06v-5.09h3.37l.53-3.91h-3.9V10.3c0-1.13.31-2.3 1.56-2.3Z" />
                        </svg>
                    </a>

                </div>
            </div>

          

            

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



<Modal
    isOpen={isSupportMinistryOpen}
    onClose={() => setIsSupportMinistryOpen(false)}
>
    <SupportMinistryModal />
</Modal>
  
  </main>


    


  );
}