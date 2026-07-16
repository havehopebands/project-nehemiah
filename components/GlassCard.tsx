type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={
        "relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl " +
        className
      }
    >
      {children}
    </div>
  );
}