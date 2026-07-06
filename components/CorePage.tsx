import Image from "next/image";
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
    <div>
      <Image
        src="/icon.png"
        alt="Hope In Each Moment Logo"
        width={120}
        height={120}
        priority
        className="mb-8 mx-auto"
      />

      <h1 className={`${brightwall.className} text-5xl mb-6`}>
        {title}
      </h1>

      <p className="text-xl opacity-75">
        {subtitle}
      </p>
    </div>

  </main>
);
  
}