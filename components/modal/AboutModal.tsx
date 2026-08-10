"use client";

import Image from "next/image";
import { redHatDisplay, publicSans, alumniSans, alumniSansSC } from "@/lib/fonts";

export default function AboutModal() {
    return (
    <div
            className="
                relative
                h-full
                overflow-hidden
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
                    overflow-y-auto
                    no-scrollbar

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


                    <h1
                        className={
                            alumniSansSC.className +
                            " text-5xl md:text-6xl font-semibold tracking-wide text-[#C1A048]"
                        }
                    >
                        Our Story
                    </h1>       
            
                    <div className="mt-8 w-full max-w-3xl">
            
                        <p
                            className={
                                publicSans.className +
                                " text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            What began as an idea gradually evolved through seasons of prayer, 
                            learning, and discovery until it became evident that it was more than 
                            just a project—it was a ministry waiting to be set in motion.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            It started with a simple question:
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 font-bold text-white/90"
                            }
                        >
                            What could continually remind people that there is hope?
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            The original concept was straightforward and practical—to print a
                            Bible verse on a silicone wristband. However, countless wristbands
                            already carried printed Scripture, and it became clear that something
                            more was needed. The question soon shifted from{" "}
                            <em>"What verse should be printed?"</em>
                            {" "}to{" "}
                            <em>"What if the wristband could offer more than a single verse?"</em>{" "}
                            
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            What if it could guide people through God's Word, introduce them to the
                            Gospel, encourage them in prayer, strengthen them through worship, and
                            lead them into a deeper relationship with God? While the vision seemed
                            compelling, there was no practical way to fit so much into something
                            so small, and the idea was once again set aside.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            Then, in what seemed like an ordinary moment, came an unexpected 
                            realization: the remarkable potential hidden within a simple QR code.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            What had once appeared impossible suddenly became possible. One idea 
                            led to another, and what began as a simple concept quickly grew into 
                            something far greater. It was no longer merely an interesting idea—it 
                            had become a calling to faithfully create a tool that could guide 
                            people in their everyday walk with God.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            From that moment, the vision took shape. Eight QR codes would be thoughtfully 
                            integrated into a single wristband, each serving as an invitation into 
                            a different aspect of daily spiritual discipline. Together, they would 
                            form a simple yet meaningful pathway designed to help wearers grow in 
                            their relationship with God.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            And through every scan, every page, and every step of that journey, 
                            the message would remain the same: 
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 font-bold text-white/90"
                            }
                        >
                            there is Hope In Each Moment.   
                        </p>


                    </div>

            </div>





    </div>
    );
}