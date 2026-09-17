"use client";

import { useRef, useState } from "react";
import {
    publicSans,
    redHatDisplay,
    alumniSansSC,
} from "@/lib/fonts";

const moments = [
    {
        name: "HEAR",
        href: "/h1",
        description:
            "Listen to what God wants to tell you from His Word.",
    },
    {
        name: "ABSORB",
        href: "/a",
        description:
            "Reflect on God's Word through guided devotion.",
    },
    {
        name: "VALUE",
        href: "/v",
        description:
            "Discover your identity and worth in Christ.",
    },
    {
        name: "EXALT",
        href: "/e1",
        description:
            "Lift your heart in worship and praise.",
    },
    {
        name: "HEED",
        href: "/h2",
        description:
            "Find biblical wisdom for your current season of life.",
    },
    {
        name: "OBSERVE",
        href: "/o",
        description:
            "See God's faithfulness through stories and testimonies.",
    },
    {
        name: "PRAY",
        href: "/p",
        description:
            "Bring your heart before God through guided prayer.",
    },
    {
        name: "EMBARK",
        href: "/e2",
        description:
            "Take your next step in following Christ.",
    },
];

export default function LandingPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMoving, setIsMoving] = useState(false);

    const touchStartY = useRef(0);
    const wheelLocked = useRef(false);

    const getIndex = (index: number) => {
        return (
            (index + moments.length) %
            moments.length
        );
    };

    const moveMoment = (direction: number) => {
        if (isMoving) {
            return;
        }

        setIsMoving(true);

        setCurrentIndex((index) =>
            getIndex(index + direction)
        );

        setTimeout(() => {
            setIsMoving(false);
        }, 300);
    };

    const currentMoment =
        moments[currentIndex];


    return (
        <main
            className="
                relative
                h-dvh
                w-full
                overflow-hidden
            "
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-fill
                "
            >
                <source
                    src="/images/landing_hd.webm"
                    type="video/webm"
                />
            </video>

            {/* Core Moment Selector */}
            <div
                className="
                    absolute
                    left-[65%]
                    top-[50%]
                    z-10
                    flex
                    w-[90%]
                    max-w-md
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                "
            >
                <div
                    className="
                        flex
                        w-[clamp(220px,50vw,600px)]
                        flex-col
                        rounded-[32px]

                        border
                        bg-[#27292b]/25
                        backdrop-blur-4xl
                        border-white/10
                        
                        px-[clamp(18px,4vw,42px)]
                        py-[clamp(14px,3vw,28px)]
                        shadow-xl
                        
                    "
                >
                    <p
                        className={`
                            ${publicSans.className}
                            mb-2
                            text-center
                            text-[10px]
                            tracking-[0.18em]
                            text-black/80
                        `}
                    >
                        CHOOSE YOUR MOMENT:
                    </p>

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <button
                            onClick={() => moveMoment(-1)}
                            className="
                                text-2xl
                                text-black/60
                                transition
                                hover:text-white
                            "
                        >
                            ‹
                        </button>

                        <a
                            href={currentMoment.href}
                            className="
                                text-center
                                no-underline
                            "
                        >
                            <h2
                                className={`
                                    ${alumniSansSC.className}
                                    text-[clamp(38px,4vw,52px)]
                                    tracking-[0.16em]
                                    text-[#018c9e]
                                `}
                            >
                                {currentMoment.name}
                            </h2>
                        </a>

                        <button
                            onClick={() => moveMoment(1)}
                            className="
                                text-2xl
                                text-black/60
                                transition
                                hover:text-white
                            "
                        >
                            ›
                        </button>
                    </div>

                    <p
                        className={`
                            ${publicSans.className}
                            mt-3
                            text-center
                            text-[clamp(14px,2vw,20px)]
                            leading-6
                            text-black/70
                        `}
                    >
                        {currentMoment.description}
                    </p>
                </div>

            </div>

            

        </main>
    );
}