"use client";

import Link from "next/link";
import BackgroundVideo from "./BackgroundVideo";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { greatVibes, publicSans, redHatDisplay } from "@/lib/fonts";
import YouTubePlayer from "@/components/YouTubePlayer";

type ExaltContentProps = {
  exalt: {
    title: string;
    artist: string;
    youtubeId: string;
  };
};

export default function ExaltContent({
  exalt,
}: ExaltContentProps) {






  return (
    <main
  className="
    relative
    min-h-screen
    flex
    flex-col
    items-center
    justify-start
    px-6
    pt-12
    pb-8
    text-white
    overflow-hidden
  "
>

      <BackgroundVideo
        video="/videos/exalt.mp4"
        attributionText="Video via Vecteezy.com"
        attributionHref="https://www.vecteezy.com/free-videos/trees"
      />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">

        <Reveal duration={1.6}>
          <h2
            className={
              greatVibes.className +
              " w-full text-center text-5xl sm:text-6xl md:text-7xl leading-tight mb-16"
            }
          >
            Lift Your Heart in Worship
          </h2>
        </Reveal>

        <Reveal delay={1.2}>
          <GlassCard>

              <YouTubePlayer
                    title={exalt.title}
                    artist={exalt.artist}
                    youtubeId={exalt.youtubeId}
               />

          </GlassCard>
        </Reveal>

        <Reveal delay={3.0}>
          <Link
            href="/"
            className={
              publicSans.className +
              " inline-flex items-center justify-center mt-16 rounded-full border border-white/40 px-6 py-3 text-xs hover:bg-white/20 transition"
            }
          >
            Explore More Moments
          </Link>
        </Reveal>

      </div>

          

    </main>
  );
}
