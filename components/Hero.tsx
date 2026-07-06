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
  className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white">
    
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
<div className="absolute top-6 left-0 right-0 z-20 flex flex-wrap justify-center gap-3 px-4">

 <Link href="/h1" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  HEAR
</Link>

<Link href="/a" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  GROW
</Link>

<Link href="/v" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  REFLECT
</Link>

<Link href="/e1" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  LISTEN
</Link>

<Link href="/h2" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  HOPE
</Link>

<Link href="/o" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  PRAY
</Link>

<Link href="/p" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  HELP
</Link>

<Link href="/e2" className="rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20">
  DISCOVER
</Link>

</div>

  {/* Content */}
  <div className="relative z-20">
    <h1 className={`${bessita.className} text-5xl md:text-7xl leading-loose mb-20 mt-10`}>
  Hope In Each Moment
</h1>

    <p className={`${jasper.className} text-4xl mb-16`}>
      God is preparing something for you here.
    </p>

    <p className="max-w-2xl mt-20 mb-5 opacity-75 mx-auto">
      We are prayerfully building a place where you can find Scripture,
      prayer, worship, encouragement, and guidance — one moment at a time.
    </p>

    <p className={`${techb.className} mt-10 text-sm opacity-50`}>
      Project Nehemiah • Under Construction
    </p>

    </div>

<a
  href="https://www.vecteezy.com/free-videos/mountain"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-3 right-4 z-20 text-xs text-white/40 hover:text-white/70"
>
  Mountain Stock Videos by Vecteezy
</a>

  </main>

  );
}