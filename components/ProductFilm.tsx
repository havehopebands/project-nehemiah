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
                        max-w-2xl
                    "
>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="
                            w-full
                            h-auto
                            rounded-2xl
                            transition-all
                            duration-300

                            hover:scale-[1.01]
                            hover:brightness-110
                            cursor-pointer
                        "
                    >
                        <source
                            src="/images/teaser_540p.webm"
                            type="video/webm"
                        />
                    </video>
                
            </button>

            <p
                className="
                    mt-4

                    text-xs
                    sm:text-sm

                    tracking-wide

                    text-white/60

                    transition-colors
                    duration-300
                "
            >
                Click the teaser to watch the full product film.
            </p>
 
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