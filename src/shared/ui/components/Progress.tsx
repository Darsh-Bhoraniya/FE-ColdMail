export function Progress({
  value,
  max = 100,
}: {
  value: number;
  max?: number;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <div
        className="h-full bg-slate-900 transition-all dark:bg-white"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
