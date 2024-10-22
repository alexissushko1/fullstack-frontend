import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";
import ProfessorList from "./professors/ProfessorList";
import ProfessorDetails from "./professors/ProfessorDetails";
import ProfessorForm from "./professors/ProfessorForm";

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
        element: <ProfessorForm />,
      },
    ],
  },
]);
export default router;
