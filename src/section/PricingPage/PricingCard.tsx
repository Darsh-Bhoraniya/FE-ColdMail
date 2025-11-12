import { Button } from "@/shared/ui/components/Button";
import { PRICING_CARD_CONTENT } from "@/utils/constants";
import { paths } from "@/utils/paths";
import type { Plan, PricingCategory } from "@/utils/types";
import { Link } from "react-router-dom";

interface PricingCardProps {
  plans: Plan[];
  category: PricingCategory;
}

const PricingCard = ({ plans, category }: PricingCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {plans.map((plan, idx) => (
        <div key={idx} className="group relative animate-float fade-up">
          {/* Gradient glow hover effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
          />

          {/* Card */}
          <div
            className={`flex flex-col gap-5 p-6 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg ${
              plan.highlight
                ? "border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800"
                : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            }`}
          >
            {/* Header */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3
                  className={`text-lg md:text-xl font-semibold ${
                    plan.highlight
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-600 text-white">
                    {PRICING_CARD_CONTENT.POPULAR}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {plan.desc}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end">
              <h4 className="text-4xl font-bold text-slate-900 dark:text-white">
                ${plan.price}
              </h4>

              <span className="ml-1 text-lg text-slate-500 dark:text-slate-400">
                {category === "prewarmed"
                  ? `(${PRICING_CARD_CONTENT.PRICE_POST_FIX_PREWARMED})`
                  : `/${PRICING_CARD_CONTENT.PRICE_POST_FIX}`}
              </span>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {plan.billingInfo}
            </p>

            {/* Buy Button */}
            {/* TODO: Revert back this button on Go Live */}
            {/* <Button type="button" variant="primary" onClick={() => {}}>
              {PRICING_CARD_CONTENT.BUY_NOW}
            </Button> */}

            <Link to={paths.auth.createAccount} className="flex justify-center">
              <Button className="btn-shine shadow-glow">
                Get Early Access
              </Button>
            </Link>

            {/* Features */}
            <div className="flex flex-col gap-3 mt-4">
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center text-sm text-slate-600 dark:text-slate-300"
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
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
