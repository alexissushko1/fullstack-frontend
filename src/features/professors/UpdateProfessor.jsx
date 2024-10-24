import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProfessorQuery,
  useUpdateProfessorMutation,
} from "./professorSlice";

const UpdateProfessor = () => {
  const { professorId } = useParams();
  const navigate = useNavigate();
  const {
    data: professor,
    error,
    isLoading,
  } = useGetProfessorQuery(professorId, {
    skip: !professorId,
  });
  const [updateProfessor, { isSuccess, isError }] =
    useUpdateProfessorMutation();
  useEffect(() => {
    if (isSuccess) {
      navigate(`/professors/${professorId}`);
    }
  }, [isSuccess, navigate, professorId]);

  const handleSubmit = async (e) => {
    if (!professorId) return;
    const formData = new FormData(e.target);
    const updatedProfessor = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      profileImage: formData.get("profileImage"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      departmentId: formData.get("departmentId"),
    };

    try {
      await updateProfessor({
        professorId,
        professor: updatedProfessor,
      }).unwrap();
    } catch (err) {
      console.error("Could not update professors", err);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading professor details</p>;
  if (isError) return <p>Could not update professors</p>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <h2>Update a Professor</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          defaultValue={professor?.name}
          required
        />
      </label>
      <label>
        Email
        <input type="email" name="email" defaultValue={professor?.email} />
      </label>
      <label>
        Department:
        <input
          type="int"
          name="departmentId"
          defaultValue={professor?.departmentId}
          required
        />
      </label>
      <button>Update Professor</button>
    </form>
  );
};

export default UpdateProfessor;
