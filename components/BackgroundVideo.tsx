type BackgroundVideoProps = {
  video: string;
  attributionText?: string;
  attributionHref?: string;
};

export default function BackgroundVideo({
  video,
  attributionText,
  attributionHref,
}: BackgroundVideoProps) {
  return (
    <>
      {/* Background Video */}
      <div className="absolute inset-0 -z-20">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

            {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {attributionText && attributionHref && (
        <a
          href={attributionHref}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10 text-[10px] text-white/40 hover:text-white/70 transition-colors"
        >
          {attributionText}
        </a>
      )}
    </>
  );
}