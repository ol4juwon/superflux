import * as pagesPath from "../pagesPath";
// import Login from "./Login";
// import VerifyToken from "./VerifyToken";
// import EmailSent from "./EmailSent";
// import ResetPassword from "./ResetPassword";
// import withSuspense from "components/HOC/WithSuspens";
import LandingPage from "./LandingPage";
// import ResendVerification from "./ResendVerification";
// import NewPassword from "./NewPassword";
// import PasswordResetSuccess from "./PasswordResetSuccess";

export const publicRoutes = [
  
  {
    path: "/",
    element: LandingPage,
    exact: false,
  },
];
