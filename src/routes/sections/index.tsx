import { Navigate, useRoutes } from "react-router-dom";
import { mainRoutes } from "./main";
import { dashboardRoutes } from "./dashboard";
import { authRoutes } from "./auth";
import LandingPageView from "@/pages/LandingPage/LandingPage";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LandingPageView />,
    },

    // Auth
    ...authRoutes,

    // Dashboard
    ...dashboardRoutes,
    // Main
    ...mainRoutes,

    // No match
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
