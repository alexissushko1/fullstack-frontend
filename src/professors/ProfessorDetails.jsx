import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteProfessorMutation,
  useGetProfessorQuery,
} from "./professorSlice";

export default function ProfessorDetails() {
  const { professorId } = useParams();
  const {
    data: professor,
    isLoading,
    error,
  } = useGetProfessorQuery(professorId);

  const navigate = useNavigate();

  const [deleteProfessor] = useDeleteProfessorMutation();
  async function removeProfessor() {
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
      <h1>{professor.name}</h1>
      <p>{professor.bio}</p>
      <p>{professor.profileImage}</p>
      <p>{professor.email}</p>
      <p>{professor.phone}</p>
      <p>{professor.department}</p>
      <button onClick={removeProfessor}>Delete Professor</button>
    </>
  );
}
