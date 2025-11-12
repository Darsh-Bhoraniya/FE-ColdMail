import { cn } from "@/shared/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-sm",
  }[size];
  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-400 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-slate-300 dark:text-slate-100 dark:hover:bg-slate-800",
    outline:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus:ring-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
    danger:
      "bg-red-600 text-white hover:bg-red-500 focus:ring-red-400 dark:bg-red-500 dark:hover:bg-red-400",
  };
  return (
    <button
      className={cn(base, sizes, variants[variant], className)}
      {...props}
    />
  );
}
