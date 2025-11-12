export function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-2xl"
      />
      <div className="rounded-2xl border border-slate-200 glass dark:border-slate-700 card-hover">
        {children}
      </div>
    </div>
  );
}
