import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import DepartmentList from "./features/department/DepartmentList";
import HomePage from "./features/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/departments", element: <DepartmentList /> },
    ],
  },
]);
export default router;
