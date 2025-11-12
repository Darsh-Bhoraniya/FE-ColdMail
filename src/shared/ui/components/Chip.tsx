export function Chip({
  label,
  color = "slate",
}: {
  label: string;
  color?: "emerald" | "amber" | "red" | "sky" | "slate";
}) {
  const dot = {
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
    sky: "bg-sky-500",
    slate: "bg-slate-400",
  }[color];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
