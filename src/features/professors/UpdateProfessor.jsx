import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProfessorQuery, useUpdateProfessorMutation } from "../../features/professor/professorSlice";

const UpdateProfessor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: professor, error, isLoading } = useGetProfessorQuery(id, {
    skip: !id,
  });
  const [updateProfessor, { isSuccess }] = useUpdateProfessorMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(`/professors/${id}`);
    }
  }, [isSuccess, navigate, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedProfessor = {
      name: formData.get("name"),
      department: formData.get("department"),
    };
    await updateProfessor({ id, professor: updatedProfessor });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading professor details</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" defaultValue={professor?.name} required />
      </label>
      <label>
        Department:
        <input type="text" name="department" defaultValue={professor?.department} required />
      </label>
      <button type="submit">Update Professor</button>
    </form>
  );
};

export default UpdateProfessor;