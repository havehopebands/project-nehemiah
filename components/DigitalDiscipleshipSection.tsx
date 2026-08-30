"use client";

import Image from "next/image";
import { redHatDisplay, publicSans } from "@/lib/fonts";
import { useState } from "react";
import LandscapeModal from "@/components/modal/LandscapeModal";
import DigitalDiscipleshipModal from "@/components/modal/DigitalDiscipleshipModal";
    


export default function DigitalDiscipleshipSection() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            className="
                w-full
                max-w-6xl

                py-20
                md:py-28

                px-6

                flex
                flex-col
                items-center
                text-center
            "
        >

            <div
                className="
                    w-full

                    rounded-3xl
                    bg-neutral-700/75
                    backdrop-blur-md
                    shadow-2xl

                    overflow-hidden
                "
            >

                    <div
                        className="
                            flex
                            flex-col
                            lg:flex-row
                            items-center
                        "
                    >

                        {/* Image */}

                        <div
                            className="
                                w-full
                                lg:w-[45%]

                                p-6
                            "
                        >
                            <div
                                className="
                                    relative

                                    h-72
                                    lg:h-[24rem]

                                    overflow-hidden
                                    rounded-2xl

                                    shadow-xl
                                "
                            >
                                <Image
                                    src="/images/dd-1.webp"
                                    alt="Digital Discipleship"
                                    fill
                                    className="
                                        object-cover
                                    "
                                />
                            </div>
                        </div>

                        {/* Title */}

                        <div
                            className="
                                flex
                                flex-1

                                items-center
                                justify-center

                                p-8
                                lg:p-16
                            "
                        >
                            <h2
                                onClick={() => setIsModalOpen(true)}
                                className={
                                    redHatDisplay.className +
                                    `
                                    cursor-pointer

                                    text-center

                                    text-[clamp(2rem,5vw,4rem)]
                                    font-normal
                                    tracking-tight
                                    text-white

                                    transition
                                    duration-300

                                    hover:opacity-70
                                    `
                                }
                            >
                                What is
                                <br />
                                Digital Discipleship?
                            </h2>
                        </div>

                    </div>
                    

            </div>
            

            <LandscapeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <DigitalDiscipleshipModal />
            </LandscapeModal>


        </section>
    );
}