import Image from "next/image";

type CorePageProps = {
  title: string;
  subtitle: string;
};

export default function CorePage({ title, subtitle }: CorePageProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">

  <Image
    src="/icon.png"
    alt="Hope In Each Moment Logo"
    width={120}
    height={120}
    className="mb-8"
  />

  <h1 className="text-5xl mb-6">
    {title}
  </h1>

  <p className="text-xl opacity-75">
    {subtitle}
  </p>

</main>
  );
}