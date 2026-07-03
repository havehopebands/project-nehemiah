import localfont from "next/font/local";

const bessita = localfont({ src: "../public/fonts/Bessita Handwriting Free.otf" });
const brightwall = localfont({ src: "../public/fonts/Brightwall Personal Use Only.ttf" });
const geometr212 = localfont({ src: "../public/fonts/Geometr212 BkCn BT Book.ttf" });
const jasper = localfont({ src: "../public/fonts/JaspersHandwriting-Regular.ttf" });
const techb = localfont({ src: "../public/fonts/techb___.ttf" });


export default function Home() {
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
      <source src="/images/Fiber Optics Resized.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10"></div>

  {/* Content */}
  <div className="relative z-20">
    <h1 className={`${bessita.className} text-5xl md:text-7xl leading-tight mb-30`}>
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

  </main>
  );
} 