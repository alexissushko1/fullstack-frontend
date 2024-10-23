import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import ProfessorList from "./professors/ProfessorList";
import ProfessorDetails from "./professors/ProfessorDetails";
import AddProfessorForm from "./professors/AddProfessor";
import UpdateProfessorForm from "./professors/AddProfessor";
import DepartmentList from "./features/department/departmentList";
import HomePage from "./features/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
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
        path: "/professors/change",
        element: <UpdateProfessorForm />,
      },
    ],
    children: [
      { index: true, element: <HomePage /> },
      { path: "/departments", element: <DepartmentList /> },
    ],
  },
]);
export default router;
