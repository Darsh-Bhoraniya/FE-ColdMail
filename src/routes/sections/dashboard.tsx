import LoadingScreen from "@/components/loading-screen";
import MainLayout from "@/layout";
import Pricing from "@/section/PricingPage/Pricing";
import { paths } from "@/utils/paths";
import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <MainLayout>
    <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
  </MainLayout>
);

export const dashboardRoutes: RouteObject[] = [
  // {
  //   path: APP_ROUTES.dashboard,
  //   element: (
  //     <PrivateRoute allowRoles={[USER_TYPE.USER]}>
  //       <LayoutWrapper>
  //         <LandingPageView />
  //       </LayoutWrapper>
  //     </PrivateRoute>
  //   ),
  // },
  {
    path: paths.pricing,
    element: (
      <LayoutWrapper>
        <Pricing />
      </LayoutWrapper>
    ),
  },

  // {
  //   path: APP_ROUTES.Dashboard.leadUpdate,
  //   element: (
  //     <LayoutWrapper>
  //       <LeadUpdatePage />
  //     </LayoutWrapper>
  //   ),
  // },
];
