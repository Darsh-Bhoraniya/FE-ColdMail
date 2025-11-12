import { PRICING_HEADER_CONTENT } from "@/utils/constants";

const PricingHeader = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        <span className="gradient-text">{PRICING_HEADER_CONTENT.TITLE}</span>
      </h1>

      <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
        {PRICING_HEADER_CONTENT.SUBTITLE}
      </p>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        {PRICING_HEADER_CONTENT.DESCRIPTION}
      </p>
    </>
  );
};

export default PricingHeader;
