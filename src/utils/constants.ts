// **example **

const ROOTS = { AUTH: `/auth`, ADMIN: `/admin`, API: `/api` };

// export const APP_ROUTES = {
//   // Authentication
//   register: '/registration',
//   login: '/login',
//   sentEmail: '/sent-email',
//   verifyEmail: '/verify-status',
//   forgotPassword: '/forgot-password',
//   setPassword: '/reset-password',
//   passwordSuccess: '/set-password-successfully',

//   Admin: {
//     dashboard: '/dashboard',
//     jobOpenings: '/job-openings',
//     jobOpeningsNew: '/job-openings/new',
//   },
// };

export const API_ROUTES = {
  Auth: {
    Login: `${ROOTS.API}${ROOTS.AUTH}/login`,
    RefreshToken: `${ROOTS.API}${ROOTS.AUTH}/refresh`,
  },

  Admin: {
    Login: `${ROOTS.API}${ROOTS.AUTH}/login`,
  },

  User: {
    Login: `${ROOTS.API}/users/login`,
    RefreshToken: `${ROOTS.API}/users/refresh-token`,
    setPassword: `${ROOTS.API}/users/set-password`,
  },
};

export const PRICING_PAGE_CONTENT = {
  priceCard: {
    popular: "POPULAR",
    billedPer: "Billed Per",
    buyNow: "Buy Now",
  },
};

export const PRICING_CARD_CONTENT = {
  POPULAR: "POPULAR",
  BUY_NOW: "Buy Now",
  PRICE_POST_FIX: "Month",
  PRICE_POST_FIX_PREWARMED: "For the first month",
  BILLING_INFORMATION_PREWARMED: "",
};

export const PRICING_HEADER_CONTENT = {
  TITLE: "Pricing Plans",
  SUBTITLE: "Flexible pricing plans",
  DESCRIPTION:
    "AI-powered algorithm to recommend the best job opportunities, saving you time and effort.",
};

export const PRICING_FOOTER_CONTENT = {
  DESCRIPTION:
    "Get full access to all features across every plan, with the flexibility to upgrade or purchase additional plans anytime.",
  FEATURES: [
    "Instant Mailbox Setup",
    "Seamless Integrations",
    "Deliverability-Optimized Configuration",
    "Scalable Domain & Mailbox Management",
    "DNS Management & Health Checks",
    "Bulk Profile Customization",
    "Domain & Workspace Segregation",
    "Domain & Email Forwarding with Tagging",
  ],
};

export const BILLING_TOGGLE_CONTENT = {
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

export const SHARED_CONTENT = {
  GET_STARTED: "Get Started",
  BOOK_DEMO: "Book Demo",
};

export const WORKS_CONTENT = {
  TITLE: "Set up in five steps",
  DESCRIPTION:
    "Onboard end-to-end in under 15 minutes. DNS verified automatically.",
  CTA_BUTTON: "Get started",
};
