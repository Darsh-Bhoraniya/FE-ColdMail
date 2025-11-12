export interface Plan {
  name: string;
  desc: string;
  price: string;
  billingInfo: string;
  features: string[];
  highlight?: boolean;
}

export type PricingCategory = "google" | "microsoft" | "prewarmed";
