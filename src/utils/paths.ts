// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

// ----------------------------------------------------------------------

export const paths = {
  login: "/login",
  pricing: "/pricing",
  faqs: "/faqs",
  // AUTH
  auth: {
    root: ROOTS.AUTH,
    login: `/login`,
    sentEmail: "/sent-email",
    register: "/register",
    forgotPassword: "/forgot-password",
    createAccount: "/createAcct",
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
};
