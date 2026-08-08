import { greatVibes, redHatDisplay } from "@/lib/fonts";
import GlassCard from "@/components/GlassCard";

export default function HeedContent() {
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
            <source src="/videos/lavender.webm" type="video/webm" />
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

        {/* HEED question */}
            <h1
            className={`
                ${greatVibes.className}
                max-w-4xl
                text-center
                text-[clamp(2.25rem,7vw,4.5rem)]
                leading-tight
            `}
            >
            What is God calling you to entrust to Him today?
            </h1>

            <div
                className="
                    flex
                    w-full
                    max-w-md
                    flex-col
                    items-center
                    gap-4
                    px-6
                    sm:gap-5
                    sm:px-0
                "
            >
                <button
                    className={`
                        ${redHatDisplay.className}
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-black/35
                        px-4
                        py-3
                        text-[clamp(1rem,4vw,1.5rem)]
                        font-medium
                        text-white
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/30
                        hover:bg-black/50
                        hover:shadow-xl
                        active:translate-y-0
                        active:bg-black/60
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/50
                        sm:py-4
                    `}
                >
                    My Heart
                </button>

                <button
                    className={`
                        ${redHatDisplay.className}
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-black/35
                        px-4
                        py-3
                        text-[clamp(1rem,4vw,1.5rem)]
                        font-medium
                        text-white
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/30
                        hover:bg-black/50
                        hover:shadow-xl
                        active:translate-y-0
                        active:bg-black/60
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/50
                        sm:py-4
                    `}
                >
                    My Relationships
                </button>

                

                <button
                    className={`
                        ${redHatDisplay.className}
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-black/35
                        px-4
                        py-3
                        text-[clamp(1rem,4vw,1.5rem)]
                        font-medium
                        text-white
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/30
                        hover:bg-black/50
                        hover:shadow-xl
                        active:translate-y-0
                        active:bg-black/60
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/50
                        sm:py-4
                    `}
                >
                    My Needs
                </button>

                <button
                    className={`
                        ${redHatDisplay.className}
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-black/35
                        px-4
                        py-3
                        text-[clamp(1rem,4vw,1.5rem)]
                        font-medium
                        text-white
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/30
                        hover:bg-black/50
                        hover:shadow-xl
                        active:translate-y-0
                        active:bg-black/60
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/50
                        sm:py-4
                    `}
                >
                    My Health
                </button>

                <button
                    className={`
                        ${redHatDisplay.className}
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-black/35
                        px-4
                        py-3
                        text-[clamp(1rem,4vw,1.5rem)]
                        font-medium
                        text-white
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/30
                        hover:bg-black/50
                        hover:shadow-xl
                        active:translate-y-0
                        active:bg-black/60
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/50
                        sm:py-4
                    `}
                >
                    My Purpose
                </button>

            </div>

        </div>

            <a
                href="https://www.vecteezy.com/free-videos/lavender"
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
                Lavender Stock Videos by Vecteezy
            </a>
        </div>
  );
}