import Image from "next/image";
import Link from "next/link";
import { brightwall, jasper } from "@/lib/fonts";

type CorePageProps = {
  title: string;
  subtitle: string;
};

export default function CorePage({ title, subtitle }: CorePageProps) {
  return (
  
  <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white overflow-hidden">

    {/* Background Image */}
    <Image
      src="/images/construction-bg.jpg"
      alt="Under construction background"
      fill
      className="object-cover -z-20"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60 -z-10"></div>

    {/* Content */}
    <div className="w-full max-w-sm md:max-w-2xl px-4">
      <Image
        src="/icon.png"
        alt="Hope In Each Moment Logo"
        width={120}
        height={120}
        priority
        className="w-24 md:w-32 h-auto mb-6 md:mb-8 mx-auto"
      />

      <h1 className={`${brightwall.className} text-4xl md:text-6xl mb-4 md:mb-6`}>
        {title}
      </h1>

      <p className="text-base md:text-xl opacity-75">
        {subtitle}
      </p>

      <Link
         href="/"
         className="inline-block mt-10 rounded-full border border-white/40 px-5 py-2 text-sm text-white hover:bg-white/20 transition"
      >
        Explore More Moments
      </Link>

    </div>

  </main>
);
  
}