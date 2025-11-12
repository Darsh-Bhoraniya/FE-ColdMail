export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={[
        "inline-flex h-6 w-11 items-center rounded-full transition",
        checked ? "bg-emerald-500/90" : "bg-slate-300 dark:bg-slate-700",
      ].join(" ")}
      title={label}
    >
      <span
        className={[
          "mx-1 inline-block h-5 w-5 rounded-full bg-white shadow transition",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}
