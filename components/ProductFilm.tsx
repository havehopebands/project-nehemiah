"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";



export default function ProductFilm() {

     const [isOpen, setIsOpen] = useState(false);

     return (
        <section
                    className="
                            w-full

                            flex
                            flex-col
                            items-center

                            mt-20
                            mb-20
                            "
            >

            <button
                    onClick={() => setIsOpen(true)}
                    className="
                        group
                        relative
                        w-full
                        max-w-5xl
                    "
>
              <img
                    src="/images/float-q60.webp"
                    alt="Watch the Have Hope Wristbands Film"
                    className="
                        w-full
                        h-auto

                        transition-all
                        duration-300

                        hover:scale-[1.01]

                        cursor-pointer
                    "
                />
                <div
                    className="
                        absolute
                        inset-0

                        flex
                        items-start
                        justify-center

                        pointer-events-none

                        pt-0
                        sm:pt-16
                    "
>
                   <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            backgroundColor: [
                                "rgba(255,255,255,0.03)",
                                "rgba(255,255,255,0.12)",
                                "rgba(255,255,255,0.03)",
                            ],
                            borderColor: [
                                "rgba(255,255,255,0.10)",
                                "rgba(255,255,255,0.35)",
                                "rgba(255,255,255,0.10)",
                            ],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    className="
                        w-16
                        h-16
                        sm:w-20
                        sm:h-20
                        rounded-full

                        bg-white/1
                        backdrop-blur-md

                        border
                        border-white/10

                        flex
                        items-center
                        justify-center

                        shadow-xl

                      

                        group-hover:scale-110
                        group-hover:bg-white/10
                        group-hover:border-white/30
                    "
     >
                            <div
                                className="
                                        ml-1

                                        w-0
                                        h-0

                                        border-y-[10px]
                                        sm:border-y-[12px]
                                        border-y-transparent

                                        border-l-[18px]
                                        sm:border-l-[18px]
                                        border-l-white
                                "
                                />
                            </motion.div>
                    </div>
            </button>
 
        <AnimatePresence>
        {isOpen && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}

                    className="
                        fixed
                        inset-0

                        z-[60]

                        bg-black/90

                        flex
                        items-center
                        justify-center

                        
                    "
                >

                  <>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="
                            absolute
                            z-10
                            top-6
                            right-6

                            w-12
                            h-12

                            rounded-full

                            bg-white/10
                            border
                            border-white/20

                            text-white
                            text-2xl

                            transition-all
                            duration-300

                            hover:bg-white/20
                            hover:scale-110
                        "
                        aria-label="Close video"
                    >
                        ✕
                    </button>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            duration: 0.35,
                            ease: "easeOut",
                        }}
                        className="
                            w-full
                            max-w-6xl

                            px-4
                            sm:px-6
                        "
                    >
                        <div
                            className="
                                aspect-video

                                overflow-hidden
                                rounded-2xl

                                shadow-2xl
                            "
                        >
        
                        <iframe
                            className="
                                w-full
                                h-full                                
                            "
                            src="https://www.youtube.com/embed/LL7MrsNLl8Q?autoplay=1&rel=0"
                            title="Have Hope Wristbands Product Film"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        </div>
                    </motion.div>
                </>

                </motion.div>
                )}
        </AnimatePresence>
         </section>
     );
}