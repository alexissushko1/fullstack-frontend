import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteProfessorMutation,
  useGetProfessorQuery,
} from "./professorSlice";
import "./professors.css";
import UpdateProfessorForm from "./UpdateProfessor";

export default function ProfessorDetails() {
  const { professorId } = useParams();
  const {
    data: professor,
    isLoading,
    error,
  } = useGetProfessorQuery(professorId);

  const navigate = useNavigate();

  const [deleteProfessor] = useDeleteProfessorMutation();
  const token = useSelector((state) => state.auth.token);
  async function removeProfessor() {
    if (!token) {
      console.error("No token found");
      return;
    }
    if (!professor) {
      console.log("No professor found");
      return;
    }
    try {
      await deleteProfessor(professor.id);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  }

  if (isLoading) return <p>Loading professor...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="ProfDetail">
        <div className="ProfessorDetail">
          <h1>{professor.name}</h1>
          <p>{professor.bio}</p>
          <p>{professor.profileImage}</p>
          <p>{professor.email}</p>
          <p>{professor.phone}</p>
          <p>{professor.departmentId}</p>
          <button onClick={removeProfessor}>Delete Professor</button>
        </div>
        <div className="UpdateProfessor">
          <UpdateProfessorForm />
        </div>
      </div>
    </>
  );
}
