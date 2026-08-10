import Link from "next/link";
import BackgroundVideo from "../BackgroundVideo";
import GlassCard from "../GlassCard";
import { greatVibes, publicSans, redHatDisplay } from "@/lib/fonts";
import Reveal from "../Reveal";

type HearContentProps = {
  hear: {
    verseReference: string;
    verseText: string;
  };
};

export default function HearContent({ hear }: HearContentProps) {
  return (
    <main 
        className="
        relative 
        flex 
        h-dvh
        flex-col 
        items-center 
        justify-center 
        px-6
        py-8
        text-white 
        overflow-hidden
        "
      >

    <BackgroundVideo
        video="/videos/hear.webm"
        attributionText="Video via Vecteezy.com"
        attributionHref="https://www.vecteezy.com/video/2041740-christmas-holiday-bible-seamless-motion-loop"
/>

      {/* Content */}
    <Reveal duration={1.6}>
        <h2
           className={greatVibes.className + " w-full text-center text-[clamp(2.75rem,8vw,4.5rem)] leading-tight tracking-tight mb-16"}
>
          God’s Word for You Today
        </h2>
    </Reveal>

    <Reveal delay={1.2}>
       <GlassCard className="px-8 py-12 text-center max-h-[45vh] overflow-y-auto">
         

   
        <p className= {redHatDisplay.className + " text-[clamp(1.5rem,5vw,2.25rem)] font-semibold mb-6"}>
          {hear.verseReference}
        </p>

        <p className= {publicSans.className + " text-[clamp(1.25rem,4.5vw,1.875rem)] leading-relaxed italic"}>
          "{hear.verseText}"
        </p>

       
      </GlassCard>
    </Reveal>

    

    </main>
  );
}