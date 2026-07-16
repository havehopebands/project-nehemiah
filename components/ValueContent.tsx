import Link from "next/link";
import BackgroundVideo from "./BackgroundVideo";
import { greatVibes, publicSans } from "@/lib/fonts";

import Reveal from "./Reveal";

type ValueContentProps = {
  value: {
    identityStatements: string;
  };
};

export default function ValueContent({ value }: ValueContentProps) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white overflow-hidden">

      <BackgroundVideo
        video="/videos/value.mp4"
        attributionText="Video via Vecteezy.com"
        attributionHref="https://www.vecteezy.com/free-videos/looping"
      />

      {/* Content */}
      <Reveal duration={1.6}>
        <h2
          className={
            greatVibes.className +
            " w-full text-center text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-16"
          }
        >
          God Wants You to Know...
        </h2>
      </Reveal>

      <Reveal delay={1.2}>
        <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-12 text-center shadow-2xl max-h-[60vh] overflow-y-auto">

          <p
            className={
              publicSans.className +
              " text-xl md:text-2xl leading-relaxed whitespace-pre-line"
            }
          >
            {value.identityStatements}
          </p>

        </div>
      </Reveal>

      <Reveal delay={3.0}>
        <Link
          href="/"
          className="inline-block mt-16 rounded-full border border-white/40 px-4 py-2 text-xs md:px-6 md:py-3 md:text-base hover:bg-white/20 transition"
        >
          Explore More Moments
        </Link>
      </Reveal>

    </main>
  );
}