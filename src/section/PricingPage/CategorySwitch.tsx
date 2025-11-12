import type { PricingCategory } from "@/utils/types";

interface CategorySwitchProps {
  category: PricingCategory;
  setCategory: (cat: PricingCategory) => void;
}

const CategorySwitch = ({ category, setCategory }: CategorySwitchProps) => {
  const categories: { label: string; value: PricingCategory }[] = [
    { label: "Google Workspace", value: "google" },
    { label: "Microsoft 365", value: "microsoft" },
    { label: "Prewarmed Mailboxes", value: "prewarmed" },
  ];

  return (
    <div className="mt-6 flex gap-4 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setCategory(cat.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            category === cat.value
              ? "bg-emerald-600 text-white"
              : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategorySwitch;
