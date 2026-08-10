import { greatVibes, redHatDisplay } from "@/lib/fonts";
import GlassCard from "@/components/GlassCard";

export default function PrayContent() {
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

                                <div
                                    className={`
                                        ${redHatDisplay.className}
                                        flex
                                        flex-col
                                        items-center
                                        gap-3
                                        text-[clamp(1.15rem,5vw,1.5rem)]
                                    `}
                                >
                                    <span>Type in</span>

                                    <span>your</span>

                                    <span>prayer</span>

                                    <span>concerns.</span>
                                </div>

                            </div>

                        </GlassCard>
                    </div>

                </div>

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