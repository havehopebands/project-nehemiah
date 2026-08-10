import { greatVibes, redHatDisplay } from "@/lib/fonts";
import GlassCard from "@/components/GlassCard";

export default function ObserveContent() {
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
            <source src="/videos/raindrops.webm" type="video/webm" />
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

        {/* OBSERVE question */}
            <h1
            className={`
                ${greatVibes.className}
                max-w-4xl
                text-center
                text-[clamp(2.75rem,7vw,4.5rem)]
                leading-tight
            `}
            >
            How has God blessed others?
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
    <div
        className="
            flex
            w-full
            items-center
            gap-3
        "
    >
        {/* Previous */}
        <button
            type="button"
            aria-label="Previous"
            className="
                flex
                shrink-0
                items-center
                justify-center
                p-2
                text-4xl
                text-white/70
                transition-opacity
                hover:text-white
            "
        >
            ‹
        </button>

        {/* Glass Card */}
        <div className="min-w-0 flex-1">
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
                    <p
                        className={`
                            ${redHatDisplay.className}
                            text-[clamp(1.5rem,5vw,2rem)]
                            font-medium
                        `}
                    >
                        ... in times of{" "}
                        <span className="font-semibold tracking-wide">
                            NEED.
                        </span>
                    </p>

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
                        <span>HEALING</span>

                        <span className="text-white/50">·</span>

                        <span>PROVISION</span>

                        <span className="text-white/50">·</span>

                        <span>DELIVERANCE</span>
                    </div>
                </div>
            </GlassCard>
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        aria-label="Next"
                        className="
                            flex
                            shrink-0
                            items-center
                            justify-center
                            p-2
                            text-4xl
                            text-white/70
                            transition-opacity
                            hover:text-white
                        "
                    >
                        ›
                    </button>
                </div>

                {/* Position indicator */}
                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                    aria-label="Card 1 of 6"
                >
                    <span className="h-2 w-2 rounded-full bg-white" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
            </div>
        </div>

            <a
                href="https://www.vecteezy.com/free-videos/raindrops"
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
                Raindrops Stock Videos by Vecteezy
            </a>
        </div>
  );
}