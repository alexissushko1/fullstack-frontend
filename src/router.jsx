import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import DepartmentList from "./features/department/DepartmentList";
import DepartmentDetails from "./features/department/DepartmentDetails";
import DepartmentForm from "./features/department/DepartmentForm";
import Login from "./features/auth/AuthForm";

import HomePage from "./features/HomePage";
import UpdateDepartmentForm from "./features/department/UpdateDepartmentForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/departments", element: <DepartmentList /> },
      { path: "/departments/:id", element: <DepartmentDetails /> },
      { path: "/departments/new", element: <DepartmentForm /> },
      { path: "/departments/updated", element: <UpdateDepartmentForm /> },
      { path: "/users/login", element: <Login /> },
    ],
  },
]);
export default router;
