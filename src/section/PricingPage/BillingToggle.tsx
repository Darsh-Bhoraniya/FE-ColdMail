import { BILLING_TOGGLE_CONTENT } from "@/utils/constants";

interface BillingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

const BillingToggle = ({ isYearly, setIsYearly }: BillingToggleProps) => {
  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      <span
        className={`${
          !isYearly ? "font-semibold text-emerald-600" : "text-slate-500"
        }`}
      >
        {BILLING_TOGGLE_CONTENT.MONTHLY}
      </span>
      <button
        onClick={() => setIsYearly(!isYearly)}
        className={`relative w-14 h-8 rounded-full flex items-center transition-colors duration-300 ${
          isYearly ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"
        }`}
      >
        <span
          className={`absolute w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${
            isYearly ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
      <span
        className={`${
          isYearly ? "font-semibold text-emerald-600" : "text-slate-500"
        }`}
      >
        {BILLING_TOGGLE_CONTENT.YEARLY}
      </span>
    </div>
  );
};

export default BillingToggle;
