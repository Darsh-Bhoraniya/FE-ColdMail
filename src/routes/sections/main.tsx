import LoadingScreen from "@/components/loading-screen";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// ----------------------------------------------------------------------

// Error

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    // children: [{ path: '404', element: <Page404 /> }],
  },
];
