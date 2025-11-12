import { clsx } from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLinkClassName?: string;
};

export function ShineButton({
  className,
  children,
  asLinkClassName,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold",
        "text-white bg-slate-900 dark:bg-white dark:text-slate-900",
        "focus:outline-none focus:ring-2 focus:ring-slate-300",
        "transition hover:shadow-glow",
        className
      )}
      {...props}
    >
      {/* glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 opacity-40 blur-[10px]"
      />
      {/* shine sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.65),transparent)] bg-[length:200%_100%] animate-shimmer"
      />
      <span className={clsx("relative z-10", asLinkClassName)}>{children}</span>
    </button>
  );
}
