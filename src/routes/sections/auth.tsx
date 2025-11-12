import { paths } from "../../utils/paths";
import CreateAcct from "../../section/RegisterPage/RegisterPage";

export const authRoutes = [
  //   {
  //     path: paths.login,
  //     element: (
  //     //   <PublicRoute>
  //         <LoginPage />
  //     //   </PublicRoute>
  //     ),
  //   },
  {
    path: paths.auth.createAccount,
    element: (
      //   <PublicRoute>
      <CreateAcct />
      //   </PublicRoute>
    ),
  },
];
