import Link from "next/link";
import BackgroundVideo from "../BackgroundVideo";
import { greatVibes, publicSans } from "@/lib/fonts";

import Reveal from "../Reveal";

type ValueContentProps = {
  value: {
    identityStatements: string;
  };
};

export default function ValueContent({ value }: ValueContentProps) {
  return (
    <main 
        className="
        relative 
        h-dvh
        flex
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
        video="/videos/value.webm"
        attributionText="Video via Vecteezy.com"
        attributionHref="https://www.vecteezy.com/free-videos/looping"
      />

      {/* Content */}
      <Reveal duration={1.6}>
        <h2
          className={
            greatVibes.className +
            " w-full text-center text-[clamp(2.75rem,8vw,4.5rem)] leading-tight tracking-tight mb-16"
          }
        >
          God Wants You to Know...
        </h2>
      </Reveal>

      <Reveal delay={1.2}>
        <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-12 text-center shadow-2xl h-[50vh] overflow-y-auto">

          <p
            className={
              publicSans.className +
              " text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed whitespace-pre-line"
            }
          >
            {value.identityStatements}
          </p>

        </div>
      </Reveal>

    

    </main>
  );
}