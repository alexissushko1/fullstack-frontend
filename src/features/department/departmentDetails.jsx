import {
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
} from "./departmentSlice";

export default function DepartmentDetails({
  selectedDepartmentId,
  setSelectedDepartmentId,
}) {
  const { data: department, isLoading } =
    useGetDepartmentQuery(selectedDepartmentId);

  const [deleteDepartment] = useDeleteDepartmentMutation();

  function removeDepartment(id) {
    setSelectedDepartmentId();
    deleteDepartment(id);
  }

  let $details;

  if (!selectedDepartmentId) {
    $details = <p>Select a department to see more details.</p>;
  } else if (isLoading) {
    $details = <p>Loading department information...</p>;
  } else {
    $details = (
      <>
        <h2>
          {department.name} #{department.id}
        </h2>
        <p>{department.description}</p>
        <h3>{department.image}</h3>
        <h4>{department.email}</h4>
        <h4>{department.phone}</h4>
        <button onClick={() => removeDepartment(department.id)}>
          Remove Department
        </button>
      </>
    );
  }

  return (
    <main>
      <h2>Professor</h2>
      {$details}
    </main>
  );
}
