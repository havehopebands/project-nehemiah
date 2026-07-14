import Link from "next/link";

import localfont from "next/font/local";

const bessita = localfont({ src: "../public/fonts/Bessita Handwriting Free.otf" });
const brightwall = localfont({ src: "../public/fonts/Brightwall Personal Use Only.ttf" });
const geometr212 = localfont({ src: "../public/fonts/Geometr212 BkCn BT Book.ttf" });
const jasper = localfont({ src: "../public/fonts/JaspersHandwriting-Regular.ttf" });
const techb = localfont({ src: "../public/fonts/techb___.ttf" });

export default function Hero() {
  return (

    <main
  className="relative min-h-screen flex flex-col items-center justify-center md:justify-center text-center px-6 text-white overflow-hidden">
    
 {/* Background Video Container */}
  <div className="absolute inset-0 z-0">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/images/mountains.mp4" type="video/mp4" />
    </video>

  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10">
  </div>

{/* Core Page Navigation */}
<div className="absolute top-4 md:top-6 left-0 right-0 z-30 flex flex-wrap justify-center gap-2 md:gap-3 px-3 md:px-4">

<Link
  href="/h1"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
  <span className="text-xl md:text-2xl font-bold leading-none">H</span>
  <span className="text-xs md:text-sm leading-none">EAR</span>
</span>
</Link>

<Link
  href="/a"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
    <span className="text-xl md:text-2xl font-bold leading-none">A</span>
    <span className="text-xs md:text-sm leading-none">BSORB</span>
  </span>
</Link>

<Link
  href="/a"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
    <span className="text-xl md:text-2xl font-bold leading-none">V</span>
    <span className="text-xs md:text-sm leading-none">ALUE</span>
  </span>
</Link>

<Link
  href="/a"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
    <span className="text-xl md:text-2xl font-bold leading-none">E</span>
    <span className="text-xs md:text-sm leading-none">XALT</span>
  </span>
</Link>

<Link
  href="/a"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
    <span className="text-xl md:text-2xl font-bold leading-none">H</span>
    <span className="text-xs md:text-sm leading-none">OPE</span>
  </span>
</Link>

<Link
  href="/a"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
    <span className="text-xl md:text-2xl font-bold leading-none">O</span>
    <span className="text-xs md:text-sm leading-none">PEN UP</span>
  </span>
</Link>

<Link
  href="/a"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
    <span className="text-xl md:text-2xl font-bold leading-none">P</span>
    <span className="text-xs md:text-sm leading-none">RAY</span>
  </span>
</Link>

<Link
  href="/a"
  className="rounded-full border border-white/40 px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm text-white hover:bg-white/20"
>
  <span className="inline-flex items-baseline">
    <span className="text-xl md:text-2xl font-bold leading-none">E</span>
    <span className="text-xs md:text-sm leading-none">NCOUNTER</span>
  </span>
</Link>

</div>

  {/* Content */}
  <div className="relative z-20 mt-28 md:mt-0">
    <h1 className={`${bessita.className} text-4xl sm:text-5xl md:text-7xl leading-normal md:leading-loose mb-10 md:mb-20`}>
  Hope In Each Moment
</h1>

    <p className={`${jasper.className} text-4xl mb-16`}>
      God is preparing something for you here.
    </p>

    <p className="max-w-2xl mt-20 mb-5 opacity-75 mx-auto">
      We are prayerfully building a place where you can find Scripture,
      prayer, worship, encouragement, and guidance — one moment at a time.
    </p>

    <p className={`${techb.className} mt-6 md:mt-10 mb-5 md:mb-0 text-xs md:text-sm opacity-50`}>
      Project Nehemiah • Under God's Construction
    </p>

    </div>

<a
  href="https://www.vecteezy.com/free-videos/mountain"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-1 md:bottom-3 right-3 md:right-4 z-20 text-[8px] md:text-xs text-white/30 hover:text-white/70"
>
  Mountain Stock Videos by Vecteezy
</a>

  </main>

  );
}