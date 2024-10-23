import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useDeleteProfessorMutation,
  useGetProfessorQuery,
} from "./professorSlice";
import "./professors.css";
import UpdateProfessorForm from "./UpdateProfessor";
import { useState } from "react";

export default function ProfessorDetails() {
  const { professorId } = useParams();
  const {
    data: professor,
    isLoading,
    error,
  } = useGetProfessorQuery(professorId);

  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [deleteProfessor] = useDeleteProfessorMutation();
  const [deleted, setDeleted] = useState(false);

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
      navigate("/professors");
    } catch (e) {
      console.error(e);
    }
  }

  if (deleted) {
    return <Navigate to="/professors" />;
  }

  if (isLoading) return <p>Loading professor...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="ProfDetail">
        <div className="ProfessorDetail">
          <h1>{professor.name}</h1>
          <p>Bio:{professor.bio}</p>
          <p>Image:{professor.profileImage}</p>
          <p>Email:{professor.email}</p>
          <p>Phone:{professor.phone}</p>
          <p>Department:{professor.departmentId}</p>
          <button onClick={removeProfessor}>Delete Professor</button>
        </div>
        <div className="UpdateProfessor">
          <UpdateProfessorForm />
        </div>
      </div>
    </>
  );
}
