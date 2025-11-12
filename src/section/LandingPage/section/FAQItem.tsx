import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  que: string;
  ans: string;
  i: number;
}

const FAQItem = ({ que, ans, i }: FAQItemProps) => {
  const [open, setOpen] = useState(i === 0);

  return (
    <div className="group px-6 py-4 sm:px-8 border-b border-slate-200/60 dark:border-slate-800/60">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <span className="text-sm font-semibold">{que}</span>

        <ChevronDown
          className={`h-4 w-4 ${open ? "rotate-180" : ""} transition-transform`}
        />
      </button>

      {open && (
        <div className="pt-3 text-sm text-slate-600 dark:text-slate-300">
          {ans}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
