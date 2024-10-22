import { useGetProfessorQuery } from "./professorSlice";

export default function ProfessorDetails() {
  const { professorId } = useParams();
  const {
    data: professor,
    isLoading,
    error,
  } = useGetProfessorQuery(professorId);

  if (isLoading) return <p>Loading professor...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>{professor.name}</h1>
      <p>{professor.bio}</p>
      <p>{professor.profileImage}</p>
      <p>{professor.email}</p>
      <p>{professor.phone}</p>
      <p>{professor.departmentId}</p>
    </>
  );
}
