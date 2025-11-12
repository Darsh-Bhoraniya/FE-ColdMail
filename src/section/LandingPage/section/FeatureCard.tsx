// import { ChevronRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition dark:border-slate-700 dark:bg-slate-900 hover:shadow-glow hover:-translate-y-0.5">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition group-hover:opacity-100 bg-gradient-to-r from-indigo-500/15 via-sky-500/15 to-emerald-500/15"
      />
      <div className="relative">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
          {icon}
        </div>
        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {desc}
        </p>
        {/* <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-900 opacity-0 transition group-hover:opacity-100 dark:text-slate-100">
          Learn more <ChevronRight className="h-4 w-4" />
        </div> */}
      </div>
    </div>
  );
};

export default FeatureCard;
