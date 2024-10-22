import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";
import AuthForm from "./features/auth/AuthForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/auth", element: <AuthForm /> }],
  },
]);
export default router;
