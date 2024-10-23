import { useSelector } from "react-redux";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
} from "./departmentSlice";
import { useParams } from "react-router-dom";

export default function DepartmentDetails(/*{
  selectedDepartmentId,
  setSelectedDepartmentId,
}*/) {
  const { id: selectedDepartmentId } = useParams();
  const { data: department, isLoading } =
    useGetDepartmentQuery(selectedDepartmentId);

  const [deleteDepartment] = useDeleteDepartmentMutation();
  const token = useSelector((state) => state.auth.token);

  const removeDepartment = async (id) => {
    if (!token) {
      console.error("No token found");
      return;
    }
    //setSelectedDepartmentId();
    try {
      await deleteDepartment(id).unwrap();
    } catch (e) {
      console.error("Failed to delete department:", error);
    }
  };

  let $details;

  if (!selectedDepartmentId) {
    $details = <p>Select a department to see more details.</p>;
  } else if (isLoading) {
    $details = <p>Loading department information...</p>;
  } else {
    $details = (
      <>
        <h3>
          {department.name} #{department.id}
        </h3>
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
      <h2>Department Details</h2>
      {$details}
    </main>
  );
}
