"use client";

import Image from "next/image";
import { redHatDisplay, publicSans, alumniSans } from "@/lib/fonts";

export default function CallingModal() {
    return (
    <div
            className="
                relative
                h-full
                overflow-y-auto
            "
        >
            {/* Background */}

            <Image
                src="/images/paper.png"
                alt=""
                fill
                priority
                className="
                    object-cover
                    select-none
                    pointer-events-none
                "
            />

             {/* Content */}

            <div
                className="
                    relative
                    z-10

                    h-full

                    flex
                    flex-col
                    items-center

                    px-6
                    md:px-10
                    lg:px-12

                    pt-10
                    md:pt-16
                    lg:pt-20

                    pb-10
                "
            >


                <h1>
                    className={
                        alumniSans.className +
                        " text-5xl md:text-6xl font-semibold tracking-wide text-white"
                    }

                    Our Calling
                </h1>        
            
                    <div className="mt-8 w-full max-w-3xl">
            
                        <p
                            className={
                                publicSans.className +
                                " text-lg leading-8 text-white/90"
                            }
                        >
                            Guided by faith and our deep reverence for 
                            the Great Commission, we believe God has 
                            called us to inspire and cultivate a lifelong 
                            pursuit of knowing and following Jesus Christ 
                            through faithful daily spiritual disciplines 
                            across this generation and the next.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-lg leading-8 text-white/90"
                            }
                        >
                            We long to see people rooted and anchored in Scripture, 
                            built on prayer, shaped by worship, marked by His 
                            faithfulness, and transformed through a deep
                            communion with God.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-lg leading-8 text-white/90"
                            }
                        >
                            We believe that technology has the potential to do more 
                            than simply connect people with information—it can also 
                            become a bridge that connects hearts to God. When placed 
                            in His hands, even the simplest tools can become instruments 
                            of hope, encouragement, and discipleship.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-lg leading-8 text-white/90"
                            }
                        >
                            Through Have Hope Wristbands, we pray that every wearer will 
                            embark on a journey of digital discipleship, discovering the 
                            hope, peace, purpose, and life found in Jesus Christ.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-lg leading-8 text-white/90"
                            }
                        >
                            May every scan, every page, every prayer, and every moment become 
                            a step toward a deeper relationship with Him, leading to a 
                            lifetime of faithful discipleship.
                        </p>

                    </div>

            </div>





    </div>
    );
}