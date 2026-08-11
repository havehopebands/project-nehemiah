"use client";

import Image from "next/image";
import { redHatDisplay, publicSans, alumniSans, alumniSansSC } from "@/lib/fonts";

export default function PursuitModal() {
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
                        Our Pursuit
                    </h1>       
            
                    <div className="mt-8 w-full max-w-3xl">
            
                        <p
                            className={
                                publicSans.className +
                                " text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            Our desire is to make the hope of Jesus Christ accessible in the 
                            ordinary moments of everyday life—especially to a generation that 
                            is constantly connected through technology, yet often searching
                             for meaning, peace, purpose, and hope.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            We aim to reach people wherever life happens—in campuses, workplaces, 
                            churches, small groups, communities, and even in the everyday encounters
                             we have with people around us. Through evangelism, outreach, and 
                             meaningful conversations, we hope to place Have Hope wristbands into 
                             the hands of people who need them, where they can become a meaningful 
                             companion and make a lasting impact on their lives. 
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            God-willing, and through the generosity of sponsors and donors, Have Hope 
                            wristbands can be produced and distributed at no cost to people we 
                            encounter through evangelism, outreach events, and community initiatives.
                             Their support allows us to bring the message of hope to people and places
                              we may otherwise never reach.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            We also invite churches, schools, workplaces, companies, ministries, 
                            and other organizations to partner with us by purchasing Have Hope 
                            wristbands in bulk and distributing them within their own communities. 
                            Whether used for an event, an outreach program, a small group, or simply 
                            given to someone who needs encouragement, each wristband can become a 
                            doorway into digital discipleship.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            In this way, Have Hope wristbands can reach people not only through the 
                            ministry itself, but also through churches, schools, workplaces, and 
                            organizations that choose to make them part of their existing ministry and
                            outreach efforts—using them as another tool to share hope, encourage faith, 
                            and foster digital discipleship within their own communities. 
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            Together, we can use technology to share the hope of Jesus Christ, foster 
                            a habit of daily spiritual discipline, and help people grow in their 
                            relationship with Him—one wristband, one moment, and one life at a time.
                        </p>

                    </div>

            </div>





    </div>
    );
}