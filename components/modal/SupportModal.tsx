"use client";

import Image from "next/image";
import { redHatDisplay, publicSans, alumniSans, alumniSansSC } from "@/lib/fonts";

export default function SupportModal() {
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
                        Help us put hope within reach.
                    </h1>       
            
                    <div className="
                            mt-8 
                            w-full 
                            max-w-5xl

                            flex
                            flex-col

                            gap-10
                            md:flex-row
                            md:items-start
                            md:gap-12
                            
                        "
                    >
                        {/* GiveSendGo */}
                        <div
                            className="
                                w-full
                                shrink-0

                                md:w-[260px]

                                flex
                                justify-center
                            "
                        >
                            <iframe
                                src="https://www.givesendgo.com/have-hope-wristbands-a-digital-disciples/grabwidget"
                                width="260"
                                height="800"
                                frameBorder="0"
                                scrolling="no"
                                className="
                                    border-none
                                    overflow-hidden
                                "
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full">

                                <p
                                    className={
                                        publicSans.className +
                                        " text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                                    }
                                >
                                    Your support helps make it possible for Have Hope Bands to be 
                                    placed into the hands of people who may be searching for hope, 
                                    purpose, peace, or simply a reminder that they are not alone.
                                    
                                </p>

                                <p
                                    className={
                                        publicSans.className +
                                        " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                                    }
                                >
                                    Through your generosity, we can provide wristbands at no cost through 
                                    evangelism, outreach, and community initiatives—creating opportunities 
                                    for people to encounter God's Word and begin a journey of digital discipleship.

                                </p>

                                <p
                                    className={
                                        publicSans.className +
                                        " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                                    }
                                >
                                    We dream of putting our first 500 Have Hope wristbands into the hands of people 
                                    who need hope—in schools, workplaces, churches, communities, and even on the 
                                    streets. Each wristband is an opportunity to begin a conversation, share the 
                                    Good News of salvation through Jesus Christ, and open a pathway toward 
                                    digital discipleship.                             
                                </p>

                                <p
                                    className={
                                        publicSans.className +
                                        " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 font-bold text-white/90"
                                    }
                                >
                                    With your support, we can turn 500 wristbands into 500 
                                    opportunities to share hope—and take the first steps
                                    toward a ministry that can reach many more.
                                </p>

                                <p
                                    className={
                                        publicSans.className +
                                        " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 font-bold text-white/90"
                                    }
                                >
                                    Together, we can share the hope of Jesus Christ—one wristband, one moment, 
                                    and one life at a time.
                                </p>
                        </div>
                    </div>    

            </div>





    </div>
    );
}