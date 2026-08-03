"use client";

import Image from "next/image";
import { redHatDisplay, publicSans, alumniSans, alumniSansSC } from "@/lib/fonts";

export default function CommitmentModal() {
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
                        Our Commitment
                    </h1>       
            
                    <div className="mt-8 w-full max-w-3xl">
            
                        <p
                            className={
                                publicSans.className +
                                " text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            As faithful stewards of the ministry God has entrusted
                            to us, and in pursuit of the Great Commission, we proclaim
                            the Gospel of Jesus Christ by creating meaningful 
                            opportunities for people to engage with God's Word, 
                            grow in prayer, worship Him wholeheartedly, and deepen 
                            their relationship with Him.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            We will share biblically faithful, Christ-centered, 
                            and Spirit-led resources that point hearts to Jesus 
                            Christ and the hope found in Him alone.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            We aim to steward technology with wisdom and integrity, 
                            advancing the Gospel through digital discipleship. 
                            Through every wristband, every scan, and every moment, 
                            we pray that people will hear God's voice, respond in faith, 
                            and grow in faithful obedience.
                        </p>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-white/90"
                            }
                        >
                            Above all, we commit to glorifying God in everything we do,
                             acknowledging that this ministry belongs to Him. 
                        </p>

                        

                    </div>

            </div>





    </div>
    );
}