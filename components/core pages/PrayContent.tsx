"use client";

import { useState } from "react";

import { greatVibes, publicSans, redHatDisplay } from "@/lib/fonts";
import GlassCard from "@/components/GlassCard";


export default function PrayContent() {

    const [userRequest, setUserRequest] = useState("");

    const [prayer, setPrayer] = useState("");

    async function handlePray() {
        const response = await fetch("/api/pray/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userRequest,
            }),
        });

            const data = await response.json();

            setPrayer(data.prayer);
    }


    return (

        /* Background video */
        <div className="relative h-dvh overflow-hidden">

            <video
                autoPlay
                loop
                muted
                playsInline
                className="
                    fixed
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
            >
                <source
                    src="/videos/rays.webm"
                    type="video/webm"
                />
            </video>

            <div
                className="
                    fixed
                    inset-0
                    z-[1]
                    bg-black/40
                "
            />

            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-full
                    w-full
                    flex-col
                    items-center
                    justify-center
                    gap-8
                    px-6
                    pt-8
                    sm:gap-10
                    sm:px-8
                    sm:pt-10
                    md:gap-12
                    md:px-12
                    md:pt-12
                "
            >

                {/* PRAY question */}
                <h1
                    className={`
                        ${greatVibes.className}
                        max-w-4xl
                        text-center
                        text-[clamp(2.75rem,7vw,4.5rem)]
                        leading-tight
                    `}
                >
                    What do you want to talk to God about?
                </h1>

                <div
                    className="
                        flex
                        w-full
                        max-w-md
                        flex-col
                        items-center
                        gap-5
                    "
                >

                    {/* Glass Card */}
                    <div className="w-full">
                        <GlassCard>

                            <div
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    gap-7
                                    py-6
                                    text-center
                                    sm:gap-8
                                    sm:py-8
                                "
                            >

                                {prayer ? (
                                    <div
                                        className={`
                                            ${redHatDisplay.className}
                                            max-h-[50dvh]
                                            w-full
                                            overflow-y-auto
                                            [-ms-overflow-style:none]
                                            [scrollbar-width:none]
                                            [&::-webkit-scrollbar]:hidden
                                            px-5
                                            text-left
                                            text-[clamp(1rem,3vw,1.05rem)]
                                            leading-relaxed
                                            text-white
                                        `}
                                    >
                                        {prayer}
                                    </div>
                                ) : (
                                    <div className="w-full px-5">

                                        <textarea
                                            value={userRequest}
                                            onChange={(e) => setUserRequest(e.target.value)}
                                            placeholder="Share your heart with God..."
                                            className={`
                                                ${redHatDisplay.className}
                                                h-40
                                                w-full
                                                resize-none
                                                bg-transparent
                                                p-2
                                                text-[clamp(1rem,3vw,1.05rem)]
                                                text-white
                                                placeholder:text-white/50
                                                outline-none
                                            `}
                                        />

                                    </div>
                                )}

                            </div>

                        </GlassCard>
                    </div>

                </div>
                
                <button
                    onClick={handlePray}
                    className={`
                        ${redHatDisplay.className}
                        rounded-full
                        border
                        border-white/25
                        bg-white/10
                        px-8
                        py-3
                        text-[clamp(0.95rem,3vw,1rem)]
                        font-medium
                        tracking-wide
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-200
                        hover:bg-white/15
                        hover:border-white/40
                        active:scale-95
                    `}
                >
                    Let us pray
                </button>



            </div>

            {/* Video Attribution */}
            <a
                href="https://www.vecteezy.com/free-videos/sunlight"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    fixed
                    bottom-3
                    right-3
                    z-10
                    whitespace-nowrap
                    text-[9px]
                    text-white/60
                    transition-opacity
                    hover:text-white/90
                    sm:bottom-4
                    sm:right-4
                    sm:text-[10px]
                "
            >
                Sunlight Stock Videos by Vecteezy
            </a>

        </div>
    );
}