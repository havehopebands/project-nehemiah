export default function Home() {
  return (
    <main
  className="min-h-screen flex flex-col items-center justify-center text-center px-6  text-white-900">
    
{/* Background Video */}
  <video className= "absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted playsInline>
    <source src="/images/Fiber Optics Resized.mp4" type="video/mp4"/> 
  </video>


{/* Foreground Content */}
<h1 className="text-8xl mb-25 font-['allura'] max-w-4xl stroke-[5px] stroke-black text-white drop-shadow-lg">
  Hope In Each Moment
</h1>

      <p className="text-4xl max-w-4xl mb-20 font-['ScriptC'] [word-spacing:0.5rem]" stroke-1px stroke-black text-white="true">
  God is preparing something for you here.

      </p>

      <p className="max-w-2xl mb-5 opacity-75">
        We are prayerfully building a place where you can find Scripture,
        prayer, worship, encouragement, and guidance—one moment at a time.
      </p>

      <p className="mt-10 text-sm mb-20 opacity-50">
        Project Nehemiah • Under Construction
      </p>
    </main>
  );
}