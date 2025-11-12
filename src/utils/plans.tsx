import type { Plan } from "@/utils/types";

export const GOOGLE_PLANS_MONTHLY: Plan[] = [
  {
    name: "Starter Plan",
    desc: "Best for Freelancers Looking to Startup",
    price: "39",
    billingInfo: "Billed Per Month",
    features: [
      "10 Google Mailboxes Included",
      "Additional Mailboxes at $3.50/Mailbox",
      "US/EU IP accounts only",
      "Support",
    ],
  },
  {
    name: "Growth Plan",
    desc: "Best for Mid-Size Agencies",
    price: "99",
    billingInfo: "Billed Per Month",
    features: [
      "30 Google Mailboxes Included",
      "Additional Mailboxes at $3.25/Mailbox",
      "US/EU IP accounts only",
      "Support",
    ],
    highlight: true,
  },
  {
    name: "Pro Plan",
    desc: "Best for Agencies with Multiple Clients",
    price: "299",
    billingInfo: "Billed Per Month",
    features: [
      "100 Google Mailboxes Included",
      "Additional Mailboxes at $3.00/Mailbox",
      "US/EU IP accounts only",
      "Priority Support",
      "API Access",
    ],
  },
];

export const GOOGLE_PLANS_YEARLY: Plan[] = [
  {
    name: "Starter Plan",
    desc: "Best for Freelancers Looking to Startup",
    price: "32.50",
    billingInfo: "Billed Per Year",
    features: [
      "10 Google Mailboxes Included",
      "Additional Mailboxes at $3.25/Mailbox",
      "US/EU IP accounts only",
      "Support",
    ],
  },
  {
    name: "Growth Plan",
    desc: "Best for Mid-Size Agencies",
    price: "82.50",
    billingInfo: "Billed Per Year",
    features: [
      "30 Google Mailboxes Included",
      "Additional Mailboxes at $2.75/Mailbox",
      "US/EU IP accounts only",
      "Priority Support",
      "Free Onboarding",
    ],
    highlight: true,
  },
  {
    name: "Pro Plan",
    desc: "Best for Agencies with Multiple Clients",
    price: "250",
    billingInfo: "Billed Per Year",
    features: [
      "100 Google Mailboxes Included",
      "Additional Mailboxes at $2.50/Mailbox",
      "US/EU IP accounts only",
      "Priority Support",
      "API Access",
    ],
  },
];

export const MICROSOFT_PLANS_MONTHLY: Plan[] = [
  {
    name: "Starter Plan",
    desc: "Perfect for Small Microsoft Teams",
    price: "39",
    billingInfo: "Billed Per Month",
    features: [
      "10 Microsoft 365 Mailboxes Included",
      "Additional Mailboxes at $3.50/Mailbox",
      "Support",
    ],
  },
  {
    name: "Growth Plan",
    desc: "For Mid-Size Microsoft Agencies",
    price: "99",
    billingInfo: "Billed Per Month",
    features: [
      "30 Microsoft Mailboxes Included",
      "Additional Mailboxes at $3.25/Mailbox",
      "Support",
    ],
    highlight: true,
  },
  {
    name: "Pro Plan",
    desc: "For Large Microsoft Teams",
    price: "299",
    billingInfo: "Billed Per Month",
    features: [
      "100 Microsoft Mailboxes Included",
      "Additional Mailboxes at $3.00/Mailbox",
      "US/EU IP accounts only",
      "Priority Support",
      "API Access",
    ],
  },
];

export const MICROSOFT_PLANS_YEARLY: Plan[] = [
  {
    name: "Starter Plan",
    desc: "Perfect for Small Microsoft Teams",
    price: "32.50",
    billingInfo: "Billed Per Year",
    features: [
      "10 Microsoft 365 Mailboxes Included",
      "Additional Mailboxes at $3.25/Mailbox",
      "Support",
    ],
  },
  {
    name: "Growth Plan",
    desc: "For Mid-Size Microsoft Agencies",
    price: "82.50",
    billingInfo: "Billed Per Year",
    features: [
      "30 Microsoft 365 Mailboxes Included",
      "Additional Mailboxes at $2.75/Mailbox",
      "Support",
    ],
    highlight: true,
  },
  {
    name: "Pro Plan",
    desc: "For Large Microsoft Teams",
    price: "250",
    billingInfo: "Billed Per Year",
    features: [
      "100 Microsoft 365 Mailboxes Included",
      "Additional Mailboxes at $2.50/Mailbox",
      "Priority Support",
      "API Access",
    ],
  },
];

export const PREWARMED_PLANS: Plan[] = [
  {
    name: "Prewarmed Mailbox",
    desc: "Best for Small Teams and Individuals",
    price: "39",
    billingInfo: "Renews at $24/month",
    features: [
      "3 Pre-Warmed Google Mailboxes included",
      "Add more mailboxes at $8/mailbox/month",
      "1 Domain Included",
      "Extra Domains at $15/domain/annum",
    ],
  },
  {
    name: "Growth Plan",
    desc: "Best for Mid-Size Teams and Agencies",
    price: "149",
    billingInfo: "Renews at $84/month",
    features: [
      "12 Pre-Warmed Google Mailboxes included",
      "Add more mailboxes at $7/mailbox/month",
      "4 Domains Included",
      "Extra Domains at $15/domain/annum",
    ],
    highlight: true,
  },
  {
    name: "Pro Plan",
    desc: "Best for Agencies with Multiple Clients",
    price: "339",
    billingInfo: "Renews at $180/month",
    features: [
      "30 Pre-Warmed Google Mailboxes included",
      "Add more mailboxes at $6/mailbox/month",
      "10 Domains Included",
      "Extra Domains at $15/domain/annum",
    ],
  },
];
