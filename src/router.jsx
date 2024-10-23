import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";
import AuthForm from "./features/auth/AuthForm";
import Root from "./layout/Root";
import DepartmentList from "./features/department/departmentList";
import HomePage from "./features/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/auth", element: <AuthForm /> },
      { path: "/departments", element: <DepartmentList /> },
    ],
  },
]);
export default router;
