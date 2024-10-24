import { createBrowserRouter } from "react-router-dom";
import AuthForm from "./features/auth/AuthForm";
import Root from "./layout/Root";
import ProfessorList from "./features/professors/ProfessorList";
import ProfessorDetails from "./features/professors/ProfessorDetails";
import AddProfessorForm from "./features/professors/AddProfessor";
import UpdateProfessor from "./features/professors/UpdateProfessor";
import DepartmentList from "./features/department/DepartmentList";
import DepartmentDetails from "./features/department/DepartmentDetails";
import DepartmentForm from "./features/department/departmentForm";

import Login from "./features/auth/AuthForm";

import HomePage from "./features/HomePage";
import UpdateDepartmentForm from "./features/department/UpdateDepartmentForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/auth", element: <AuthForm /> },
      { path: "/departments", element: <DepartmentList /> },
      { path: "/departments/:id", element: <DepartmentDetails /> },
      { path: "/departments/new", element: <DepartmentForm /> },
      { path: "/departments/updated", element: <UpdateDepartmentForm /> },
      { path: "/users/login", element: <Login /> },
      {
        path: "/professors",
        element: <ProfessorList />,
      },
      {
        path: "/professors/:professorId",
        element: <ProfessorDetails />,
      },
      {
        path: "/professors/new",
        element: <AddProfessorForm />,
      },
      {
        path: "/professors/:professorId/change",
        element: <UpdateProfessor />,
      },
    ],
  },
]);
export default router;
