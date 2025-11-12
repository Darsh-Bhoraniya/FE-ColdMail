import BillingToggle from "@/section/PricingPage/BillingToggle";
import CategorySwitch from "@/section/PricingPage/CategorySwitch";
import PricingCard from "@/section/PricingPage/PricingCard";
import PricingFooter from "@/section/PricingPage/PricingFooter";
import PricingHeader from "@/section/PricingPage/PricingHeader";
import Aurora from "@/shared/ui/effects/Aurora";
import { GridPattern } from "@/shared/ui/effects/GridPattern";
import {
  GOOGLE_PLANS_MONTHLY,
  GOOGLE_PLANS_YEARLY,
  MICROSOFT_PLANS_MONTHLY,
  MICROSOFT_PLANS_YEARLY,
  PREWARMED_PLANS,
} from "@/utils/plans";
import type { PricingCategory } from "@/utils/types";
import { useState } from "react";

const Pricing = () => {
  const [category, setCategory] = useState<PricingCategory>("google");
  const [isYearly, setIsYearly] = useState(false);

  const plans =
    category === "google"
      ? isYearly
        ? GOOGLE_PLANS_YEARLY
        : GOOGLE_PLANS_MONTHLY
      : category === "microsoft"
      ? isYearly
        ? MICROSOFT_PLANS_YEARLY
        : MICROSOFT_PLANS_MONTHLY
      : PREWARMED_PLANS;

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-slate-950">
      <GridPattern />
      <Aurora />

      <div className="relative z-10 flex flex-col items-center px-6 py-20">
        <div className="text-center max-w-2xl mb-14">
          <PricingHeader />
          <CategorySwitch category={category} setCategory={setCategory} />
          {category !== "prewarmed" && (
            <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
          )}
        </div>

        <PricingCard plans={plans} category={category} />
        <PricingFooter />
      </div>
    </main>
  );
};

export default Pricing;
