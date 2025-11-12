import { PRICING_FOOTER_CONTENT } from "@/utils/constants";

const PricingFooter = () => {
  return (
    <div className="mt-16 group relative rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900 flex flex-col items-center gap-8 w-full max-w-6xl">
      <p className="text-center font-semibold text-lg lg:text-xl max-w-3xl text-slate-800 dark:text-slate-200">
        {PRICING_FOOTER_CONTENT.DESCRIPTION}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {PRICING_FOOTER_CONTENT.FEATURES.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFooter;
